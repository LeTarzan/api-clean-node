import { LoadSurveys } from '@/domain/useCases/survey/load-surveys'
import { AddSurvey, AddSurveyParams } from '@/domain/useCases/survey/add-survey'
import { SurveyModel } from '@/domain/models/survey'
import { mockSurvey, mockSurveys } from '@/domain/test'
import { LoadSurveyById } from '@/domain/useCases/survey/load-survey-by-id'

export const mockAddSurvey = (): AddSurvey => {
  class AddSurveyStub implements AddSurvey {
    async add (data: AddSurveyParams): Promise<void> {
      return await Promise.resolve(null)
    }
  }
  return new AddSurveyStub()
}

export const mockLoadSurveys = (): LoadSurveys => {
  class LoadSurveysStub implements LoadSurveys {
    async load (): Promise<SurveyModel[]> {
      return await Promise.resolve(mockSurveys())
    }
  }

  return new LoadSurveysStub()
}

export const mockLoadSurveyById = (): LoadSurveyById => {
  class LoadSurveyByIdStub implements LoadSurveyById {
    async loadById (id: string): Promise<SurveyModel> {
      return await Promise.resolve(mockSurvey())
    }
  }

  return new LoadSurveyByIdStub()
}
