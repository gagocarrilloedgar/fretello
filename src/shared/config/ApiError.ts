class ApiError extends Error {
  statusCode: number
  isOperational: boolean
  // eslint-disable-next-line space-before-function-paren
  constructor(
    statusCode: number,
    message: string,
    isOperational = true,
    stack = ''
  ) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = isOperational
    if (stack) {
      this.stack = stack
    } else Error.captureStackTrace(this, this.constructor)
  }
}

export default ApiError
