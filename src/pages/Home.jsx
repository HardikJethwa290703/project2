import React from 'react';
import "./style.css";
import { useLocation } from 'react-router-dom';
const Home = () => {
  const location = useLocation();
  if (location.state == null) {
    return (
      <div>
        <h1 id="page">Welcome to Shitij Blog</h1>
        <h2>No records avilable</h2>
      </div>
    )
  }
  else {
    const { blog } = location.state;
    return (
      <div>
        {blog.map((post, id) => (
          <div key={id} className="card mt-3" style={{width : 200}}>
            <img className="card-img-top" src={post.image} alt="Title" />
            <div className="card-body">
              <h4 className="card-title">{post.title}</h4>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Home
