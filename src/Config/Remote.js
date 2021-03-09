import "dotenv/config";

export const APPLICATION_PORT = process.env.APPLICATION_PORT || 5000;
export const GRPC_ADDRESS = process.env.GRPC_ADDRESS || "localhost:5001";
export const GRPC_CLIENT_PORT = process.env.GRPC_CLIENT_PORT || 5002;

export const STATUS_OK = 200;
export const STATUS_BAD_REQUEST = 400;
export const STATUS_UNAUTHORIZED = 410;
export const STATUS_NOT_FOUND = 404;
export const STATUS_INTERNAL_SERVER_ERROR = 500;
export const STATUS_BAD_GATEWAY = 502;
export const STATUS_GATE_WAY_TIMEOUT = 504;
