const https = require('https')
const fs = require('fs')

const createInstaller = (manifestName, exeName) => {
  const fileName = `rtc-finsemble-${exeName}`
  const appJSONUrl = `https://adaptiveconsulting.github.io/rtc-finsemble/configs/openfin/${manifestName}.json`
  const installerGeneratorUrl = `https://install.openfin.co/download/?unzipped=true&config=${appJSONUrl}&fileName=${fileName}`

  console.log(` - Creating installer: \x1b[36m${fileName}.exe\x1b[0m`)

  return new Promise(resolve => {
    https.get(installerGeneratorUrl, response => {
      const file = fs.createWriteStream(`public/install/${fileName}.exe`)
      response.pipe(file)
      resolve()
    })
  })
}

const createInstallers = installersData => {
  console.log(`Creating installers`)
  console.log(
    '\x1b[33m%s\x1b[0m', // Yellow
    `
NOTE: The installers contain just the URL to the manifest, not a copy of the manifest itself.
Make sure the json manifests are available on their respective locations when distributing the installer.
`,
  )

  return installersData.reduce(
    (sequence, { manifestName, exeName }) =>
      sequence.then(() => createInstaller(manifestName, exeName)),
    Promise.resolve(),
  )
}

module.exports = createInstallers
