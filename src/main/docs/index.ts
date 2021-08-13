import {
  loginPath,
  surveyPath,
  signUpPath,
  surveyResultPath
} from './paths'

import {
  badRequest,
  serverError,
  unauthorized,
  forbidden
} from './components'

import {
  accountSchema,
  errorSchema,
  loginParamsSchema,
  surveyAnswerSchema,
  surveySchema,
  surveysSchema,
  apiKeyAuthSchema,
  signUpParamsSchema,
  addSurveyParamsSchema,
  saveSurveyParamsSchema,
  surveyResultSchema
} from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean node API',
    description: 'API para realizar enquetes',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0',
    url: 'https://opensource.org/licenses/gpl-license'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  },
  {
    name: 'Enquete'
  }],
  paths: {
    '/signup': signUpPath,
    '/login': loginPath,
    '/surveys': surveyPath,
    '/surveys/{surveyId}/results': surveyResultPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema,
    signUpParams: signUpParamsSchema,
    addSurveyParams: addSurveyParamsSchema,
    saveSurveyParams: saveSurveyParamsSchema,
    surveyResult: surveyResultSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest: badRequest,
    serverError: serverError,
    unauthorized: unauthorized,
    forbidden: forbidden
  }
}
