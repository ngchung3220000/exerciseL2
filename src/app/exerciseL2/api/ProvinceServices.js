import axios from "axios";
import ConstantList from "../../appConfig";

const API_PATH = ConstantList.API_ENPOINT + "/api";

export const getProvinces = () => {
  return axios.get(API_PATH + "/provinces/all");
};

export const addProvince = (item) => {
  return axios.post(API_PATH + "/provinces", item);
};

export const editProvince = (item) => {
  return axios.put(API_PATH + "/provinces/" + item.id, item);
};

export const deleteProvince = (id) => {
  return axios.delete(API_PATH + "/provinces/" + id);
};
