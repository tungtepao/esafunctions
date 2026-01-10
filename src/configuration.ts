import { Configuration, IMidwayContainer } from '@midwayjs/core';

@Configuration({
  importConfigs: [],
  imports: [
    require('@midwayjs/koa')
  ]
})
export class MainConfiguration {
  async onReady(container: IMidwayContainer) {
    console.log('MidwayJS application is ready');
  }
}
