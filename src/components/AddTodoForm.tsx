import React from 'react';
import Store, { StoreProps, Todo } from '../store/Store';

class AddTodoFormComponent extends React.Component<StoreProps> {
  state: State = {
    text: ''
  }

  handleChange = (event: any) => {
    this.setState({text: event.target.value});
  }

  handleSubmit = (text: string) => {
    // Create new item
    const newTodo: Todo = {
      text,
      complete: false,
    }

    // Set todos in store
    this.props.store.set('todos')([...this.props.store.get('todos'), newTodo]);
    
    this.setState({text: ''}); 
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.handleChange}/>
        <input type="submit" onClick={() => this.handleSubmit(this.state.text)}/>
      </div>
    );
  }
}

// Connect to store
// - Automatically re-renders
// - Passes store to component as a prop
export default Store.withStore(AddTodoFormComponent);

type State = {
  text: string;
}