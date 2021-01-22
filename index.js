import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { APPLICATION_PORT } from "./src/Config/remote";

import PusherHelper from "./src/Common/PusherHelper";
import Response from "./src/Common/Response";

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get("/", function(req, res) {
  const response = new Response(res);
  response.jsonSuccess({
    message: "Hello world",
    data: {
      test: "Test Message"
    }
  });
});

app.post("/message/send/:uuid", function(req, res) {
  const { params } = req;
  const { uuid } = params;
  PusherHelper.trigger(uuid, "send", params);
  res.sendStatus(200);
});

app.post("/message/seen/:uuid", function(req, res) {
  const { params } = req;
  const { uuid } = params;
  console.log('SEEN', params);
  PusherHelper.trigger(uuid, "seen", params);
  res.sendStatus(200);
});

app.post("/timeline/:name", function(req, res) {
  const { params } = req;
  PusherHelper.trigger("general", "join", params.name);
  res.sendStatus(200);
});

app.post("/timeline/:uuid/comment/:postUUID", function(req, res) {
  const { params } = req;
  const { uuid, postUUID } = params;
  PusherHelper.trigger(uuid, "comment", params);
  PusherHelper.trigger(postUUID, "comment", params);
  res.sendStatus(200);
});

app.post("/timeline/:uuid/like/:post", function(req, res) {
  const { params } = req;
  const { uuid, post } = params;
  console.log('LIKE', params);
  PusherHelper.trigger(uuid, "like", params);
  PusherHelper.trigger(post, "like", params);
  res.sendStatus(200);
});

app.post("/timeline/:uuid/post", function (req, res) {
  const { params } = req;
  const { uuid } = params;
  PusherHelper.trigger(uuid, "post", params);
  res.sendStatus(200);
});

app.post("/notification", function (req, res) {
  const { params, body } = req;
  PusherHelper.trigger('general', "notify", body);
  res.sendStatus(200);
});

app.listen(APPLICATION_PORT, function() {
  console.log(`App listening on port ${APPLICATION_PORT}`);
});
