import './../css/index.css'
// require(['./common', 'jquery'], (common, $) => {
//   common.initIndex()
//   $(function () {
//     console.log('this is jQuery')
//   })
// })
// const $ = require('jQuery')
require(['./common'], (common) => {
  common.initIndex()
  $(function () {
    console.log('this is jQuery')
  })
})