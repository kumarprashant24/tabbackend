module.exports = (req, res, next) => {
  const users = ['user1', 'user2']

  if(req.params.accountId &&  users.includes(req.params.accountId))
    return next()
  return res.status(404).json({ message:'User not found' })
}
