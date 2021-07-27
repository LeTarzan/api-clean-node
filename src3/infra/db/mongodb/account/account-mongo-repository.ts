import { LoadAccountByTokenRepository } from './../../../../data/protocols/db/account/load-account-by-token-repository';
import { UpdateAccessTokenRepository } from '../../../../data/protocols/db/account/update-access-token-repository';
import { LoadAccountByEmailRepository } from '../../../../data/protocols/db/account/load-account-by-email-repository';
import { AddAccountRepository } from '../../../../data/protocols/db/account/add-account-repository'
import { AccountModel } from '../../../../domain/models/account';
import { AddAccountModel } from '../../../../domain/usecases/add-account';
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements 
    AddAccountRepository, 
    LoadAccountByEmailRepository, 
    UpdateAccessTokenRepository,
    LoadAccountByTokenRepository
  {

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getColletion('accounts')
    
    const result = await accountCollection.insertOne(accountData)
    
    return MongoHelper.map(result.ops[0])
  }
  
  async loadByEmail (email: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getColletion('accounts')
    
    const account = await accountCollection.findOne({ email })
    
    return account && MongoHelper.map(account)
  }
  
  async updateAccessToken (id: string, token: string): Promise<void> {
    const accountCollection = await MongoHelper.getColletion('accounts')

    await accountCollection.updateOne({ 
      _id: id, 
    }, {
      $set: {
        accessToken: token
      }
    })
  }

  async loadByToken (token: string, role?: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getColletion('accounts')
    
    const account = await accountCollection.findOne({ 
      accessToken: token, 
      role
    })
    
    return account && MongoHelper.map(account)
  }
}