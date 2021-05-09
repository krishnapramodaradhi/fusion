import classes from './Login.module.css';
import Card from '../components/UI/Card';
import { useDispatch } from 'react-redux';
import { login } from '../store/login';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(null);

  const loginHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email !== 'test@test.com' && password !== 'password') {
      setError('Username or password is incorrect');
      return;
    }
    dispatch(login());
    history.push('/user');
  };

  return (
    <section className={classes.login}>
      <Card>
        {error && <p className={classes.error}>{error}</p>}
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input id="email" autoComplete="off" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="off"
              ref={passwordRef}
            />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </Card>
    </section>
  );
};

export default Login;
