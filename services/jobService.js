import { BaseService } from "./baseService";

export class JobService extends BaseService {
  getAll = (params = "") => {
    return this.get(`/job`, {
      ...params,
    });
  };
  getDetail = (id) => {
    return this.get(`/job/${id}`);
  };
  getJobOption = () => {
    return this.get(`/job/option`);
  };
  create = (data) => {
    return this.post(`/job`, data);
  };
  getJobByEmployer = () => {
    return this.get(`/job/employer`);
  };
  getJobByEmployerPage = (id) => {
    return this.get(`/job/employerPage/${id}`);
  };
  update = (data, id) => {
    return this.patch(`/job/${id}`, data);
  };
  getCvByJob = () => {
    return this.get(`/job/cv-by-job`);
  };
}

export const jobService = new JobService();
