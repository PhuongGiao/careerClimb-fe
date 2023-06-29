import { BaseService } from "./baseService";

export class EmployerService extends BaseService {
  getAll = (string) => {
    return this.get(`/employer?q=${string}`);
  };
  getDetail = (id) => {
    return this.get(`/employer/${id}`);
  };
  update = (data) => {
    return this.patch(`/employer`, data);
  };
  create = (data) => {
    return this.post(`/employer`, data);
  };
}

export const employerService = new EmployerService();
