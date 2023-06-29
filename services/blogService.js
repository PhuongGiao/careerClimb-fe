import { BaseService } from "./baseService";

export class BlogService extends BaseService {
  getAll = () => {
    return this.get(`/blog`);
  };
  getAllByEmployer = () => {
    return this.get(`/blog/getByEmployer`);
  };
  getDetail = (id) => {
    return this.get(`/blog/${id}`);
  };
  create = (data) => {
    return this.post(`/blog/`, data);
  };
}

export const blogService = new BlogService();
