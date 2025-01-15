export interface ResponseBody<T> {
  data: T;
  config: any;
  headers: any;
  request: any;
  status: number;
  statusText: string;
}
