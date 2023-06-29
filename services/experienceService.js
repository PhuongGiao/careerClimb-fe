import { BaseService } from "./baseService";

export class ExperienceService extends BaseService {
  getAll = () => {
    return this.get(`/experience`);
  };
  getDetail = (id) => {
    return this.get(`/experience/${id}`);
  };
}

export const experienceService = new ExperienceService();
