const API = {
  baseurl: "http://193.46.199.249:5354/api/", //"http://193.46.199.249:5354/api/",
  imageurl: "http://193.46.199.249:5354/", //"http://193.46.199.249:5354",
  productionurl: "http://193.46.199.249/", //"http://193.46.199.249/", // last "/" must be use in production url

  // Ravi added
  login: "login",
  register: "register",
  resendOTP: "resendOTP",
  verifyOTP: "verifyOTP",
  verifyEmail: "verifyEmail",
  verifyAuth: "verifyAuth",
  changePassword: "changePassword",
  getCustomerInfo: "getCustomerInfo",
  getProviderInfo:"getProviderInfo",
  forgetPassword: "forgetPassword",
  resetPassword: "resetPassword",
  updateUserProfile : "updateUserProfile",
  updateProfilePhoto : "updateProfilePhoto",
  // Ravi added closed here

  // Admin routes
  addCategory: "admin/category/insert",
  getAllCategories: "category/all",
  getCategoryInfo: "category/",
  // Admin routes closed here
};

export default API;
