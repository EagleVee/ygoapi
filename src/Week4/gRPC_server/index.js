import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { GRPC_ADDRESS } from "../../Config/Remote";
import { getServer } from "../../Common/GRPCService";
const gRPC = require("@grpc/grpc-js");

const gRPCServer = getServer();

const app = express();
app.use(cors());
app.use(bodyParser.json());

gRPCServer.bindAsync(GRPC_ADDRESS, gRPC.ServerCredentials.createInsecure(), () => {
  console.log(`gRPC Server listening on port ${GRPC_ADDRESS}`);
  gRPCServer.start();
});
