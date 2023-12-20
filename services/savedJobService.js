import { BaseService } from "./baseService";

export class SavedJobService extends BaseService {
  getAll = () => {
    return this.get(`/saved-job`);
  };
  create = (data) => {
    return this.post(`/saved-job/`, data);
  };
  updateUnsaved = (id) => {
    return this.delete(`/saved-job/${id}`);
  };
}

export const savedJobService = new SavedJobService();
