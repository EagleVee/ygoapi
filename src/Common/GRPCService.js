const gRPC = require("@grpc/grpc-js");
const ProtoLoader = require("@grpc/proto-loader");
import { students } from "../Config/Students";

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

function getStudent(call, callback) {
  const studentId = call.request.id;
  console.log("STUDENT ID", studentId);
  const student = students.find(e => e.id === studentId);
  if (student) {
    return callback(null, student);
  } else {
    return "Student does not exist";
  }
}

export function getServer() {
  const server = new gRPC.Server();
  server.addService(studentPackageDefinition.Student.service, {
    getStudent: getStudent,
  });

  return server;
}
