import React, { PureComponent } from 'react';
import { func } from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Alert from '../../../customComponents/alert/Alert';

class LoginForm extends PureComponent {
  hasToRenderAlert() {
    const { onClose } = this.props;
    return <Alert onClose={onClose} />;
  }

  render() {
    const { onChange, onSubmit } = this.props;
    return (
      <div className="loginScreen">
        <form className="loginForm" onSubmit={onSubmit}>
          <span className="loginForm-Title">Login</span>
          {this.hasToRenderAlert()}
          <TextField
            className="loginForm-input"
            name="email"
            type="text"
            onChange={onChange}
            placeholder="Digite seu login"
          />
          <TextField
            className="loginForm-input"
            name="password"
            onChange={onChange}
            placeholder="Digite sua senha"
            type="password"
          />
          <div className="loginForm-footer">
            <Button className="bntPrimary loginForm-login" type="submit">
              Login
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onClose: func.isRequired,
  onChange: func.isRequired,
  onSubmit: func.isRequired,
};

export default LoginForm;
