import { makeAddSurveyValidation } from './add-survey-validation-factory';
import { AddSurveyController } from '../../../../../presentation/controllers/survey/add-survey/add-survey-controller';
import { makeLogControllerDecorator } from '../../../decorator/log-controller-decorator-factory';
import { Controller } from '../../../../../presentation/protocols/controller';
import { makeDbAddSurvey } from '../../../usecases/survey/add-survey/db-add-survey-factory';

export const makeAddSurveyController = (): Controller => {  
  const loginController = new AddSurveyController(
    makeAddSurveyValidation(),
    makeDbAddSurvey()  
  )

  return makeLogControllerDecorator(loginController)
}