

import React, { PureComponent } from 'react';
import {
  bool,
  func,
  object,
  node,
  string,
} from 'prop-types';

import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import './modalForm.css';

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    position: 'absolute',
    width: theme.spacing.unit * 50,
  },
});

class ModalForm extends PureComponent {
  render() {
    const {
      classes, title, description, handleClose, open, children,
    } = this.props;
    return (
      <Modal
        open={open}
        onClose={handleClose}
        className="modalForm"
      >
        <div className={`modalForm-content ${classes.paper}`}>
          {title && (
            <Typography id="modalForm-title">
              {title}
            </Typography>
          )}
          {description && (
            <Typography id="simple-modal-description">
              {description}
            </Typography>
          )}
          <SimpleModalWrapped />
          <footer>
            {children}
          </footer>
        </div>
      </Modal>
    );
  }
}

ModalForm.propTypes = {
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types

  children: node,
  description: string,
  handleClose: func,
  open: bool,
  title: string,
};

ModalForm.defaultProps = {
  children: undefined,
  description: '',
  handleClose: undefined,
  open: false,
  title: '',
};

const SimpleModalWrapped = withStyles(styles)(ModalForm);

export default SimpleModalWrapped;
