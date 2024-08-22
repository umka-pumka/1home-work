import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
    const [posts, setPosts] = useState([]); 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div>
            <h2>Page 2</h2>
            <Link to="/">go back</Link>
            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h3>
                            <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page2;