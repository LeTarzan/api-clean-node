import { AuthenticationParams } from '@/domain/useCases/account/authentication'
import { AddAccountParams } from '@/domain/useCases/account/add-account'
import { AccountModel } from '@/domain/models/account'

export const mockAddAccountParams = (): AddAccountParams => ({
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'any_password'
})

export const mockAccountModel = (): AccountModel => Object.assign({}, mockAddAccountParams(), {
  id: 'any_id'
})

export const mockAuthentication = (): AuthenticationParams => ({
  email: 'any_email@mail.com',
  password: 'any_password'
})
