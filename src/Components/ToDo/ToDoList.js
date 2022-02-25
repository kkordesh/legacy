import React, { Component } from 'react';

class ToDoList extends Component {
    constructor(props){
    super(props);
    this.state = { inputValue:"", task: [{task:"", complete: false}] } 
    }

    handleChange = (e) => {
        this.setState({inputValue: e.target.value})
        //console.log(this.state.inputValue)
    }

    handleClick = (e) => {
        const newTask = this.state.task; 
        newTask.push({
            task: this.state.inputValue,
            complete: false
        })
        //console.log(this.state.task)
        this.setState({
            task: newTask, 
        })
    }

    handleUpdate = (e, arrayBucketNumber) => {
        let updateTask = this.state.task; 
        updateTask[arrayBucketNumber] = {
            task: updateTask[arrayBucketNumber].task,
            complete: e.target.checked
        };
        this.setState ({
            task: updateTask
        })
    }

    render() { 
        console.log(this.state.task)
        return (
            <div>
             <input onChange={this.handleChange}/> 
             <button onClick={this.handleClick}>Add to list</button>
             <ul>
                 {this.state.task.map((item, arrayBucketNumber) => (
                     <li style={{textDecoration: item.complete ? "line-through" : "none"}}>
                         <input type="checkbox" onChange={(e) => this.handleUpdate(e, arrayBucketNumber)} /> {" "}
                         {item.task}
                     </li>
                 ))}
             </ul>
            </div>
        );
    }
}
 
export default ToDoList;