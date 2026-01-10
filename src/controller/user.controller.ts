import { Provide, Controller, Get, Post } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

@Provide()
@Controller('/user')
export class UserController {

  @Get('/:userid')
  async getUser(ctx: Context) {
    const userid = ctx.params.userid;
    return {
      userid: userid,
      name: 'test'
    };
  }

  @Post('/')
  async createUser(ctx: Context) {
    const body = ctx.request.body as { name: string };
    const { name } = body;
    return {
      code: 200
    };
  }
}
