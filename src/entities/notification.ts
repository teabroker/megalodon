import Account from './account'
import Status from './status'

export default interface Notification {
  account: Account
  created_at: string
  id: string
  status: Status | null
  type: 'mention' | 'reblog' | 'favourite' | 'follow'
}
