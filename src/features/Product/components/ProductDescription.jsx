import { Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const ProductDescription = ({ product }) => {
  const safeDesc = DOMPurify.sanitize(product?.description);

  return <div dangerouslySetInnerHTML={{ __html: safeDesc }}></div>;
};

ProductDescription.propTypes = {
  product: PropTypes.object,
};

export default ProductDescription;
