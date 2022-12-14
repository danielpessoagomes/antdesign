import axios, { AxiosResponse } from "axios";
import HandleAxiosResponseError from "./utils/handleAxiosResponseError";
import HandleAxiosResponseSuccess from "./utils/handleAxiosResponseSuccess";

const Http = axios.create();

class Service {
  protected static Http = Http;
  protected static getData = getData;
}

function getData<T>(res: AxiosResponse<T>) {
  return res.data;
}

Http.defaults.baseURL = "http://localhost:8080";
Http.interceptors.response.use(
  HandleAxiosResponseSuccess,
  HandleAxiosResponseError
);

export default Service;
