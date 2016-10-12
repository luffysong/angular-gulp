import API from './API';
let userAPI = null;

function createUserAPI() {
  return new API('/user/:id');
}
function getUserAPI() {
  return (userAPI || (userAPI = createUserAPI()));
}
export default class User {
  static getUserInfo() {
    return getUserAPI().get();
  }
}
