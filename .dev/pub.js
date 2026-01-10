// dist/index.js
async function getFromKV(kv, key) {
  try {
    const edgeKV = new EdgeKV({ namespace: kv });
    let getType = { type: "text" };
    let value = await edgeKV.get(key, getType);
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  } catch (error) {
    console.error(`Error getting key ${key} from KV:`, error);
    throw error;
  }
}
var UserService = class {
  kvNamespace = "web";
  // GET /user/{userid}
  async getUser(userid) {
    try {
      const result = await getFromKV(this.kvNamespace, "totalAccess");
      return {
        userid,
        name: "test",
        totalAccess: result
      };
    } catch (error) {
      console.error("Error in getUser:", error);
      return {
        userid,
        name: "test",
        totalAccess: null
      };
    }
  }
  // POST /user
  async createUser(data) {
    try {
      return {
        code: 200
      };
    } catch (e) {
      console.error("Error in createUser:", e);
      return {
        code: 400
      };
    }
  }
};
var t = ({ base: e = "", routes: t2 = [], ...r2 } = {}) => ({ __proto__: new Proxy({}, { get: (r3, o2, a2, s2) => (r4, ...c2) => t2.push([o2.toUpperCase?.(), RegExp(`^${(s2 = (e + r4).replace(/\/+(\/|$)/g, "$1")).replace(/(\/?\.?):(\w+)\+/g, "($1(?<$2>*))").replace(/(\/?\.?):(\w+)/g, "($1(?<$2>[^$1/]+?))").replace(/\./g, "\\.").replace(/(\/?)\*/g, "($1.*)?")}/*$`), c2, s2]) && a2 }), routes: t2, ...r2, async fetch(e2, ...o2) {
  let a2, s2, c2 = new URL(e2.url), n2 = e2.query = { __proto__: null };
  for (let [e3, t3] of c2.searchParams) n2[e3] = n2[e3] ? [].concat(n2[e3], t3) : t3;
  e: try {
    for (let t3 of r2.before || []) if (null != (a2 = await t3(e2.proxy ?? e2, ...o2))) break e;
    t: for (let [r3, n3, l, i] of t2) if ((r3 == e2.method || "ALL" == r3) && (s2 = c2.pathname.match(n3))) {
      e2.params = s2.groups || {}, e2.route = i;
      for (let t3 of l) if (null != (a2 = await t3(e2.proxy ?? e2, ...o2))) break t;
    }
  } catch (t3) {
    if (!r2.catch) throw t3;
    a2 = await r2.catch(t3, e2.proxy ?? e2, ...o2);
  }
  try {
    for (let t3 of r2.finally || []) a2 = await t3(a2, e2.proxy ?? e2, ...o2) ?? a2;
  } catch (t3) {
    if (!r2.catch) throw t3;
    a2 = await r2.catch(t3, e2.proxy ?? e2, ...o2);
  }
  return a2;
} });
var r = (e = "text/plain; charset=utf-8", t2) => (r2, o2 = {}) => {
  if (void 0 === r2 || r2 instanceof Response) return r2;
  const a2 = new Response(t2?.(r2) ?? r2, o2.url ? void 0 : o2);
  return a2.headers.set("content-type", e), a2;
};
var o = r("application/json; charset=utf-8", JSON.stringify);
var a = (e) => ({ 400: "Bad Request", 401: "Unauthorized", 403: "Forbidden", 404: "Not Found", 500: "Internal Server Error" })[e] || "Unknown Error";
var s = (e = 500, t2) => {
  if (e instanceof Error) {
    const { message: r2, ...o2 } = e;
    e = e.status || 500, t2 = { error: r2 || a(e), ...o2 };
  }
  return t2 = { status: e, ..."object" == typeof t2 ? t2 : { error: t2 || a(e) } }, o(t2, { status: e });
};
var c = (e) => {
  e.proxy = new Proxy(e.proxy ?? e, { get: (t2, r2) => t2[r2]?.bind?.(e) ?? t2[r2] ?? t2?.params?.[r2] });
};
var n = ({ format: e = o, missing: r2 = () => s(404), finally: a2 = [], before: n2 = [], ...l } = {}) => t({ before: [c, ...n2], catch: s, finally: [(e2, ...t2) => e2 ?? r2(...t2), e, ...a2], ...l });
var p = r("text/plain; charset=utf-8", String);
var f = r("text/html");
var u = r("image/jpeg");
var h = r("image/png");
var g = r("image/webp");
var userService = new UserService();
var errorResponse = (message, status = 400) => {
  return Response.json({ error: message }, { status });
};
var router = n();
router.get("/user/:userid", async (request) => {
  const userid = request.params?.userid;
  if (!userid || typeof userid !== "string") {
    return errorResponse("User ID is required", 400);
  }
  const result = await userService.getUser(userid);
  return Response.json(result);
});
router.post("/user", async (request) => {
  try {
    const body = await request.json();
    if (!body || typeof body !== "object") {
      return errorResponse("Invalid request body", 400);
    }
    if (!body.name || typeof body.name !== "string") {
      return errorResponse("Name field is required and must be a string", 400);
    }
    const result = await userService.createUser(body);
    return Response.json(result);
  } catch (error) {
    return errorResponse("Invalid JSON", 400);
  }
});
router.get("/hello", () => {
  return Response.json({ hello: "esa" });
});
router.post("/message", async (request) => {
  try {
    await request.json();
    return Response.json({ code: 200 });
  } catch (error) {
    return errorResponse("Invalid JSON", 400);
  }
});
var index_default = {
  fetch: router.fetch
};
export {
  index_default as default
};
