/* 
    本文件只用于暴露一个store对象，整个应用只有一个store对象
*/

// 引入createStore，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware} from 'redux'
// 引入redux-thunk，用于支持一部action，同时要引入上面的执行中间件applyMiddleware
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'

// 引入汇总之后的reducer
import allReducers from './reducers/index'

// const store = createStore(allReducers,applyMiddleware(thunk))
const store = createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))

// 暴露store
export default store