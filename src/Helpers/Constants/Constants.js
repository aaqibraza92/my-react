const API = {
    baseurl: "http://3.139.66.229:8000/api/",
    imageurl: "http://3.139.66.229:8000/",
    productionurl : "http://localhost:8000/", //"http://193.46.199.249/",
    // Ravi added
    // Admin Routes //
    add_category : "admin/category",
    get_categories : "/category",
    del_category : "admin/category/",
    get_categoryinfo : "category/",
    put_category : "admin/category/",

    add_question : "admin/question",
    get_question : "question",
    del_question : "admin/question/",

    add_subcategory : "admin/subcategory",
    get_subcategory : "/subcategory",
    del_subcategory : "admin/subcategory/",

    get_contactinfo : "admin/getAdminSettings",
    update_adminsettings : "admin/updateAdminSettings",

    // Admin Routes Closed //

    // Frontend routes
    login : "login",
    customersignup : "registration",
    getSubCategoryByCategory : "getSubCategoryByCategory",
    questionBySubcat : "questionBySubcat",
    addTask : "task",
    getOpenTaskList : "tasks?page=1",
    getUserInfo : "authUserInfo",
    updateUserAccount : "updateProfile",
    updateUserBilling : "updateBillingDetail",
    changePasswordAuth : "changeAuthPassword",
    getFavouriteProviders : "getFavoriteProvider",
    getNotifications : "getNotifications",
    submitQuery : "querise",
    changePasswordByToken : "changePasswordByToken",
    getBusinessList : "business",
    getBusinessInfo : "business/",
    getBusinessReviews : "getBusinessReviews/", //?pagesize=1&page=1",
    getBusinessRating : "getBusinessRatings/",
    changeUserRole : "changeAuthType",


      //aaqib side
      phoneOtpValidation: "/phoneOtpValidation",
      forgotPasswordByEmail: "forgotPasswordByEmail",
      changePassword: "/changePassword",
      addBusiness: "/business",
      subCatByParentCat: "/getSubCategoryByCategory",
      businessCategoryUpdate: "businessCategory/",
      businessUploadDemo: "businessUploadDemos/",
      businessUpdateLocation: "businessUpdateLocation/",
      writeAReview: "writeAReview/",
      referralBonusEmail: "referralBonusEmail",
      taskQuotation: "taskQuotation",
      businessList: "business",
      //aaqib

  };
  
  export default API;
  