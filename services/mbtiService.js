import { BaseService } from "./baseService";

export class MbtiService extends BaseService {
  create = (data) => {
    return this.post(`/mbti`, data);
  };
  getResult = (id) => {
    return this.get(`/mbti/${id}`);
  };
}
export const mbtiService = new MbtiService();
