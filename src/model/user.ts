import { prop, getModelForClass, pre } from '@typegoose/typegoose'
import { Meta } from './meta'
import md5 from 'md5'

@pre<User>('save', function () {
  this.meta = this.meta || ({} as Meta)
  if (this.isNew) {
    this.meta.createdTime = this.meta.updatedTime = Date.now()
  } else {
    this.meta.updatedTime = Date.now()
  }
})
export class User {
  public _id?: string

  /**
   * 用户名
   */
  @prop({ required: [true, '用户名不能为空'], trim: true })
  public username!: string

  /**
   * 密码
   */
  @prop({ required: [true, '密码不能为空'], select: false, trim: true, get: v => v, set: v => md5(v) })
  public password!: string

  /**
   * 邮箱
   */
  @prop({ required: [true, '邮箱不能为空'], match: [/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, '邮箱不正确'] })
  public email!: string

  /**
   * 状态：0 - 禁用; 1 - 启用
   */
  @prop({ required: true, default: 0, enum: [0, 1] })
  public status!: 0 | 1

  /**
   * 角色：0 - 用户; 1 - 管理员
   */
  @prop({ required: true, default: 0, enum: [0, 1] })
  public role!: 0 | 1

  /**
   * 头像
   */
  @prop({ default: 'http://q2.qlogo.cn/headimg_dl?dst_uin=11241066&spec=100' })
  public avatar!: string

  @prop({ _id: false })
  public meta!: Meta
}

export const UserModel = getModelForClass(User)
