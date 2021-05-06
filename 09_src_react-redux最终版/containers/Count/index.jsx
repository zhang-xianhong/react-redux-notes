// 引入左手的Count的UI组件
// import CountUI from '../../components/Count'
// 连接左右手，引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
import {
    increment,
	decrement,
	incrementAsync
} from '../../redux/actions/count'
import React, { Component } from 'react'
class Count extends Component {

	state = {carName:'奔驰c63'} //自己的状态

	//加法
	increment = ()=>{
		const {value} = this.selectNumber
		this.props.add(value*1)
	}
	//减法
	decrement = ()=>{
		const {value} = this.selectNumber
		this.props.dec(value*1)
	}
	//奇数再加
	incrementIfOdd = ()=>{
		const {value} = this.selectNumber
		if(this.props.count % 2 !== 0) {
			this.props.add(value*1)
		} 
	}
	//异步加
	incrementAsync = ()=>{
		const {value} = this.selectNumber
		this.props.asyncIncrement(value*1,1000)
	}

	render() {
		console.log('UI组件接收到的参数是：',this.props)
		return (
			<div>
				<h1>我是Count组件</h1>
				<h3>当前求和为：{this.props.count}</h3>
				<p>下方组件的人数为：{this.props.personCount}</p>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
			</div>
		)
	}
}


// 映射状态
// const mapStateToProps = state => ({count:state})  

// 映射操作状态的方法
/* const mapDispatchToProps = dispatch => (
    {
        add: data => dispatch(createIncrementAction(data)),
        dec: data => dispatch(createDecrementAction(data)),
        asyncIncrement: (data,time) => dispatch(createIncrementAsyncAction(data,time))
    }
) */

// 使用connect()()创建并暴露一个Count的容器组件
// export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

// mapDispatchToProps简写方法
export default connect(
    state => ({
		count:state.count,
		personCount:state.persons.length
	}),
    
    {
        add: increment,
        dec: decrement,
        asyncIncrement: incrementAsync
    }
    )(Count)