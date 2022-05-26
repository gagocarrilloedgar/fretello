import { ApiError } from 'shared/config'

describe('ApiError', () => {
  it('should be a function', () => {
    expect(typeof ApiError).toBe('function')
  })
  it('should return a new instance of ApiError', () => {
    const error = new ApiError(400, 'Bad Request')
    expect(error).toBeInstanceOf(ApiError)
  })
  it('should return a new instance of ApiError with statusCode', () => {
    const error = new ApiError(400, 'Bad Request')
    expect(error.statusCode).toBe(400)
  })

  it('should return a new instance of ApiError with message', () => {
    const error = new ApiError(400, 'Bad Request')
    expect(error.message).toBe('Bad Request')
  })

  it('should return a new instance of ApiError with isOperational', () => {
    const error = new ApiError(400, 'Bad Request')
    expect(error.isOperational).toBe(true)
  })

  it('should return a new instance of ApiError with stack', () => {
    const error = new ApiError(400, 'Bad Request', false, 'null')
    expect(error.stack).toBeDefined()
  })
})
