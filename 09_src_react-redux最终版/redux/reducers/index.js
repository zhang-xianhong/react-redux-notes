/* 
    该文件用于汇总所有的reducer，即为总的reducer
*/

// 引入combineReducers，用于汇总多个reducers
import {combineReducers} from 'redux'
// 引入为Count组件服务的reducer
import count from './count'
// 引入为Person组件服务的reducer
import persons from './person'

// combineReducers传入的那个对象就是redux中保存的总对象_
// 合并所有的reducer
const allReducers = combineReducers({
    count,
    persons
})

export default allReducers