import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import NavBar from './components/Navbar';
import SignIn from './components/Navbar/SignIn';
import SignUp from './components/Navbar/SignUp';
import { loadUser } from './store/action/auth'

export default function App() {

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  
  useEffect(() => {
    if (auth._id !== null) navigate('/todos', { replace: false });
  }, [auth, navigate]);
  

  return (
    <>
      <div className="container">
      <NavBar />
        <Routes>
          <Route path='/'>
            <Route path='signin' element={<SignIn/>} />
            <Route path='signup' element={<SignUp/>} />
          </Route>  
          <Route exact path='/todos' element={
            <>
              <AddTodoForm />
              <TodoList />
            </>
          }></Route>
        </Routes>
      </div>
    </>

  );
}
