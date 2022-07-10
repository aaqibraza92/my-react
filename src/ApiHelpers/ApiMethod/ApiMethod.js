import * as url from "../Apiurl/ApiUrl"
import { post, del, get, put } from "../ApiMethod/api_helpers";

export const getLoggedInUserToken = () => {
    const user = localStorage.getItem("authUser")
    var userInfo = JSON.parse(user)
    if (userInfo) return userInfo.token
    return null
  }

  export const userLogin = data => post(url.LOGIN, data)
