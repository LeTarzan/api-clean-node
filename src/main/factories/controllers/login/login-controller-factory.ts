import { makeLogControllerDecorator } from './../../decorator/log-controller-decorator-factory';
import { makeDbAuthentication } from './../../usecases/authentication/db-authentication-factory';
import { makeLoginValidation } from './login-validation-factory';
import { Controller } from '../../../../presentation/protocols/controller';
import { LoginController } from '../../../../presentation/controllers/login/login/login-controller';

export const makeLoginController = (): Controller => {  
  const loginController = new LoginController(makeDbAuthentication(), makeLoginValidation())

  return makeLogControllerDecorator(loginController)
}