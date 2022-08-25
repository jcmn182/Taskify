//hooks
import { useState } from 'react';
//styles
import './App.css';
//components
import {InputFIeld, TodoList} from './components';
//models
import {Todo} from './utils/models/modelsTodo'


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [CompletedTodos, setCompletedTodos] = useState<Array<Todo>>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <div className="App">
     <span className="heading">Taskify</span>
     <InputFIeld todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
     <TodoList
          todos={todos}
          setTodos={setTodos}
          CompletedTodos={CompletedTodos}
          setCompletedTodos={setCompletedTodos}
        />
    </div>
  );
}

export default App;
