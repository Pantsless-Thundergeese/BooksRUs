const path = require('path');
const model = require('../server/model/schema');

describe('MongoDB unit test', () => {
  describe('find', () => {
    it ('writes the model', async () => {
      const result = await model.User.findOne({ email: 'kanaganai@gmail.com'})
      expect(result.email).toEqual('kanaganai@gmail.com');
    })
  })
})