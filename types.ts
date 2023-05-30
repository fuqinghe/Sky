import { Messagetype, UserType } from 'alemon'
export interface PointMessageType extends Messagetype {
  user: UserType
}
