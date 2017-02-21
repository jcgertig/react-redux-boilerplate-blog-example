import { PropTypes } from 'react';

const posts = PropTypes.shape({
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
});

export default posts;
