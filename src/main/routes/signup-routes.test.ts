import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name:'Leandro',
        email: 'leandrorevolve@gmail.com',
        password: '123qwe123',
        passwordConfirmation: '123qwe123'
      })
      .expect(200)
  })
})
