import { BaseService } from "./baseService";

export class CategoryService extends BaseService {
  getAll = (string) => {
    return this.get(`/category?q=${string}`);
  };
  getDetail = (id) => {
    return this.get(`/category/${id}`);
  };
  create = (data) => {
    return this.post(`/category/`, data);
  };
}
export const categoryService = new CategoryService();
