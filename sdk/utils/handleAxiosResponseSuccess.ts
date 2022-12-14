import { AxiosResponse } from "axios";

export default function HandleAxiosResponseSuccess<T>(
  response: AxiosResponse<T>
) {
  return response;
}
