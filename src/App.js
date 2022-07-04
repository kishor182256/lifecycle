import React, { Component } from 'react';
import Navbar from './Navbar';
import { TodoRows } from './TodoRows';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
			userName: 'Kishor',
			todoItems: [
				{ action: 'Buy Milk', done: true },
				{ action: 'Dentist at 5pm', done: false },
				{ action: 'Go to Gym', done: false },
			],
			newTodo: '',
		};
  }

  toggleDone = (todo) =>
		this.setState({
			todoItems: this.state.todoItems.map((item) =>
				item.action === todo.action ? { ...item, done: !item.done } : item
			),
		})

  todoRows = () =>
		this.state.todoItems.map((item) => (
			<TodoRows key={item.action} item={item} callback={this.toggleDone} />
		));
   
    updatedValue = (event) => {
           this.setState({
            newTodo: event.target.value
           });
    }

    newTodo = () => {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          { action: this.state.newTodo, done: false },
        ],
      });
    };
  
  render = ()=>{
    return (
      <div className='container'>
         <div className="row">
          <Navbar name={this.state.userName} />
          <div className="col-12">
            <input className='form-control' onChange={this.updatedValue}
             value={this.state.newToDo}/>
          </div>
          <button className="btn btn-primary" onClick={this.newTodo}>
						Add
					</button>
          <div className='col-12'>
           <table className='table'>
            <thead>
              <tr>
                <th>Task</th>
                <th>Complete</th>
              </tr>
            </thead>
            <tbody>{this.todoRows()}</tbody>
           </table>
          </div>
         </div>
      </div>
    )
  }
}