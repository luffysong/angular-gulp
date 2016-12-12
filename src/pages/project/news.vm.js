import krData from 'krData';
export default class NewsVM extends krData.FormVM {
  projectService = krData.utls.getService('projectService');
  constructor(data, $scope, id) {
    super(data);
    this.$scope = $scope;
    this.id = id;
    angular.extend(this, data);
    this.list = data;
    this.init(data);
    // console.log('news', this.id);
    this.type = krData.META.COMPANY_NEWS.MEMBER_CHANGE;
  }

  props = ['url', 'type', 'title', 'publishDate'];
  num = 1;
  getList(limitlist, list, n) {
    if (list.length > (5 * n)) {
      limitlist = list.slice(0, (5 * n));
    } else {
      limitlist = list;
    }
    return limitlist;
  }
  more() {
    // ++this.num;
    // this.newsList = this.getList(this.newsList, this.list, this.num);
    this.newsList = this.list;
    this.showMore = !this.showMore;
    if(this.showMore){
        this.newsList = this.initList;
    }
  }

  init(data) {
    this.newsList = this.getList(this.newsList, this.list, 1);
    this.initList = this.getList(this.newsList, this.list, 1);
    this.showMore = true;
    // this.noTitle = true;
    this.mapProps(this.props, data, this);
  }

  // 获取新闻标题
  getNewsTitle() {
    if (this.url) {
      this.projectService.getNewsTitle(this.url).then((data) => {
        this.title = data.title;
        // if (this.title) {
        //   this.noTitle = false;
        // }
      });
    }
  }

  update() {
    // console.log('newsId', this);
    // console.log(this);
    this.publishDate = `${this.publishDateYear}-${this.publishDateMonth}-01`;
    if (!this.validate()) return;
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
