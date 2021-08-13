import { apiKeyAuthSchema } from './schemas/'

import {
  badRequest,
  serverError,
  unauthorized,
  forbidden
} from './components/'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest: badRequest,
  serverError: serverError,
  unauthorized: unauthorized,
  forbidden: forbidden
}
