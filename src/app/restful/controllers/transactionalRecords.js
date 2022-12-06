const transactionalRecords = require('../services/transactionalRecords')

module.exports=(req, res) => {
  const { fromDate, toDate } = req.query
  const { accountId } = req.params
  if(!(fromDate && toDate))
    return res.status(400).json({ message:'missing date in url params' })
  try{
    const data= transactionalRecords({ fromDate, toDate, accountId })
    return res.status(200).json({ data })
  }catch(err){
    console.log(err)
    res.status(500).json({ message:'Something went wrong' })
  }
}
