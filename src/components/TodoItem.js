import React, { Component } from 'react'

export class TodoItem extends Component {
//   dynamic styling function
    getStyle=()=>{
        return{
            backgroundColor:'#f4f4f4',
            padding:"10px",
            borderBottom:"1px #ccc dotted",
            textDecoration:this.props.todo.completed?'line-through':'none'
        }
    }

    
    render() {
        const {id,title,completed}=this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}></input>{' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                    </p>
            </div>
        )
    }
}

const btnStyle={
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
        
}
// const itemStyle={
//     backgroundColor:"#f4f4f4"
// }

export default TodoItem
