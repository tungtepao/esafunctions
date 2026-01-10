import { UserService } from './user/index.js';
import { AutoRouter } from 'itty-router';

const userService = new UserService();

// 统一的错误响应函数
const errorResponse = (message: string, status: number = 400) => {
  return Response.json({ error: message }, { status });
};

// 创建 itty-router 实例
const router = AutoRouter();

// 使用 itty-router 定义路由
router.get('/user/:userid', async (request: Request) => {
  const userid = request.params?.userid;
  
  // 验证 userid 参数
  if (!userid || typeof userid !== 'string') {
    return errorResponse('User ID is required', 400);
  }
  
  const result = await userService.getUser(userid);
  return Response.json(result);
});

router.post('/user', async (request: Request) => {
  try {
    const body = await request.json();
    
    // 验证请求体
    if (!body || typeof body !== 'object') {
      return errorResponse('Invalid request body', 400);
    }
    
    if (!body.name || typeof body.name !== 'string') {
      return errorResponse('Name field is required and must be a string', 400);
    }
    
    const result = await userService.createUser(body);
    return Response.json(result);
  } catch (error) {
    return errorResponse('Invalid JSON', 400);
  }
});

router.get('/hello', () => {
  return Response.json({ hello: "esa" });
});

router.post('/message', async (request: Request) => {
  try {
    await request.json();
    return Response.json({ code: 200 });
  } catch (error) {
    return errorResponse('Invalid JSON', 400);
  }
});

// 导出 fetch 函数供 serverless 环境使用
export default {
  fetch: router.fetch
};