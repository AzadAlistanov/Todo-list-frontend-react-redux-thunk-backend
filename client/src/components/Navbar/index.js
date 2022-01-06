import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../store/action/auth';

export default function NavBar () {

	const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onSubmit = () => {
    dispatch(signOut());
  };

  return (
    <nav className="nav">
      {auth._id === null 
        ?
        <>
          <Link className='link' to="/signin">
            <button className='btn_nav'>
              Войти
            </button>
          </Link>

          <Link className='link' to="/signup">
            <button className='btn_nav'>
              Зарегистрироваться
            </button>
          </Link>
        </>
        :
        <Link className='link' to="/">
          <button onClick={() => onSubmit()} className='btn_nav btn_out'>
            Выйти
          </button>
        </Link>
      }
    </nav>
  );
};
