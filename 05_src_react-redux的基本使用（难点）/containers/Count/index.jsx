// 引入左手的Count的UI组件
import CountUI from '../../components/Count'
// 连接左右手，引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

/*
1.mapstateToProps函数返回的是一个对象;
2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
3.mapStateToProps用于传递状态 
*/

function mapStateToProps(state) {
    return {count:state}
}

/* 
1.mapstateToProps函数返回的是一个对象;
2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
3.mapStateToProps用于传递操作对象的方法 
*/
function mapDispatchToProps(dispatch) {
    return {
        add:(data)=>{dispatch(createIncrementAction(data))},
        dec: data => dispatch(createDecrementAction(data)),
        asyncIncrement: (data,time) => dispatch(createIncrementAsyncAction(data,time))
    }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)