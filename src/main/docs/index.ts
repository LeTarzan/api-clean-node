import { loginPath } from './paths/login-path'

import {
  badRequest,
  serverError,
  unauthorized
} from './components'

import {
  accountSchema,
  errorSchema,
  loginParamsSchema
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
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema
  },
  components: {
    badRequest: badRequest,
    serverError: serverError,
    unauthorized: unauthorized
  }
}
