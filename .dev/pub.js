// dist/index.js
var dist_default = {
  fetch(request) {
    return handleRequest(request);
  }
};
async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  const method = request.method;
  if (method === "GET" && path === "/hello") {
    return Response.json({ hello: "esa" });
  }
  if (method === "POST" && path === "/message") {
    await request.json();
    return Response.json({ code: 200 });
  }
  return new Response("Not Found", { status: 404 });
}
export {
  dist_default as default
};
