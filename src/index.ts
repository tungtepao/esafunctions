import { Application } from '@midwayjs/koa';

let app: Application;

// 保持原有入口格式以兼容 serverless 平台
export default {
  async fetch(request: Request) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    if (!app) {
      const { Bootstrap } = require('@midwayjs/core');
      app = await Bootstrap.run();
    }

    // 创建上下文
    const ctx = await app.createAnonymousContext({
      path,
      method,
      headers: request.headers,
      body: method === 'POST' ? await request.json() : {},
      query: Object.fromEntries(url.searchParams.entries()),
    });

    // 处理请求
    await app.callback()(ctx.req, ctx.res);

    return new Response(JSON.stringify(ctx.body), {
      status: ctx.status,
      headers: ctx.response.headers as HeadersInit
    });
  }
};
