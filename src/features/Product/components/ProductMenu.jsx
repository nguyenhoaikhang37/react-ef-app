import { Box, Link, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { NavLink, useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: 0,
    listStyle: 'none',

    '& > li': {
      padding: theme.spacing(2, 4),
    },

    '& > li > a': {
      color: theme.palette.grey[700],
    },

    '& > li > a.active': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
      fontWeight: 'bold',
    },
  },
}));

const ProductMenu = (props) => {
  const classes = useStyles();
  const { url } = useRouteMatch();
  return (
    <Box component="ul" className={classes.root}>
      <li>
        <Link component={NavLink} to={url} exact>
          Description
        </Link>
      </li>

      <li>
        <Link component={NavLink} to={`${url}/additional`} exact>
          Additional Information
        </Link>
      </li>

      <li>
        <Link component={NavLink} to={`${url}/reviews`} exact>
          Reviews
        </Link>
      </li>
    </Box>
  );
};

ProductMenu.propTypes = {};

export default ProductMenu;
