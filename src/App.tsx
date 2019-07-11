import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import Store from './store/Store';

export default class App extends React.Component {
  render() {
    // Wrap whole application in an a container
    // - Same store instance will be provided to each connected component
    return(
      <Store.Container>
        <div className="app">
          <TodoList></TodoList>
          <AddTodoForm></AddTodoForm>
        </div>
      </Store.Container>
    );
  }
}
