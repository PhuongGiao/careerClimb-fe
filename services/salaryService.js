import { BaseService } from "./baseService";

export class SalaryService extends BaseService {
  getAll = () => {
    return this.get(`/salary`);
  };
  getDetail = (id) => {
    return this.get(`/salary/${id}`);
  };
}

export const salaryService = new SalaryService();
