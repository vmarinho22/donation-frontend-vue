import { z } from 'zod'

type Labels = {
  required: string
  invalid: string
  min?: string
  max?: string
}

export const inputValidations = {
  text: (value: unknown, labels: Labels): string | boolean => {
    const parsedValue = z
      .string({
        required_error: labels.required,
        invalid_type_error: labels.required
      })
      .safeParse(value)

    if (!parsedValue.success) {
      return parsedValue.error.errors.map((item) => item.message).join('|')
    }

    return parsedValue.success
  },
  textWithMinAndMax: (value: unknown, min: number, max: number, labels: Labels): string | boolean => {
    const parsedValue = z
      .string({
        required_error: labels.required,
        invalid_type_error: labels.required
      })
      .min(min, {
        message: labels.min
      })
      .max(max, {
        message: labels.max
      })
      .safeParse(value)

    if (!parsedValue.success) {
      return parsedValue.error.errors.map((item) => item.message).join('|')
    }

    return parsedValue.success
  }
}
