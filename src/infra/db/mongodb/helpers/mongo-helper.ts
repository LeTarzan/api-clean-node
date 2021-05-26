import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  uri: null as string,

  async connect(uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },
  async disconnect(): Promise<void> {
    await this.client.close()
    this.client = null
  },
  async getColletion(name: string): Promise<Collection> {
    if(!this.client?.isConnected()) await this.connect(this.uri) 
    
    return this.client.db().collection(name)
  },
  map (colletion: any): any {
    const { _id, ...colletionWithOutId } = colletion
    return Object.assign({}, colletionWithOutId, { id: _id })
  }
}