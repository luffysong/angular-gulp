import API from '../base/API.js';
import { getService } from '../base/utls.js';
const RESULT_TYPE = {
  COMPANY: 'COMPANY',
  ORG: 'ORG',
  USER: 'USER',
};

function getContentHtml(entity, content) {
  return {
    label: content,
    value: entity.name || entity,
    obj: entity,
  };
}

function makeCreateProjectHtml(name) {
  return getService('$sce').trustAsHtml(`
      <p class="search-no-result"><span class="createProject">无结果，创建 ”${name}“ 创业项目</span>
      </p>
    `);
}
function makeProjectHtml(project, isFirst, isLast) {
  return `
  ${isFirst ? '<h4>项目</h4>' : ''}
  <div  class="search-row">
    <img src="${project.logo}" >
    <div class="search-entity-text">
      <p>
        <span>${project.name}</span>
        <span>${getService('$filter')('industry')(project.industry)}</span>
      </p>
      <p>${project.brief}</p>
    </div>
  </div>
  ${isLast ?
    '<h4  class="search-more kr-button searchProject">搜索更多项目</h4>' :
   ''}
    `;
}

function makeUserHtml(user, isFirst, isLast) {
  return `
  ${isFirst ? '<h4>投资人</h4>' : ''}
  <div class="search-row">
    <img class="investor-avatar" src="${user.logo}" >
    <div class="search-entity-text">
      <p>
        <span>${user.name}</span>
        <span>${user.orgName}</span>
        <span>${user.position}</span>
      </p>
      <p>${user.vitae}</p>
    </div>
  </div>
  ${isLast ?
    '<h4  class="search-more kr-button searchInvestor">搜索更多投资人</h4>' :
   ''}
    `;
}
function makeOrgHtml(org, isFirst, isLast) {
  return `
  ${isFirst ? '<h4>机构</h4>' : ''}
  <div class="search-row">
    <img src="${org.logo}" >
    <div class="search-entity-text">
      <p>
        <span>${org.name}</span>
      </p>
      <p>${org.brief}</p>
    </div>
  </div>
  ${isLast ?
    '<h4  class="search-more searchOrg kr-button">搜索更多投资机构</h4>' :
   ''}
    `;
}
export default class SearchService {
  RESULT_TYPE = RESULT_TYPE;
  searchApi = new API('/suggest', {
    company: {
      isArray: true,
    },
    user: {
      isArray: true,
    },
    org: {
      isArray: true,
    },
  });

  historyApi = new API('/search/history');

  search(kw) {
    return getService('$q').all({
      orgs: this.searchApi.org({
        kw,
      }),
      users: this.searchApi.user({
        kw,
      }),
      companies: this.searchApi.company({
        kw,
      }),
    });
  }

  makeResult(kw) {
    return this.search(kw).then(result => {
      let htmlResult = [];
      let i = 0;
      const MAX_PROJECT_LENGTH = 3;
      const MAX_USER_ORG_LENGTH = 2;
      if (result.companies.length) {
        htmlResult = htmlResult.concat(result.companies.slice(0, MAX_PROJECT_LENGTH).map(project =>
          getContentHtml(project, makeProjectHtml(project,
            ++i === 1,
            (i === MAX_PROJECT_LENGTH) &&
          (result.companies.length > MAX_PROJECT_LENGTH),
          kw
          ))
        ));
      } else {
        htmlResult.push(getContentHtml(kw,
          makeCreateProjectHtml(kw)));
      }

      i = 0;
      if (result.users.length) {
        htmlResult = htmlResult.concat(result.users.slice(0, MAX_USER_ORG_LENGTH).map(user =>
          getContentHtml(user, makeUserHtml(user,
            ++i === 1,
            (i === MAX_USER_ORG_LENGTH) &&
          (result.users.length > MAX_USER_ORG_LENGTH),
          kw
          ))
        ));
      }

      i = 0;
      if (result.orgs.length) {
        htmlResult = htmlResult.concat(result.orgs.slice(0, MAX_USER_ORG_LENGTH).map(org =>
          getContentHtml(org, makeOrgHtml(org,
            ++i === 1,
            (i === MAX_USER_ORG_LENGTH) &&
          (result.orgs.length > MAX_USER_ORG_LENGTH),
          kw
          ))
        ));
      }
      return htmlResult;
    });
  }

  onClickRow($event, item) {
    $event.preventDefault();
    const target = $event.target;
    const kw = getService('$rootScope').root.kw;
    this.historyApi.save(null, {
      kw,
    });
    if (target.classList.contains('searchProject')) {
      getService('$state').go('landing.result', { kw, type: 'company' });
    } else if (target.classList.contains('searchInvestor')) {
      getService('$state').go('landing.result', { kw, type: 'user' });
    } else if (target.classList.contains('searchOrg')) {
      getService('$state').go('landing.result', { kw, type: 'org' });
    } else if (target.classList.contains('createProject')) {
      getService('$state').go('createProject');
    } else {
      getService('$state').go('project', { id: item.obj.id });
    }
  }

  searchRecord(kw) {
    getService('$rootScope').root.searchOut.click = true;
    this.historyApi.save(null, {
      kw,
    });
    getService('$state').go('landing.result', { kw, type: 'company' });
  }

  onSelect(item, value) {
    this.historyApi.save(null, {
      kw: value,
    }).then(() =>
      getService('$state').go('project', {
        id: item.obj.id,
      })
    );
  }

  getSearchAutoCompleteOptions() {
    return {
      suggest: this.makeResult.bind(this),
      auto_select_first: true,
      full_match: () => true,
      on_select: this.onSelect.bind(this),
      on_leaveSelect: angular.noop,
    };
  }
}

