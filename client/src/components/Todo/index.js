import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, editTodo } from '../../store/action/todos';

export default function Todo({ todo }) {

  const [edit, setEdit] = useState(true)
  const [value, setValue] = useState(todo.title);

  const dispatch = useDispatch();

  const onEditTodo = async (id, title, todo) => {
    setEdit(!edit);
    dispatch(editTodo(id, title, todo));
  }
  const onChange = (event) => {
    setValue(event.target.value);
  }
  
  return (
    <div className="todo__item">
      <input onClick={() => dispatch(toggleTodo(todo._id))}
        className='todo-check'
        type="checkbox"
        defaultChecked={todo.complete} 
      />
      {edit 
        ? <div className={!todo.complete ? 'todo-title' : 'cross-out'}>{todo.title}</div>
        : <input className='todo_edit_value' type='text' onChange={onChange} value={value} />
      }
      
      <div className='todo-button'>
        <div onClick={() => onEditTodo(todo._id, value, todo)}className='todo_inner-edit'>
        {edit 
          ? <img className='todo-edit' src={'image/edit.png'} />
          : <img className='todo-edit' src={'image/save.png'} />
        }
        </div>
        <div onClick={() => dispatch(deleteTodo(todo._id))} className='todo_inner-delete'>
          <img className='todo-delete' src={'image/delete.png'} />
        </div>
      </div>
    </div>
  );
}
