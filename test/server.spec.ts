import request from 'supertest'

import app from 'src/server'

describe('Server /', () => {
  afterAll(() => {
    app.close()
  })

  it('should return  200 OK', () => {
    return request(app).get('/api/v1').expect(200)
  })
})
