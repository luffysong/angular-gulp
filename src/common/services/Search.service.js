import API from '../base/API.js';
import { getService } from '../base/utls.js';
export const RESULT_TYPE = {
  COMPANY: 'COMPANY',
  ORG: 'ORG',
  USER: 'USER',
};

const KEYS = {
  ENTER: 13,
};

function getContentHtml(entity, content) {
  return {
    label: getService('$sce').trustAsHtml(content),
    value: entity.name || entity,
    obj: entity,
  };
}

function makeCreateProjectHtml(name) {
  return {
    obj: { type: 'newCom' },
    type: 'action',
    label: getService('$sce').trustAsHtml(`
      <p class="search-row search-no-result"
      data-stat-click="search.project.create"><span class="createProject">
        无结果，创建 ”${name}“ 创业项目</span>
      </p> `),
  };
}
function makeProjectHtml() {
  return `
  <div  class="search-row">
    <img src="{{::result.obj.logo || '/images/default-logo.png'}}" >
    <div class="search-entity-text">
      <p>
        <span>{{result.obj.name}}</span>
        <span>{{result.obj.industry | industry}}</span>
      </p>
      <p>{{::result.obj.brief}}</p>
    </div>
  </div>
    `;
}

function makeUserHtml() {
  return `
  <div class="search-row">
    <img class="investor-avatar" ng-src="{{::result.obj.logo || '/images/investor-logo.png'}}" >
    <div class="search-entity-text">
      <p>
        <span ng-bind="::result.obj.name"></span>
        <span ng-bind="::result.obj.orgName" ng-if="result.obj.orgName"></span>
        <span ng-bind="::result.obj.position" ng-if="result.obj.position"></span>
      </p>
      <p data-ellipsis ellipsis-separator="" data-ellipsis-symbol="..."
      ng-bind="::result.obj.vitae" class="intro"></p>
    </div>
  </div>

    `;
}
function makeOrgHtml() {
  return `
  <div class="search-row">
    <img ng-src="{{::result.obj.logo || '/images/org-logo.png'}}" >
    <div class="search-entity-text">
      <p>
        <span ng-bind="::result.obj.name"></span>
      </p>
      <p data-ellipsis ellipsis-separator="" data-ellipsis-symbol="..."
      ng-bind="::result.obj.intro" class="intro"></p>
    </div>
  </div>
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

  _getTitle(title) {
    return {
      value: '',
      type: 'title',
      obj: null,
      label: `<div class="search-row title">${title}</div>`,
    };
  }
  _getAction(action, type) {
    return {
      value: '',
      type: 'action',
      obj: { type },
      label: `<div class="search-row search-more action">${action}</div>`,
    };
  }
  makeResult(kw) {
    return this.search(kw).then(result => {
      let htmlResult = [];
      const MAX_PROJECT_LENGTH = 3;
      const MAX_USER_ORG_LENGTH = 2;
      if (result.companies.length) {
        htmlResult.unshift(this._getTitle('项目'));
        htmlResult = htmlResult.concat(
          result.companies.slice(0, MAX_PROJECT_LENGTH).map(project => {
            project.type = RESULT_TYPE.COMPANY;
            return getContentHtml(project, makeProjectHtml(project));
          }));
        if (result.companies.length > MAX_PROJECT_LENGTH) {
          htmlResult.push(this._getAction('搜索更多项目', RESULT_TYPE.COMPANY));
        }
      } else {
        htmlResult.push(makeCreateProjectHtml(kw));
      }

      if (result.users.length) {
        htmlResult.push(this._getTitle('投资人'));
        htmlResult = htmlResult.concat(
          result.users.slice(0, MAX_USER_ORG_LENGTH).map(user => {
            user.type = RESULT_TYPE.USER;
            return getContentHtml(user, makeUserHtml(user));
          }));
        if (result.companies.length > MAX_USER_ORG_LENGTH) {
          htmlResult.push(this._getAction('搜索更多投资人', RESULT_TYPE.USER));
        }
      }

      if (result.orgs.length) {
        htmlResult.push(this._getTitle('投资机构'));
        htmlResult = htmlResult.concat(
          result.orgs.slice(0, MAX_USER_ORG_LENGTH).map(org => {
            org.type = RESULT_TYPE.ORG;
            return getContentHtml(org, makeOrgHtml(org));
          }));
        if (result.companies.length > MAX_USER_ORG_LENGTH) {
          htmlResult.push(this._getAction('搜索更多投资机构', RESULT_TYPE.ORG));
        }
      }
      return htmlResult;
    });
  }


  historySuggest() {
    return this.historyApi.query()
      .then(list => (list.length ? ['搜索历史'].concat(list) : []))
      .then(list => list.map((str, i) => ({
        value: str,
        obj: str,
        type: i === 0 ? 'title' : 'row',
        label:
        `<div ng-class="::{'his-title': $index === 1}"
        class="search-row history-text">${str}</div>`,
      })));
  }

  onSelect(item, value) {
    this.historyApi.save(null, {
      kw: value,
    });
    if (item.obj.type === RESULT_TYPE.COMPANY) {
      getService('$state').go('project', { id: item.obj.id });
    } else if (item.obj.type === RESULT_TYPE.ORG) {
      getService('$state').go('org', { id: item.obj.id });
    } else if (item.obj.type === RESULT_TYPE.USER) {
      getService('$state').go('investorInfo', { id: item.obj.id });
    } else if (angular.isString(item.obj)) {
      getService('$state').go('landing.result',
        { kw: item.value, type: 'company' }, { inherit: false });
    }
  }

  _isAction(item) {
    return item.type === 'action';
  }

  action(item, kw) {
    this.historyApi.save(null, {
      kw,
    });
    if (this._isAction(item) && item.obj.type !== 'newCom') {
      getService('$state').go('landing.result', { kw, type: item.obj.type.toLowerCase() },
        { inherit: false });
    } else if (this._isAction(item) && item.obj.type === 'newCom') {
      getService('$state').go('createProject');
    } else if (item.obj.type === RESULT_TYPE.COMPANY) {
      getService('$state').go('project', { id: item.obj.id });
    } else if (item.obj.type === RESULT_TYPE.ORG) {
      getService('$state').go('org', { id: item.obj.id });
    } else if (item.obj.type === RESULT_TYPE.USER) {
      getService('$state').go('investorInfo', { id: item.obj.id });
    }
  }
  getSearchAutoCompleteOptions() {
    return {
      suggest: this.makeResult.bind(this),
      auto_select_first: false,
      history_suggest: this.historySuggest.bind(this),
      action: this.action.bind(this),
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

