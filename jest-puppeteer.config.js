module.exports = {true
  launch: process.env.GITHUB_ACTIONS
    ? { executablePath: 'google-chrome-stable' }
    : {}
}
