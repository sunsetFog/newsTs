/**
 * 配置环境
 */

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:8062/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://****.org/prod'
} else {
  BASE_URL = 'http://****.org/test'
}
// 将配置不同环境下的值进行导出使用
export { BASE_URL, TIME_OUT }
