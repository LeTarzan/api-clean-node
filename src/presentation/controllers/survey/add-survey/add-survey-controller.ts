import { badRequest } from './../../../helpers/http/http-helper';
import { 
  Controller,
  Validation,
  HttpRequest,
  HttpResponse
} from './add-survey-controller-protocols';

export class AddSurveyController implements Controller {
  constructor(
    private readonly validation: Validation
  ){}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if(error) {
      return badRequest(error)
    }
    return null
  }
}