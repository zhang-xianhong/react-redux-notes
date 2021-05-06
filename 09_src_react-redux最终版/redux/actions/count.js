/* 
    该文件用于创建一个action对象
*/
// import store from './store'
import {INCREMENT,DECREMENT} from '../constant'
// 同步action，就是指action的值为Object类型的一般对象
export const increment = data=>({type: INCREMENT,data})
export const decrement = data=>({type: DECREMENT,data})

// 异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
export const incrementAsync = (data,time) => {
    return (dispatch)=>{
        setTimeout(()=>{
            // store.dispatch(createIncrementAction(data))
            dispatch(increment(data))
        },time)
    }
}