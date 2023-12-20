import { BaseService } from "./baseService";

export class ApplicationService extends BaseService {
  update = (id, data) => {
    return this.patch(`/application/${id}`, data);
  };
  create = (data) => {
    return this.post(`/application/`, data);
  };
  updateIntructor = (id, data) => {
    return this.patch(`/application/intructor/${id}`, data);
  };
  refuse = (id, data) => {
    return this.patch(`/application/refuse/${id}`, data);
  };
  sendMailConfirm = (id) => {
    return this.get(`/application/${id}`);
  };
  getMyCVs = () => {
    return this.get(`/application/getMyCvs`);
  };
}

export const applicationService = new ApplicationService();
