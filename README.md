## Demonstration of how to handle navigation requests

This requires an adjustment in msw library to work currently:
https://github.com/mswjs/msw/blob/main/src/browser/utils/parseWorkerRequest.ts#L11

```
export function parseWorkerRequest(
  incomingRequest: ServiceWorkerIncomingRequest,
): Request {
  return new Request(incomingRequest.url, {
    ...incomingRequest,
    mode: undefined, // overwrite request mode
    body: pruneGetRequestBody(incomingRequest),
  })
}
```

To start run `npm start`

Setup:
index page has two links, to /foo and to /bar
/foo route is mocked by MSW
/bar route is not mocked

With the change above /bar route still haves as expected, while /foo route is mocked by MSW
