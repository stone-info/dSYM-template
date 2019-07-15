const express        = require('express')
const execa          = require('execa')
const path           = require('path')
const runApplescript = require('run-applescript')
const osHomedir      = require('os-homedir')
const {dlog, Info}   = require('../lib/dlog')

const router = express.Router()

function projectName() {
  return this.filePath.substring(this.filePath.lastIndexOf('/') + 1).split('.')[0]
}

router.post('/analyse', function (req, res, next) {

  // console.log(req.body)
  // dlog(JSON.stringify(req.body, null, 2), new Info(`req.body`), 0)
  // for (let key in req.body) {
  //   dlog(req.body[key], new Info(`req.body[key]`), 0)
  // }
  // let projectPath = req.body.projectPath
  // let keyString   = req.body.keyString
  // let ivString    = req.body.ivString
  //
  // let cmd = `bash ${path.resolve(__dirname, '../shells/crypto/start.sh')} "${path.basename(projectPath)}" "${keyString}" "${ivString}"`
  // execa.shell(cmd).then(() => {res.end('加密成功')}).catch((err) => {res.end('加密失败' + err)})

  let {filePath, clipboard} = req.body

  let projectName = filePath.substring(filePath.lastIndexOf('/') + 1).split('.')[0]

  let resultPath = filePath

  if (filePath.endsWith('xcarchive')) {
    let {stdout} = execa.shellSync(`find ${filePath}/dSYMs -name "${projectName}"`)
    // console.log(stdout)
    resultPath   = stdout
  }

  if (filePath.endsWith('dSYM')) {
    let {stdout} = execa.shellSync(`find ${filePath}/Contents -name "${projectName}"`)
    // console.log(stdout)
    resultPath   = stdout
  }

  let baseAddress
  {
    // Base Address: 0x0000000104a24000
    let [m]     = clipboard.match(/(?<=Base Address:)\s*0x[0-9a-zA-Z]{16}/)
    baseAddress = m.trim()
  }

  let cpuType
  {
    // CPU Type: arm64
    let [m] = clipboard.match(/(?<=CPU Type:)\s*(arm64|armv7)/)
    cpuType = m.trim()
  }

  let addressList
  {
    let regExp = new RegExp(`(?<=${projectName}).*(?=${projectName})`, 'img')

    console.log(regExp)

    let m = clipboard.match(regExp)
    console.log(m)
    addressList = m.map(item => item.trim())
    // addressList = m.trim()
  }

  execa('atos', [
    '-o',
    resultPath,
    '-arch',
    cpuType,
    '-l',
    baseAddress,
    ...addressList,
  ]).then(({stdout}) => {
    res.json({msg: stdout})
  }).catch((err) => {
    console.log(`\x1b[41m${err}\x1b[0m`)
  })

  // res.json({msg: 'hello'})

  // atos -o FLG.app.dSYM/Contents/Resources/DWARF/FLG -arch arm64 -l 0x0000000100040000 0x0000000100047918 0x0000000100099c7c 0x0000000100088b2c 0x0000000100393ea4 0x000000010011bc10

})

module.exports = router
