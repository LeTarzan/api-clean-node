import { SurveyResultModel } from '@/data/usecases/survey-result/save-survey-result/db-save-survey-result-protocols'
import { SaveSurveyResultParams } from '@/domain/useCases/survey-result/save-survey-result'

export const mockSurveyResultData = (): SaveSurveyResultParams => ({
  accountId: 'any_accountId',
  surveyId: 'any_surveyId',
  answer: 'any_answer',
  date: new Date()
})

export const mockSurveyResult = (): SurveyResultModel => Object.assign({}, mockSurveyResultData(), {
  id: 'any_id'
})
