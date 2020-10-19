import { NextFunction, Response, Request } from 'express'
import { ValidationError } from 'yup'

interface ValidationErrors {
  [key: string]: string[]
}

const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction
): Response => {
  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {}

    error.inner.forEach(err => {
      errors[err.path] = err.errors
    })

    return response.status(400).json({ message: 'Validation failed', errors })
  }

  console.error(error)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
}

export default errorHandler
