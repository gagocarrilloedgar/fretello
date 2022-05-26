import request from 'supertest'

import app from 'src/server'

describe('SerVER /', () => {
  afterAll(() => {
    app.close()
  })

  it('should return  200 OK', () => {
    return request(app).get('/api').expect(200)
  })
})
