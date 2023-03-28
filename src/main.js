// import { str } from './moduleA.js'
// console.log(str + '哈哈哈哈')
import { createApp, h } from 'vue'
import App from './App.vue'
import './index.css'
// const App = {
//   render() {
//     return h('h1', null, [h('h2', null, String('hello vite'))])
//   },
// }
createApp(App).mount('#app')
