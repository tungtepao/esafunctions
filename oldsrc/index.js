// 定义一个异步函数 handleRequest
async function handleRequest(request) {
  try {
  // 初始化 Edge KV 连接
    const edgeKV = new EdgeKV({ namespace: "web" });// 命名空间是 kv
    let getType = { type: "text" };
    let value = await edgeKV.get("totalAccess", getType);
    // 检查键是否存在
    if (value === undefined) {
      return "EdgeKV get: key not found";// 错误：直接返回字符串，而非 Response
    } else {
      return new Response(value);// 正确：返回 Response 对象
    }
  } catch (e) {
    return "EdgeKV get error" + e;// 错误：直接返回字符串，而非 Response
  }
}
// 导出默认的 fetch 处理函数
export default {
  async fetch(request) {
    return handleRequest(request);// 返回 handleRequest 的结果
  }
};