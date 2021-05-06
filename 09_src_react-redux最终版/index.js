import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
    // 把传递的store放在Provider中，这样所有需要用到store的容器组件都可以接收到，就不用每个组件都去引入了
    // 此处需要用到Provider包裹App组件，目的是让App组件所有的容器组件都能接收到store
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

// 容器组件中的connect函数默认会重新渲染render函数，所有不用再检测redux的状态改变，即以下代码可以不用写
// 检测redux中状态的改变，如果redux的状态发生了改变，那么重新渲染App组件
/* store.subscribe(()=>{
    ReactDOM.render(<App/>,document.getElementById('root'))
}) */