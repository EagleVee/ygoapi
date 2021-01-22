import Pusher from "pusher";
import config from "../Config/pusher";

const client = new Pusher(config);

export default class PusherHelper {
  static trigger(channelName, eventName, params = {}) {
    client.trigger(channelName, eventName, params);
  }
}
