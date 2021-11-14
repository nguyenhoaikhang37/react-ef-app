import { IconButton, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close } from '@material-ui/icons';
import CodeIcon from '@material-ui/icons/Code';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  activeLink: {
    color: 'goldenrod',
  },
  closeBtn: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 1,
  },
}));

const MODE = {
  REGISTER: 'register',
  LOGIN: 'login',
};

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton}></CodeIcon>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              NHK Shop
            </Link>
          </Typography>
          <NavLink activeClassName={classes.activeLink} className={classes.link} to="/todos">
            <Button color="inherit">Todos</Button>
          </NavLink>
          <NavLink activeClassName={classes.activeLink} className={classes.link} to="/counter">
            <Button color="inherit">Counter</Button>
          </NavLink>

          <Button color="inherit" onClick={handleClickOpen}>
            Register
          </Button>

          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <IconButton>
          <Close className={classes.closeBtn} onClick={handleClose}></Close>
        </IconButton>
        <DialogContent>
          <Register />
        </DialogContent>
      </Dialog>
    </div>
  );
}
