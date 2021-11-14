import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

DetailPage.propTypes = {};

function DetailPage(props) {
  const params = useParams();
  console.log('🚀 ~ file: ListPage.jsx ~ line 27 ~ ListPage ~ params', params);
  return <div>Detail Page</div>;
}

export default DetailPage;
