import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component{
  state={
    todos:[
      {
        id:1,
        title:"Task1",
        completed:false
      },
      {
        id:2,
        title:"Task2",
        completed:false
      },
      {
        id:3,
        title:"Task3",
        completed:false
      }
    ]
  }

  // toggle complete
  markComplete= id =>{
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id===id)
      todo.completed=!todo.completed

      return todo;
    })
  });    
  }
  

// delete todo


delTodo=id=>{
this.setState({todos:[...this.state.todos.filter
  (todo=>todo.id!==id)]})
  }

AddTodo=(title)=>{
  const newTodo={
    id:4,
    title,
    completed:false
  }
this.setState({todos:[...this.state.todos,newTodo]}) 
}


  render(){
    return (
      <div className="App">
        
        <div className="container">
        <Header></Header>
        <AddTodo AddTodo={this.AddTodo}></AddTodo>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}></Todos>
        </div> 
      </div>
      
    );
  }
}

export default App;
