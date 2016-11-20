import API from '../base/API.js';
import { getService } from '../base/utls.js';
const RESULT_TYPE = {
  COMPANY: 'COMPANY',
  ORG: 'ORG',
  USER: 'USER',
};

const KEYS = {
  ENTER: 13,
};

function getContentHtml(entity, content) {
  return {
    label: content,
    value: entity.name || entity,
    obj: entity,
  };
}

function makeCreateProjectHtml(name) {
  return `
      <p class="search-no-result"><span class="createProject">无结果，创建 ”${name}“ 创业项目</span>
      </p>
    `;
}
function makeProjectHtml(project, isFirst, isLast) {
  project.type = RESULT_TYPE.COMPANY;
  return `
  ${isFirst ? '<h4>项目</h4>' : ''}
  <div  class="search-row">
    <img src="${project.logo || '/images/default-logo.png'}" >
    <div class="search-entity-text">
      <p>
        <span>${project.name}</span>
        <span>${getService('$filter')('industry')(project.industry)}</span>
      </p>
      <p>${project.brief}</p>
    </div>
  </div>
  ${isLast ?
    '<h4 tabindex="3"  class="search-more kr-button searchProject">搜索更多项目</h4>' :
   ''}
    `;
}

function makeUserHtml(user, isFirst, isLast) {
  user.type = RESULT_TYPE.USER;
  return `
  ${isFirst ? '<h4>投资人</h4>' : ''}
  <div class="search-row">
    <img class="investor-avatar" src="${user.logo || '/images/investor-logo.png'}" >
    <div class="search-entity-text">
      <p>
        <span>${user.name}</span>
        <span>${user.orgName}</span>
        <span>${user.position}</span>
      </p>
      <p data-ellipsis ellipsis-separator="" data-ellipsis-symbol="..."
      ng-bind="result.obj.vitae" class="intro"></p>
    </div>
  </div>
  ${isLast ?
    '<h4  tabindex="3" class="search-more kr-button searchInvestor">搜索更多投资人</h4>' :
   ''}
    `;
}
function makeOrgHtml(org, isFirst, isLast) {
  org.type = RESULT_TYPE.ORG;
  return `
  ${isFirst ? '<h4>机构</h4>' : ''}
  <div class="search-row">
    <img src="${org.logo || '/images/org-logo.png'}" >
    <div class="search-entity-text">
      <p>
        <span>${org.name}</span>
      </p>
      <p data-ellipsis ellipsis-separator="" data-ellipsis-symbol="..."
      ng-bind="result.obj.intro" class="intro"></p>
    </div>
  </div>
  ${isLast ?
    '<h4 tabindex="3" class="search-more searchOrg kr-button">搜索更多投资机构</h4>' :
   ''}
    `;
}
export default class SearchService {
  RESULT_TYPE = RESULT_TYPE;
  searchApi = new API('/search/suggestion');
  historyApi = new API('/search/history');

  search(kw) {
    return this.searchApi.get({
      kw,
    }).then(data => ({
      orgs: data.org,
      users: data.user,
      companies: data.com,
    }));
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
      getService('$state').go('landing.result', { kw, type: 'company' }, { inherit: false });
    } else if (target.classList.contains('searchInvestor')) {
      getService('$state').go('landing.result', { kw, type: 'user' }, { inherit: false });
    } else if (target.classList.contains('searchOrg')) {
      getService('$state').go('landing.result', { kw, type: 'org' }, { inherit: false });
    } else if (target.classList.contains('createProject')) {
      getService('$state').go('createProject');
    } else if (item.obj.type === RESULT_TYPE.COMPANY) {
      getService('$state').go('project', { id: item.obj.id });
    } else if (item.obj.type === RESULT_TYPE.ORG) {
      getService('$state').go('org', { id: item.obj.id });
    } else if (item.obj.type === RESULT_TYPE.USER) {
      getService('$state').go('investorInfo', { id: item.obj.id });
    }
  }

  searchRecord(kw) {
    getService('$rootScope').root.searchOut.click = true;
    this.historyApi.save(null, {
      kw,
    });
    getService('$state').go('landing.result', { kw, type: 'company' }, { inherit: false , reload: true});
  }

  onSelect(item, value, $event) {
    if (!$event) {
      this.historyApi.save(null, {
        kw: value,
      }).then(() => {
        if (item.obj.type === RESULT_TYPE.COMPANY) {
          getService('$state').go('project', { id: item.obj.id });
        } else if (item.obj.type === RESULT_TYPE.ORG) {
          getService('$state').go('org', { id: item.obj.id });
        } else if (item.obj.type === RESULT_TYPE.USER) {
          getService('$state').go('investorInfo', { id: item.obj.id });
        }
      });
    }
  }

  getSearchAutoCompleteOptions() {
    return {
      suggest: this.makeResult.bind(this),
      auto_select_first: false,
      full_match: angular.noop,
      on_select: this.onSelect.bind(this),
      on_leaveSelect: (value, e = {}) => {
        if (e.keyCode === KEYS.ENTER) {
          this.historyApi.save(null, {
            kw: value,
          });
          getService('$state').go('landing.result',
            { kw: value, type: 'company' }, { inherit: false });
        }
      },
    };
  }
}

