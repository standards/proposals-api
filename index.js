const fetch = require('node-fetch')

module.exports = async () => {
  const request = await fetch('https://api.github.com/repos/standards/meta/issues?access_token=' + process.env.GITHUB_ACCESS_TOKEN)
  const data = await request.json()

  return data
}