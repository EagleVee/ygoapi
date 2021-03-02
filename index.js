import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { APPLICATION_PORT } from "./src/Config/Remote";
import Response from "./src/Common/Response";
import { students } from "./src/Config/Students";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", function(req, res) {
  const response = new Response(res);
  response.jsonSuccess({
    message: "Hello world",
  });
});

app.get("/students", function(req, res) {
  const response = new Response(res);
  response.jsonSuccess(students);
});

app.listen(APPLICATION_PORT, function() {
  console.log(`App listening on port ${APPLICATION_PORT}`);
});
