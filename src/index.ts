export default {
  fetch(request: Request) {
    return handleRequest(request)
  }
}

async function handleRequest(request: Request): Promise<Response> {
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