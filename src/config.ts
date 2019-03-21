// typing implementation of CONFIG to make it work with AOT
declare const CONFIG: {
  env: string;
  apiEndpoint: string;
  serverLogUrl: string;
  gaTrackingId: string;
};

export default CONFIG;
