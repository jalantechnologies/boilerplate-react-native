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

  public static async request(
    method: string,
    urlSuffix: string,
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
    try {
      const response = await axios({
        method,
        url: `${Config.API_ENDPOINT_URL}/${urlSuffix}`,
        data,
        headers,
        cancelToken: axiosSource.token
      });
      if (response.status === 200) {
        return response.data;
      } else {
        return new Error(response.statusText);
      }
    } catch (error) {
      throw error;
    }
  }
}
