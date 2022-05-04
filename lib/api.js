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

const converters = {
  ['menu-dumplings']: (rows, offset = 0) => rows.slice(2).reduce((acc, row) => {
    const id = row[0]
    const name = row[1 + offset] || row[1] || null
    const info = row[3 + offset] || row[3] || null
    const price = row[5]
    return {
      ...acc,
      [id]: {
        name,
        info,
        price,
      }
    }
  }, {}),
  ['inventory-drinks']: (rows, offset = 0) => rows.slice(2).reduce((acc, row) => {
    const available = row[0] || 'FALSE'
    const id = row[1] || null
    const category = row[2] || null
    const name = row[3 + offset] || row[3] || null
    const info = row[5 + offset] || row[5] || null
    const labels = row[7] || null
    const additives = row[8] || null
    if (available !== 'TRUE') return acc
    return {
      ...acc,
      [id]: {
        name,
        category,
        info,
        labels,
        additives,
      }
    }
  }, {}),
  ['inventory-food']: (rows, offset = 0) => rows.slice(2).reduce((acc, row) => {
    const available = row[0] || 'FALSE'
    const id = row[1] || null
    const category = row[2] || null
    const price = row[2] || null
    const name = row[4 + offset] || row[4] || null
    const info = row[6 + offset] || row[6] || null
    const additives = row[8] || null
    if (available !== 'TRUE') return acc
    return {
      ...acc,
      [id]: {
        name,
        category,
        price,
        info,
        additives,
      }
    }
  }, {}),
  ['categories-drinks']: (rows, offset = 0) => rows.slice(2).reduce((acc, row) => {
    const id = row[0] || null
    const name = row[1 + offset] || row[1] || null
    const unit = row[3] || null
    return {
      ...acc,
      [id]: {
        name,
        unit,
      }
    }
  }, {}),
  ['categories-food']: (rows, offset = 0) => rows.slice(2).reduce((acc, row) => {
    const id = row[0] || null
    const name = row[1 + offset] || row[1] || null
    return {
      ...acc,
      [id]: name
    }
  }, {}),
  ['labels']: (rows, offset = 0) => rows.slice(2).reduce((acc, row) => {
    const id = row[0] || null
    const name = row[1 + offset] || row[1] || null
    return {
      ...acc,
      [id]: name
    }
  }, {}),
  ['additives']: (rows, offset = 0) => rows.slice(2).reduce((acc, row) => {
    const id = row[0] || null
    const name = row[1 + offset] || row[1] || null
    return {
      ...acc,
      [id]: name
    }
  }, {}),
  ['globals']: (rows, offset = 0) => rows.slice(2).reduce((acc, row) => {
    const id = row[0] || null
    const name = row[1 + offset] || row[1] || null
    return {
      ...acc,
      [id]: name
    }
  }, {}),
  ['restaurants']: (rows, offset = 0) => rows.slice(2).reduce((acc, row) => {
    const id = row[0] || null
    const street = row[1] || null
    const streetNr = row[2] || null
    const postal = row[3] || null
    const city = row[4] || null
    const phone = row[5] || null
    const mail = row[6] || null
    return {
      ...acc,
      [id]: {
        street,
        streetNr,
        postal,
        city,
        phone,
        mail,
      }
    }
  }, {})
}

const returnSheetFetchFunction = (sheetKeys = []) => async (locale) => {
  const offset = locale === 'en' ? 1 : 0
  try {
    const sheets = getSheets()
    // const sheetKeys = ['menu-dumplings','inventory-drinks','inventory-food','categories-drinks','categories-food', 'labels', 'additives']
    const response = await sheets.spreadsheets.values.batchGet({
      spreadsheetId: process.env.SPREADSHEET_ID,
      ranges: sheetKeys
    })
    const valueRanges = response.data.valueRanges
    const data = valueRanges.reduce((acc, valueRange, i) => {
      const key = sheetKeys[i]
      const converter = converters[key]
      if (!converter) return acc
      const convertedRows = converter(valueRange.values, offset)
      return {
        ...acc,
        [key]: convertedRows
      }
    }, {})
    return data
  } catch (err) {
    console.log(err)
  }
  return []
}

export const getMenuData = returnSheetFetchFunction(['menu-dumplings','inventory-drinks','inventory-food','categories-drinks','categories-food', 'labels', 'additives'])
export const getAppData = returnSheetFetchFunction(['globals','restaurants'])