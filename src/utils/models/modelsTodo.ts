export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
  }
  
  export interface TodoList {
    index: number;
    todo: Todo;
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  }