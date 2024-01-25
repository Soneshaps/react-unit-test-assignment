import InputWrapper, { Types } from '../InputWrapper/InputWrapper';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-wallpaper"></div>
      <div className="login-main">
        <div className="login-wrapper">
          <div className="login-welcome">Welcome!</div>
          <div className="login-welcome-descriptions">
            <a href="#" className="signup-link">
              Create an account
            </a>
            <span> or login to get started using HRMS </span>
          </div>
          <div className="login-form">
            <InputWrapper classNames="ls-8" id="email" label="Email" name="email" type={Types.TEXT} />
            <InputWrapper classNames="ls-8" id="password" label="Password" name="password" type={Types.PASSWORD} />
            <div className="flex--justify-end">
              <a href="#" className="signup-link">
                Forgot password?
              </a>
            </div>
            <input type="button" className="login-button" value="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
