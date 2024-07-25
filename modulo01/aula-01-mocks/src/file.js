const { readFile } = require('node:fs/promises')
const { error } = require('./constants')
const DEFAULT_OPTIONS = {
  maxLines: 3,
  fields: ["id","name","profession","age"]
}
class File {
  static async csvToJson(filePath) {
    const content = await readFile(filePath,"utf8")
    const validation=this.isValidCSV(content)
    if(!validation.valid) throw new Error(validation.error)
  }


  static isValidCSV(csvString,options=DEFAULT_OPTIONS) {
    const [headers,...fileWithoutHeader]=csvString.split(/\r?\n/)
    if(!fileWithoutHeader.length) {
      return {
        error: error.FILE_LENGTH_ERROR_MESSAGE,
        valid: false
      }
    }
    const isHeaderValid = headers===options.fields.join(',')
    if(!isHeaderValid) {
      return {
        error: error.FILE_FIELDS_ERROR_MESSAGE,
        valid: false
      }
    }
  }
}

module.exports = File