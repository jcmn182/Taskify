//hooks
import {useRef} from 'react';
//styles and styles tools
import  './index.css'

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFIeld:React.FC<props> = ({todo,setTodo,handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="input"
    onSubmit={(e) => {
      handleAdd(e);
      inputRef.current?.blur();
    }}
    >
      <input type="input" value={todo} onChange={(e)=>setTodo(e.target.value)}placeholder="enter task" className="input__box"/>
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  )
}

export default InputFIeld