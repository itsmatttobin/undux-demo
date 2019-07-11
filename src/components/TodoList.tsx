import React from 'react';
import Store, { StoreProps } from '../store/Store';

class TodoListComponent extends React.Component<StoreProps> {
  handleComplete(index: number) {
    const store = this.props.store;
    const todos = store.get('todos');
    
    todos[index].complete = !todos[index].complete;

    store.set('todos')(todos);
  }

  render() {
    // Get todos from store
    const todos = this.props.store.get('todos');
    const allComplete = this.props.store.get('allComplete');

    return(
      <div>
        <ul className="todos">
          {todos.map((item, index) =>
            <li key={index} className={`todo ${item.complete ? 'complete' : ''}`}>
              {item.text}
              <input type="checkbox" onClick={() => this.handleComplete(index)}/>
            </li>
          )}
        </ul>
        {allComplete && <h2>All items completed!</h2>}
      </div>
    );
  }
}

// Connect to store
// - Automatically re-renders
// - Passes store to component as a prop
export default Store.withStore(TodoListComponent);