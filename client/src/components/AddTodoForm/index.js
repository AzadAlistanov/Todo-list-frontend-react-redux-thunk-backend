import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/action/todos';

export default function Form() {

  const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = async (event) => {
		event.preventDefault();
		if (value) {
      dispatch(addTodo(value));
      setValue('')
		}
	};

  return (
    <form onSubmit={onSubmit} className='todo_form'>
      <input type='text' value={value} onChange={(event) => setValue(event.target.value)} className='todo_form_input'/>
      <button type='submit' className='todo_form_btn'>Сохранить</button>
    </form>
  );
}
