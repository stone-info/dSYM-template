const colors = [1, 4, 7, 31, 32, 33, 34, 35, 36, 37, 40, 41, 42, 43, 44, 45, 46, 47, 91, 92, 93, 94, 95, 96, 97, 100, 101, 102, 103, 104, 105, 106, 107]

const Info = Error

function pickColor(content, color) {
  return `\x1b[${colors[color]}m${content}\x1b[0m`
}

function contentColor(content, color) {

  if (typeof content === 'string') {return `\x1b[${colors[color]}m${content}\x1b[0m`}
  // if (typeof content === 'number') {return `\x1b[${colors[color]}m${content}\x1b[0m`}
  //
  // if (typeof content === 'function') {return content}
  //
  // if (typeof content === 'symbol') {return content}
  //
  // // 数组元素中如果有 symbol 元素就转不了
  // if (Object.prototype.toString.call(content) === '[object Array]') {
  //   for (let i = 0; i < content.length; ++i) {
  //     let contentElement = content[i]
  //     if (typeof contentElement === 'symbol') {
  //       return content
  //     }
  //   }
  // }
  //
  // // 对象元素中如果有 symbol 元素就转不了
  // if (Object.prototype.toString.call(content) === '[object Object]') {
  //   let propertyKeys = Reflect.ownKeys(content)
  //   for (let i = 0; i < propertyKeys.length; ++i) {
  //     let propertyKey = propertyKeys[i]
  //     if (typeof propertyKey === 'symbol') {
  //       return content
  //     }
  //   }
  // }

  return content
}

function dlog(obj, info, color) {

  let infoList = info.stack.split(/\n/)
  let message  = infoList[0]

  if (!/Error:.*/.test(message)) {
    message = 'anonymous'
  } else {
    message = message.split(/:/)[1].trim()
  }

  let temp        = infoList[1]
  let [m]         = temp.match(/(?<=\()(.*)(?=\))/)
  let number      = m.lastIndexOf(':')
  let information = m.substring(0, number)

  let r = contentColor(obj, color)
  if (typeof r === 'string') {
    console.log(information + pickColor(' :- ', 0) + pickColor(message, 4) + pickColor(' = ↓\n', 0) + r, '\n')
  } else {
    console.log(information + pickColor(' :- ', 0) + pickColor(message, 4) + pickColor(' = ↓\n', 0), r, '\n')
  }
}

exports.dlog          = dlog
exports.pickColor     = contentColor
exports.purePickColor = pickColor
exports.Info          = Info
