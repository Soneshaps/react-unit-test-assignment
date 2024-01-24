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
            <span className="signup-link">Create an account</span> or login to get started using HRMS
          </div>
          <div className="login-form">
            <InputWrapper classNames="ls-8" id="email" label="Email" name="email" type={Types.TEXT} />
            <InputWrapper classNames="ls-8" id="password" label="Password" name="password" type={Types.PASSWORD} />
            <div className="flex--justify-end">
              <span className="signup-link">Forgot password?</span>
            </div>
            <div className="login-button">Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
