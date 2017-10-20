// This code is licensed under GNU GPL v3
// Please refer to LICENSE

// Edit this with the name for the coin you want to track
var coinToSearchFor = 'airswap';
// Edit this with the name of the sheet you want results appended to
var sheetToUse = 'Main';

// This function will hit the coinmarketcap API endpoint to get current ticker info
function readTokenValue(tokenName) {
  var cmResponse = UrlFetchApp.fetch('https://api.coinmarketcap.com/v1/ticker/' + tokenName + '/').getContentText();
  var parsed = JSON.parse(cmResponse)[0];
  var rDate = new Date(parsed['last_updated']*1000);
  var rUSD = parseFloat(parsed['price_usd']);
  var rASupply = parseInt(parsed['available_supply']);
  var rTSupply = parseInt(parsed['total_supply']);
  var resRow = [rDate, rUSD, rASupply, rTSupply];
  return resRow;
}

// Main entry point for the script - makes the ticker API call and stores the result in the sheet
function main() {
  var sheetCoinMarket = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetToUse);
  var readValues = readTokenValue(coinToSearchFor);
  sheetCoinMarket.appendRow(readValues);
}
