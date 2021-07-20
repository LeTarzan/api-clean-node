import { badRequest } from './../../../helpers/http/http-helper';
import { 
  Controller,
  Validation,
  HttpRequest,
  HttpResponse,
  AddSurvey
} from './add-survey-controller-protocols';

export class AddSurveyController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly addSurvey: AddSurvey
  ){}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if(error) {
      return badRequest(error)
    }

    const { question, answers } = httpRequest.body
    
    this.addSurvey.add({
      question,
      answers
    })
    return null
  }
}