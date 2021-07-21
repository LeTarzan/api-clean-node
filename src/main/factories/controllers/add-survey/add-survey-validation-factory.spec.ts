import { 
  ValidationComposite,
  RequireFieldValidation,
} from '../../../../validation/validators'
import { Validation } from '../../../../presentation/protocols/validation'
import { makeAddSurveyValidation } from './add-survey-validation-factory'

jest.mock('../../../../validation/validators/validation-composite')

describe('AddSurvey Validation Factory', () => {
  test('Should call ValidationComposite with all validations', async () => {
    makeAddSurveyValidation()
  
    const validations: Validation[] = []

    for (const field of ['question', 'answers']) {
      validations.push(new RequireFieldValidation(field))
    }

    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})