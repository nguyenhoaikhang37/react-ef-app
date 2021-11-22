import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants';
import { GlassMagnifier } from 'react-image-magnifiers';

const useStyles = makeStyles((theme) => ({
  smallImage: {
    paddingTop: theme.spacing(1),
    borderRadius: '4px',
  },
  active: {
    borderColor: theme.palette.primary.main,
    marginTop: theme.spacing(1),
  },
}));

const ProductThumbnail = ({ product = {} }) => {
  const classes = useStyles();

  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;

  const handleClickImg = (e) => {
    const elementImg = e.target;
    if (elementImg.classList.contains('active')) {
      elementImg.classList.remove('active');
    } else {
      elementImg.classList.add('active');
    }
  };

  return (
    <Box>
      <GlassMagnifier
        imageSrc={thumbnailUrl}
        imageAlt="Example"
        largeImageSrc={thumbnailUrl}
        magnifierSize="45%"
        borderSize={5}
        square
      />
      <Box className={classes.smallImage && classes.active} onClick={handleClickImg}>
        <img src={thumbnailUrl} alt={product.name} width="20%" style={{ objectFit: 'cover' }} />
      </Box>
    </Box>
  );
};

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

export default ProductThumbnail;
