import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React from 'react';
import InputField from '../../../components/FormFields/InputField';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    textAlign: 'center',
    margin: theme.spacing(2, 0, 3, 0),
  },
  submit: {
    margin: theme.spacing(2, 0, 3),
  },
  progress: {
    position: 'absolute',
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));

LoginForm.propTypes = {};

function LoginForm(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* {isSubmitting && <LinearProgress className={classes.progress} />} */}
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Sign In
      </Typography>
      <form>
        {/* <InputField name="identifier" label="Email"></InputField> */}

        <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth size="large">
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
