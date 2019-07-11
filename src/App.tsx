import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import Store from './store/Store';

const App: React.FC = () => {
  return (
    <Store.Container>
      <div className="app">
        <TodoList></TodoList>
        <AddTodoForm></AddTodoForm>
      </div>
    </Store.Container>
  );
}

export default App;
