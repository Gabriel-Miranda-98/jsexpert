const File = require('./src/file')
const {error} = require('./src/constants')
const assert = require('node:assert')
;(async ()=>{
  {
    const filePath  = './mocks/emptyFile-invalid.csv'
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await assert.rejects(
      result,
      expected
    )
  }

  {
    const filePath  = './mocks/invalid-header.csv'
    const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await assert.rejects(
      result,
      expected
    )
  }
})()