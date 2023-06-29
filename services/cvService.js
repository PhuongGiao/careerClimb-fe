import { BaseService } from "./baseService";

export class CvService extends BaseService {
  create = (data) => {
    return this.post(`/cv`, data);
  };
  getMyCVs = () => {
    return this.get(`/cv/myCVs`);
  };
  apply = (data) => {
    return this.post(`/cv/apply`, data);
  };
}
export const cvService = new CvService();
