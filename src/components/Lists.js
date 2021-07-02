import { useState } from "react";

const Lists = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'https wwww', author: 'Mark', id: 1},
        { title: 'There is a party', body: 'Lorem ipsum ....', author: 'Kip', id: 2},
        { title: 'Let me give yo tips', body: 'https wwww', author: 'Mark', id: 3}
    ]);
    return(
        <div>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
export default Lists;