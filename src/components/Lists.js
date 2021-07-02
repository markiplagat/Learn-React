import { useState } from "react";
import BlogList from "./BlogList";

const Lists = (props) => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'https wwww', author: 'Mark', id: 1},
        { title: 'There is a party', body: 'Lorem ipsum ....', author: 'Kip', id: 2},
        { title: 'Let me give yo tips', body: 'https wwww', author: 'Mark', id: 3}
    ]);
    return(
        <div>
            <BlogList blogs={blogs}/>
        </div>
    );
}
export default Lists;
