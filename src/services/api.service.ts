import { Config } from "react-native-config";

export class APIService {
  public static Methods = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE",
    PUT: "PUT"
  };
  // public static Endpoint = CONFIG.apiEndpoint;
  // default headers
  public static headers = {};

  public static request(
    method: string,
    url: string,
    language?: string,
    data?: object
  ) {
    // init headers with defaults
    const headers = Object.create(this.headers);
    // if found, add to header
    if (language) {
      headers["Accept-Language"] = language;
    }
    return fetch(`${Config.API_ENDPOINT_URL}/${url}`, {
      method,
      headers,
      body: data
    });
  }
}
