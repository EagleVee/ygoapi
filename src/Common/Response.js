export default class Response {
  constructor(response) {
    this.response = response;
  }

  jsonSuccess = data => {
    const responseObject = {
      status: true,
      data: data
    };
    return this.response.status(200).send(responseObject);
  };

  jsonError = (data, statusCode) => {
    const responseObject = {
      status: false,
      data: data
    };
    return this.response.status(statusCode).send(responseObject);
  };
}
