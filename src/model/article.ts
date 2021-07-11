import { prop, getModelForClass, pre, Ref } from '@typegoose/typegoose'
import { Meta } from './meta'
import { User } from './user'

@pre<Article>('save', function () {
  this.meta = this.meta || ({} as Meta)
  if (this.isNew) {
    this.meta.createdTime = this.meta.updatedTime = Date.now()
  } else {
    this.meta.updatedTime = Date.now()
  }
})
export class Article {
  public _id?: string

  /**
   * 标题
   */
  @prop({ required: [true, '标题不能为空'], trim: true })
  public title!: string

  /**
   * 作者
   */
  @prop({ required: [true, '作者不能为空'], ref: () => User })
  public author!: Ref<User>

  /**
   * 内容
   */
  @prop({ required: [true, '内容不能为空'] })
  public content!: string

  /**
   * 渲染内容
   */
  @prop({ required: [true, '渲染内容不能为空'] })
  public render!: string

  /**
   * 封面
   */
  @prop({ default: '' })
  public cover?: string

  @prop({ _id: false })
  public meta!: Meta
}

export const ArticleModel = getModelForClass(Article)
