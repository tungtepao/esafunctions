// src/index.js
async function handleRequest(request) {
  try {
    const edgeKV = new EdgeKV({ namespace: "web" });
    let getType = { type: "text" };
    let value = await edgeKV.get("totalAccess", getType);
    if (value === void 0) {
      return "EdgeKV get: key not found";
    } else {
      return new Response(value);
    }
  } catch (e) {
    return "EdgeKV get error" + e;
  }
}
var src_default = {
  async fetch(request) {
    return handleRequest(request);
  }
};
export {
  src_default as default
};
