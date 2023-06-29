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
}

export const userService = new UserService();
