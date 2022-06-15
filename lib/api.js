import { google } from 'googleapis'

function getSheets() {
  const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly']
  const jwt = new google.auth.JWT(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    null,
    // we need to replace the escaped newline characters
    // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
    process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes
  )
  return google.sheets({ version: 'v4', auth: jwt })
}

function combineKeysAndValues(columnKeys = [], rows = []) {
  return rows.map(row => {
    return row.reduce((acc, value, i) => {
      const key = columnKeys[i]
      if (!key) return acc
      acc[key] = value
      return acc
    }, {})
  })
}

const returnSheetFetchFunction = (sheetKeys = []) => async () => {
  try {
    const sheets = getSheets()
    const response = await sheets.spreadsheets.values.batchGet({
      spreadsheetId: process.env.SPREADSHEET_ID,
      ranges: sheetKeys
    })
    const valueRanges = response.data.valueRanges
    const data = valueRanges.reduce((acc, valueRange, i) => {
      const key = sheetKeys[i]
      const columnKeys = valueRange.values[0]
      const rows = valueRange.values.slice(2)
      const convertedRows = combineKeysAndValues(columnKeys, rows)
      return {
        ...acc,
        [key]: convertedRows
      }
    }, {})
    return data
  } catch (err) {
    console.log(err)
    return []
  }
}

export const getMenuData = returnSheetFetchFunction([
  'menu-dumplings',
  'inventory-drinks',
  'inventory-food',
  'categories-drinks',
  'categories-food',
  'labels',
  'additives'
])
export const getAppData = returnSheetFetchFunction([
  'globals',
  'restaurants'
])