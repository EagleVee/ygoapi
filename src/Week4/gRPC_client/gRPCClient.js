import { GRPC_ADDRESS } from "../../Config/Remote";
import Response from "../../Common/Response";

const gRPC = require("@grpc/grpc-js");
const ProtoLoader = require("@grpc/proto-loader");

const PROTO_PATH = "Student.proto";
const packageDefinition = ProtoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const studentPackageDefinition = gRPC.loadPackageDefinition(packageDefinition)
  .student;
const client = new studentPackageDefinition.Student(
  GRPC_ADDRESS,
  gRPC.credentials.createInsecure(),
);

export function getStudent(req, res) {
  console.log("REQUEST", req.params.id);
  client.getStudent({ id: req.params.id }, (err, result) => {
    new Response(res).jsonSuccess(result);
  });
}
