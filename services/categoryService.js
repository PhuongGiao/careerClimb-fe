import { BaseService } from "./baseService";

export class CategoryService extends BaseService {
  getAll = (string) => {
    return this.get(`/category?q=${string}`);
  };
  getDetail = (id) => {
    return this.get(`/category/${id}`);
  };
}
export const categoryService = new CategoryService();
