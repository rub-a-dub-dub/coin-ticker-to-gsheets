# coin-ticker-to-gsheets
This quick script was created to help me keep track of coin ticker prices automatically on a regular basis. The hope was for me to be able to occasionally check-in to a spreadsheet and find new rows with time and price annotated within. In effect this script creates a running log of the ticker price for a coin as reported by coinmarketcap.com . It does this by using the API connection provided by the latter and storing that result in the sheet as a 4-tuple (date of the record, price in USD, available supply, total supply).

# Usage
To use the attached Code.gs file, perform the following steps:
1. Create a new GSheet or open up your existing sheet
2. Make a note of the name of the sheet you want to use
3. To get the name of the coin, the name that coinmarketcap.com uses, visit their site, click on the currency of interest and extract its name from the URL, e.g. https://coinmarketcap.com/currencies/bitcoin-cash/ becomes _bitcoin-cash_
4. Back in your GSheet, go to _Tools_ > _Script Editor_
5. Copy + Paste the contents of _Code.gs_ into the empty script editor
6. Change the variables _coinToSearchFor_ and _scriptToUse_ to the values you've discovered above
7. Run your script and see a new row show up in your sheet; you may have to approve authorisation for your script to access external resources and the Sheets API
8. To have this script run automatically on a schedule, from the script editor go to _Edit_ > _Triggers for the Current Project_
9. Ensure the function being executed is _main_ and set the schedule to your liking
10. Once you hit save you're all done and your sheet will begin automatically importing ticker prices from coinmarketcap.com

# Tips!
If this was helpful for you, I'd certainly appreciate any ETH ( 0xd84e2E842e0a1973b8b2d75531367922bB252945 ) you could send me way. Thanks!
