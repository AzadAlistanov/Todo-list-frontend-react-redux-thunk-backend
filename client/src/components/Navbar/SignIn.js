import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/action/auth';

export default function SignIn() {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });

	const dispatch = useDispatch();

  const onSubmit = async (event) => {
  	event.preventDefault();
    
    dispatch(signIn(value.email, value.password));
    setValue({email: '', password: ''});
  };

  return (
    <form onSubmit={onSubmit} className='auth__form'>
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
      <button type='submit' className='auth_btn'>Войти</button>
    </form>
  );
}
