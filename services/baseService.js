import axios from "axios";

const baseUrl = "http://localhost:3003/api";

export class BaseService {
  put = (url, model) => {
    return axios({
      url: `${baseUrl}${url}`,
      method: "PUT",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  };
  patch = (url, model) => {
    return axios({
      url: `${baseUrl}${url}`,
      method: "PATCH",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  };

  post = (url, model) => {
    return axios({
      url: `${baseUrl}${url}`,
      method: "POST",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  };

  get = (url, params) => {
    return axios({
      url: `${baseUrl}${url}`,
      params: { ...params } || null,
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  };

  delete = (url, model = {}) => {
    return axios({
      url: `${baseUrl}${url}`,
      method: "DELETE",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  };
}
