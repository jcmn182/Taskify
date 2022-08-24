//hooks
import { useState } from 'react';
//styles
import './App.css';
//components
import {InputFIeld} from './components';


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  console.log(todo)
  return (
    <div className="App">
     <span className="heading">Taskify</span>
     <InputFIeld todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
