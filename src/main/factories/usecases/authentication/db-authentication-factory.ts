import { Authentication } from './../../../../domain/useCases/authentication';
import env from '../../../config/env'
import { DbAuthentication } from '../../../../data/usecases/authentication/db-authentication';
import { AccountMongoRepository } from '../../../../infra/db/mongodb/account/account-mongo-repository'
import { BcryptAdapter } from '../../../../infra/criptography/bcrypt-adapter/bcrypt-adapter';
import { JwtAdapter } from '../../../../infra/criptography/jwt-adapter/jwt-adapter';

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  
  const accountMongoRepository= new AccountMongoRepository()
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)

  return new DbAuthentication(
    accountMongoRepository, 
    bcryptAdapter, 
    jwtAdapter, 
    accountMongoRepository
  )
}