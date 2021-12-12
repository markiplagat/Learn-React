import React from 'react';

const BlogList = (props) => {
    // or use
//const Bloglist = ({blogs}) => {
    
    const blogs = props.blogs;
    // console.log(blogs)
    return(
        <div>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    )
}
export default BlogList;
