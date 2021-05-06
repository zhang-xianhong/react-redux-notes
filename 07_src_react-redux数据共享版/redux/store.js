/* 
    本文件只用于暴露一个store对象，整个应用只有一个store对象
*/

// 引入createStore，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
// 引入redux-thunk，用于支持一部action，同时要引入上面的执行中间件applyMiddleware
import thunk from 'redux-thunk'

// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'

// combineReducers传入的那个对象就是redux中保存的总对象
// 合并所有的reducer
const allReducers = combineReducers({
    he: countReducer,
    person: personReducer
})

const store = createStore(allReducers,applyMiddleware(thunk))

// 暴露store
export default store