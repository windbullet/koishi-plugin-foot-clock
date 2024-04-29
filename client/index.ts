import { Context } from '@koishijs/client'
import Clock from './clock.vue'

export default function (ctx: Context) {
  ctx.slot({
    type: 'status-left',
    component: Clock
  })
}