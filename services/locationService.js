import { BaseService } from "./baseService";

export class LocationService extends BaseService {
  getAll = () => {
    return this.get(`/location`);
  };
  getDetail = (id) => {
    return this.get(`/location/${id}`);
  };
}

export const locationService = new LocationService();
