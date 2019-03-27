import axios from "axios";
import { Config } from "react-native-config";
export class APIService {
  public static Methods = {
    GET: "get",
    POST: "post",
    PATCH: "patch",
    DELETE: "delete",
    PUT: "put"
  };
  public static headers = {};

  public static request(
    method: string,
    url: string,
    axiosSource: any,
    language?: string,
    data?: object
  ) {
    // init headers with defaults
    const headers = Object.create(this.headers);
    // if found, add to header
    if (language) {
      headers["Accept-Language"] = language;
    }
    return axios({
      method,
      url: `${Config.API_ENDPOINT_URL}/${url}`,
      data,
      headers,
      cancelToken: axiosSource.token
    })
      .then(response => response)
      .catch(error => error);
  }
}
