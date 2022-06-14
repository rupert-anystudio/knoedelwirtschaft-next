require('dotenv').config()

const rimraf = require('rimraf')
const fs = require('fs-extra')

const PATH_SHEETS = 'lib/sheets'

async function saveSheets() {
  console.log('saveSheets()')
}

rimraf(PATH_SHEETS, () => {
  fs.mkdir(PATH_SHEETS, saveSheets)
})