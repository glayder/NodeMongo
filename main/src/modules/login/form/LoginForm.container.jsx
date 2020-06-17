import React, { PureComponent } from 'react';
import { func } from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';

import { login } from '../../../util/AuthService';
import * as alertActions from '../../../customComponents/alert/alert.action';

class LoginFormContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    const { setAlert, showAlert } = this.props;
    const { email, password } = this.state;
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      setAlert('O Login e/ou senha que você digitou estão incorretos', 'error');
      showAlert(true);
    }
  }

  handleDismiss() {
    const { showAlert } = this.props;
    showAlert(false);
  }

  render() {
    return (
      <LoginForm
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        onClose={this.handleDismiss}
      />
    );
  }
}

LoginFormContainer.propTypes = {
  showAlert: func.isRequired,
};

function mapStateToProps(state) {
  return {
    alert: state.alert,
  };
}

const mapDispatchToProps = dispatch => bindActionCreators(alertActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
