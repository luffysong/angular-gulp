import krData from 'krData';


export default class InvestorEditVM {
  constructor(data) {
    this.copyData = angular.copy(data);
  }


  uploadAvatar($files) {
    if ($files.length) {
      krData.utls.uploadImage($files[0])
        .then((data) => {
          this.baseData.avatar = data.src;
        })
        .catch((err) => {
          krData.Alert.alert(err.msg);
        });
    }
  }
  enterBase() {
    this.editBase = true;
    krData.utls.mapProps(['avatar', 'position', 'orgName']);
  }

  cancelBase() {
    this.editBase = false;
  }
}

