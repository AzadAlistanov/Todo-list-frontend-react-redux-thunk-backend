import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Todo from '../Todo';
import { getTodos } from '../../store/action/todos';

export default function TodoList() {
	const dispatch = useDispatch();
  
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (todos.length === 0) {
    return <div className="no_tasks">Нет задач</div>
  }


	return (
    <div className="">
      {
        todos.map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))
      }
    </div>
  );
};

