import { BaseService } from "./baseService";

export class LevelService extends BaseService {
  getAll = () => {
    return this.get(`/level`);
  };
  getDetail = (id) => {
    return this.get(`/level/${id}`);
  };
}

export const levelService = new LevelService();
