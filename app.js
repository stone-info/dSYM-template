require('@babel/polyfill')
require('@babel/register')
const createError    = require('http-errors')
const express        = require('express')
const path           = require('path')
const cookieParser   = require('cookie-parser')
const logger         = require('morgan')
const sassMiddleware = require('node-sass-middleware')
const glob           = require('glob')
const bodyParser     = require('body-parser')
const cors         = require('cors');

const app = express()

main()

function main() {

  var indexRouter    = require('./routes/index')

  // view engine setup
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'pug')

  app.use(cors());

  // bodyParser.urlencoded 用来解析 request 中 body的 urlencoded字符， 只支持utf-8的编码的字符,也支持自动的解析gzip和 zlib
  // 返回的对象是一个键值对，当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
  // app.use(bodyParser.urlencoded({ extended: true }));//返回的对象为任意类型
  // 创建 application/x-www-form-urlencoded 解析

  // postman中 form-data、x-www-form-urlencoded、raw、binary的区别
  // https://www.cnblogs.com/davidwang456/p/7799096.html

  // extended -
  // 当设置为false时，会使用querystring库解析URL编码的数据；
  // 当设置为true时，会使用qs库解析URL编码的数据。后没有指定编码时，使用此编码。
  // 默认为true
  // https://www.jianshu.com/p/ea0122ad1ac0
  app.use(bodyParser.urlencoded({ extended: false }))
  // 创建 application/json 解析
  app.use(bodyParser.json())//返回一个只解析json的中间件，最后保存的数据都放在req.body对象上

  app.use(logger('dev'))
  app.use(cookieParser())
  app.use(sassMiddleware({
    src           : path.join(__dirname, 'public'),
    dest          : path.join(__dirname, 'public'),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap     : true,
  }))
  app.use(express.static(path.join(__dirname, 'public')))

  app.use('/', indexRouter)

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {next(createError(404))})

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error   = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
  })
}

module.exports = app
