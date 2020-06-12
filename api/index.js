module.exports = (req, res) => {
  const { name = 'Wwworld' } = req.query
  res.send(`Hello ${name}!`)
}
