import axios from "axios";
import ConstantList from "../../appConfig";

const API_PATH = ConstantList.API_ENPOINT + "/api";

export const getWards = () => {
  return axios.get(API_PATH + "/wards/all");
};

export const addWard = (item) => {
  return axios.post(API_PATH + "/wards", item);
};

export const editWard = (item) => {
  return axios.put(API_PATH + "/wards/" + item.id, item);
};

export const deleteWard = (id) => {
  return axios.delete(API_PATH + "/wards/" + id);
};
