import { Controller, Get, Post } from 'an-rapid'

@Controller('/template')
export default class Template {
  @Get('')
  select(ctx: any) {
    ctx.body = { data: [1, 2, 3] }
  }

  @Post('')
  create(ctx: any) {
    ctx.body = { data: [1, 2, 3] }
  }
}
