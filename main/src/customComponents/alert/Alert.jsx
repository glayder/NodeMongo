import React, { PureComponent } from 'react';
import {
  func,
  object,
  node,
  oneOf,
} from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import green from '@material-ui/core/colors/green';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';

import * as alertActions from './alert.action';

const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon,
};

const styles1 = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

function MySnackbarContent(props) {
  const {
    classes,
    message,
    onClose,
    variant,
    ...other
  } = props;

  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant])}
      aria-describedby="client-snackbar"
      message={(
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      )}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
  message: node.isRequired,
  onClose: func.isRequired,
  variant: oneOf(['success', 'error']).isRequired,
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

class Alert extends PureComponent {
  render() {
    const {
      onClose,
      alert: { open, message, alertType },
    } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
      >
        <MySnackbarContentWrapper
          onClose={onClose}
          variant={alertType}
          message={message}
        />
      </Snackbar>
    );
  }
}

Alert.propTypes = {
  alert: object.isRequired, // eslint-disable-line react/forbid-prop-types
  onClose: func.isRequired,
};

Alert.defaultProps = {
  open: false,
  message: '',
  type: '',
};

function mapStateToProps(state) {
  return {
    alert: state.alert,
  };
}

const mapDispatchToProps = dispatch => bindActionCreators(alertActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
