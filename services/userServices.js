import { BaseService } from "./baseService";

export class UserService extends BaseService {
  userWithFb = (data) => {
    return this.post(`/user/fb`, data);
  };
  userWithGG = (data) => {
    return this.post(`/user/gg`, data);
  };
  me = () => {
    return this.get(`/user/me`);
  };
  update = (id, data) => {
    return this.patch(`/user/${id}`, data);
  };
  updateImage = (id, data) => {
    return this.patch(`/user/image/${id}`, data);
  };
  getAll = () => {
    return this.get(`/user`);
  };
  getDetail = (id) => {
    return this.get(`/user/${id}`);
  };
}

export const userService = new UserService();
