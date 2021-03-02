import { STATUS_INTERNAL_SERVER_ERROR, STATUS_OK } from "../Config/Remote";

export default class Response {
  constructor(response) {
    this.response = response;
  }

  jsonSuccess = data => {
    const responseObject = {
      status: true,
      data: data,
    };
    return this.response.status(STATUS_OK).send(responseObject);
  };

  jsonError = (data, statusCode = STATUS_INTERNAL_SERVER_ERROR) => {
    const responseObject = {
      status: false,
      data: data,
    };
    return this.response.status(statusCode).send(responseObject);
  };
}
