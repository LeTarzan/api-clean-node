import {
  LoadSurveysRepository,
  SurveyModel,
  LoadSurveys
} from '@/data/usecases/load-surveys/db-load-survey-protocols'

export class DbLoadSurveys implements LoadSurveys {
  constructor (
    private readonly loadSurveysRepository: LoadSurveysRepository
  ) {}

  async load (): Promise<SurveyModel[]> {
    const surveys = await this.loadSurveysRepository.loadAll()
    return surveys
  }
}
