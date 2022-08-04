const request = require('supertest');

const server = 'http://localhost:3000';

describe('Test', () => {
  it('Respond /test with redirect', () => request(server)
    .get('/test')
    .expect(302))
    
})