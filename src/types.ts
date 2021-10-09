export interface IContext {
  user: { name: string, accountId: string },
  authorized: boolean
}