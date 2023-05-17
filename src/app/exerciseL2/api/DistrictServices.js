import axios from "axios";
import ConstantList from "../../appConfig";

const API_PATH = ConstantList.API_ENPOINT + "/api";

export const getDistricts = () => {
  return axios.get(API_PATH + "/districts/all");
};

export const addDistrict = (item) => {
  return axios.post(API_PATH + "/districts", item);
};

export const editDistrict = (item) => {
  return axios.put(API_PATH + "/districts/" + item.id, item);
};

export const deleteDistrict = (id) => {
  return axios.delete(API_PATH + "/districts/" + id);
};
