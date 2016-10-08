import krData from 'krData';
export default class NewsVM extends krData.FormVM {
  projectService = krData.utls.getService('projectService');
  constructor(data, $scope, id) {
    super(data);
    this.$scope = $scope;
    this.id = id;
    angular.extend(this, data);
    this.list = data;
    this.months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    this.init(data);
    // console.log('news', this.id);
  }

  props = ['url', 'type', 'title', 'publishDate'];

  init(data) {
    // console.log(data);
    let num = 1;
    function getList(limitlist, list, n) {
      if (list.length > (5 * n)) {
        limitlist = list.slice(0, (5 * n));
      } else {
        limitlist = list;
      }
      return limitlist;
    }
    function more() {
      ++num;
      this.newsList = getList(this.newsList, this.list, num);
    }
    function showMore() {
      return !(this.newsList.length === this.list.length);
    }
    this.newsList = getList(this.newsList, this.list, 1);
    this.more = more;
    this.showMore = showMore;


    this.mapProps(this.props, data, this);
  }
  update(form, $event) {
    // console.log('newsId', this);
    // console.log(this);
    this.publishDate = `${this.publishDateYear}-${this.publishDateMonth}-01`;
    if (!this.validate(form, $event)) return;
    this.projectService.addnews({
      id: this.id,
    }, this.mapProps(this.props, this))
    .then(function () {
      krData.Alert.success('数据保存成功');
    });
    // angular.extend(this.originalData, this);
    // this.projectService.update({
    //     id: this.id,
    //   }, this.getCopy(['name', 'fullName']))
    //   .then((data) => {
    //     this.refresh(data);
    //     this.ok();
    //   });
  }
}
