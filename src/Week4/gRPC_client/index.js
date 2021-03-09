import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { GRPC_CLIENT_PORT } from "../../Config/Remote";
import { getStudent } from "./gRPCClient";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/student/:id", getStudent);

app.listen(GRPC_CLIENT_PORT, function() {
  console.log(`gRPC Client listening on port ${GRPC_CLIENT_PORT}`);
});
