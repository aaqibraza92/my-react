import API from "../Constants/Constants";
const { default: axios } = require("axios");
const { notify } = require("react-notify-toast");

const error_notification = {
  background: "#E1133A",
  text: "#FFF",
};
const success_notification = {
  background: "#40C390",
  text: "#FFF",
};

export const Notify = (message, isError) => {
  isError
    ? notify.show(message, "custom", 3000, error_notification)
    : notify.show(message, "custom", 3000, success_notification);
};

const HTTP = {
  delete: async (url, notification) => {
    let response = "";
    const finalurl = API.baseurl + url;
    let config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    await axios.delete(finalurl, config).then((result) => {
      if (result.data) {
        if (result.data.status.toString() === "200") {
          notification &&
            notify.show(result.data.msg, "custom", 3000, success_notification);
          response = result.data;
          return response;
        } else {
          response = result.data;
        }
      } else {
        response = result.data;
      }
    });
    return response;
  },
  get: async (url, notification, token = "") => {
    let response = "";
    const finalurl = API.baseurl + url;
    let config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + token,
      },
      proxy: {
        host: "3.139.66.229",
        port: 8000,
      },
    };
    await axios.get(finalurl, config).then((result) => {
      if (result.data) {
        if (result.data.status.toString() === "200") {
          notification &&
            notify.show(result.data.msg, "custom", 3000, success_notification);
          response = result.data;
          return response;
        } else {
          response = result.data;
        }
      } else {
        response = result.data;
      }
    });
    return response;
  },
  put: async (url, data, checkauth, notification, token = "") => {
    let response = "";
    const finalurl = API.baseurl + url;
    let config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if (!checkauth) {
      config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
    }
    await axios.put(finalurl, data, config).then((result) => {
      if (result.data) {
        if (result.data.status.toString() === "200") {
          notification &&
            notify.show(result.data.msg, "custom", 3000, success_notification);
          response = result.data;
          return response;
        } else {
          response = result.data;
        }
      } else {
        response = result.data;
      }
    });
    return response;
  },

  post: async (url, data, checkauth, token = "", notifcation = true) => {
    let response = "";
    const finalurl = API.baseurl + url;
    let config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if (!checkauth) {
      config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
    }
    await axios.post(finalurl, data, config).then((result) => {
      if (result && result.status) {
        if (result.status.toString() === "200") {
          response = result.data;
          notifcation && Notify(result.data.message, false);
        } else if (result.status.toString() === "201") {
          Notify(result.data.message, true);
          response = result.data;
        } else {
          Notify(result.data.message, true);
          response = result.data;
        }
      }
    });
    return response;
  },
  putimage: async (url, data, checkauth, notification, token = "") => {
    let response = "";
    const finalurl = API.baseurl + url;
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    if (!checkauth) {
      config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
    }
    await axios.put(finalurl, data, config).then((result) => {
      if (result.data) {
        if (result.data.status.toString() === "200") {
          notification &&
            notify.show(result.data.msg, "custom", 3000, success_notification);
          response = result.data;
          return response;
        } else {
          response = result.data;
        }
      } else {
        response = result.data;
      }
    });
    return response;
  },
  postimage: async (url, data, checkauth, token = "", notification = true) => {
    let response = "";
    const finalurl = API.baseurl + url;
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    if (!checkauth) {
      config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
    }
    await axios.post(finalurl, data, config).then((result) => {
      if (result && result.status) {
        if (result.status.toString() === "200") {
          response = result.data;
          notification && Notify(result.data.message, false);
        } else if (result.status.toString() === "201") {
          Notify(result.data.message, true);
          response = result.data;
        } else {
          Notify(result.data.message, true);
          response = result.data;
        }
      }
    });
    return response;
  },
};

export default HTTP;
