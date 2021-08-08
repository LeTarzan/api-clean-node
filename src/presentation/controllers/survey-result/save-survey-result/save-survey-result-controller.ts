import { InvalidParamError } from '@/presentation/errors'
import { forbidden, serverError } from './../../../helpers/http/http-helper'
import {
  Controller,
  HttpResponse,
  HttpRequest,
  LoadSurveyById
} from './save-survey-result-controller-protocols'

export class SaveSurveyResultController implements Controller {
  constructor (
    private readonly loadSurveyByIdStub: LoadSurveyById
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { surveyId } = httpRequest.params

      const survey = await this.loadSurveyByIdStub.loadById(surveyId)
      if (!survey) return forbidden(new InvalidParamError('surveyId'))

      return null
    } catch (error) {
      return serverError(error)
    }
  }
}
