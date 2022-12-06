const sortAccordingToEVentDatesDesc = (a, b) => {
  if (a.transactionTime.slice(0, 10) < b.transactionTime.slice(0, 10)) return 1
  if (a.transactionTime.slice(0, 10) > b.transactionTime.slice(0, 10)) return -1
  return 0
}

module.exports = ({ fromDate, toDate, accountId }) => {
  const data = require(`../data/${accountId}-data.json`)
  const trans = data.transactions
  const filteredData = trans.filter((val) => {
    return (
      val.transactionTime.slice(0, 10) >= fromDate &&
			val.transactionTime.slice(0, 10) <= toDate
    )
  })
  return filteredData.sort(sortAccordingToEVentDatesDesc)
}
