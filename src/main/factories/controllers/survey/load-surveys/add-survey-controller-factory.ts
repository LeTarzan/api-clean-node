import { makeDbLoadSurveys } from './../../../usecases/survey/load-surveys/db-load-surveys-factory'
import { LoadSurveysController } from './../../../../../presentation/controllers/survey/load-surveys/load-surveys-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'

export const makeLoadSurveyController = (): Controller => {
  const controller = new LoadSurveysController(makeDbLoadSurveys())
  return makeLogControllerDecorator(controller)
}
