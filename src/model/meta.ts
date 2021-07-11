import { prop } from '@typegoose/typegoose'

export class Meta {
  @prop({ default: Date.now() })
  public createdTime!: number

  @prop({ default: Date.now() })
  public updatedTime!: number
}
