import React from 'react';
import PropTypes from 'prop-types';

const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};
BlogList.propTypes = {
  blogs: PropTypes.array.isRequired,
};
export default BlogList;
