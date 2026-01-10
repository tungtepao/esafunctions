import { UserService } from './user/index.js';
import { AutoRouter } from 'itty-router';

const userService = new UserService();

// 创建 itty-router 实例
const router = AutoRouter();

// 使用 itty-router 定义路由
router.get('/user/:userid', async (request: Request) => {
  const userid = request.params?.userid;
  const result = await userService.getUser(userid);
  return Response.json(result);
});

router.post('/user', async (request: Request) => {
  try {
    const body = await request.json();
    const result = await userService.createUser(body);
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }
});

router.get('/hello', () => {
  return Response.json({ hello: "esa" });
});

router.post('/message', async (request: Request) => {
  await request.json();
  return Response.json({ code: 200 });
});

// 导出 fetch 函数供 serverless 环境使用
export default {
  fetch: router.fetch
};