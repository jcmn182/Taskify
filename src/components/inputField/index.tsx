import React from 'react'
import  './index.css'
interface props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
}

const inputFIeld:React.FC<props> = ({todo,setTodo}) => {
  return (
    <form className="input">
      <input type="input" value={todo} onChange={(e)=>setTodo(e.target.value)}placeholder="enter task" className="input__box"/>
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  )
}

export default inputFIeld