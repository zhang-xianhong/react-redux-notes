import React, { Component } from 'react'
// 导入nanoid，可以动态获取一个唯一的id值
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {

    addPerson = ()=>{
        var name = this.nameNode.value
        var age = this.ageNode.value
        const personObj ={id:nanoid(),name,age}
        // console.log(personObj)
        // console.log(this.props)
        this.props.addOnePerson(personObj)
        this.nameNode.value=''
        this.ageNode.value=''
    }
    render() {
        return (
            <div>
                <h2>我是Person组件  </h2>
                <p>上方组件求和结果为：{this.props.count}</p>
                <input ref={c=>this.nameNode=c} type="text" name="username" id="" placeholder="请输入姓名"/>
                <input ref={c=>this.ageNode=c} type="text" name="userage" id="" placeholder="请输入年龄"/>
                <button onClick={this.addPerson}>点击添加Person信息</button>
                <ul>
                    {
                        this.props.persons.map(p=>{
                            return(
                                <li key={p.id}>姓名：{p.name}-------年龄：{p.age}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        persons:state.persons,
        count:state.count}),
    // 映射操作对象的方法
    {
        addOnePerson:addPerson
    }
)(Person)