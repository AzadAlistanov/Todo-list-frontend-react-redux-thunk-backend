import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/action/auth';

export default function SignUp() {

  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '', 
  });

	const dispatch = useDispatch();

  const onSubmit = async (event) => {
  	event.preventDefault();
    const newUser = {
      name: value.name,
      email: value.email,
      password: value.password, 
    }
  	if (newUser.name) {
      dispatch(signUp(newUser));
      setValue({
        name: '',
        email: '',
        password: '', 
      })
  	}
  };
  
  return (
    <form onSubmit={onSubmit} className='auth__form'>
      <input 
        value={value.name}
        onChange={(event) => setValue({ ...value, name: event.target.value })}
        type='text'
        className="auth_input"
        placeholder='name'/>
      <input 
        value={value.email}
        onChange={(event) => setValue({ ...value, email: event.target.value })}
        type='text'
        className='auth_input'
        placeholder='email'/>
      <input 
        value={value.password}
        onChange={(event) => setValue({ ...value, password: event.target.value })}
        type='text'
        className='auth_input'
        placeholder='password'/>
      <button type='submit' className="auth_btn">Зарегистрироваться</button>
    </form>
  );
}
