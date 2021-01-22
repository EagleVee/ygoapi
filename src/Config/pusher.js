import "dotenv/config";

export const PUSHER_APP_ID = process.env.PUSHER_APP_ID;
export const PUSHER_APP_SECRET = process.env.PUSHER_APP_SECRET;
export const PUSHER_KEY = process.env.PUSHER_KEY;
export const PUSHER_CLUSTER = process.env.PUSHER_CLUSTER;

console.log("PUSHER APP ID:", PUSHER_APP_ID);
console.log("PUSHER APP SECRET:", PUSHER_APP_SECRET);
console.log("PUSHER KEY:", PUSHER_KEY);
console.log("PUSHER CLUSTER:", PUSHER_CLUSTER);

export default {
  appId: PUSHER_APP_ID,
  key: PUSHER_KEY,
  secret: PUSHER_APP_SECRET,
  cluster: PUSHER_CLUSTER,
  encrypted: true
};
