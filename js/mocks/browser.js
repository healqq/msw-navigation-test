import { setupWorker } from "msw/browser";
import { handlers } from "./handlers.js";

const worker = setupWorker(...handlers);

worker.events.on("request:start", ({ request, requestId }) => {
  console.log("Outgoing request:", request.method, request.url);
});

export { worker };
