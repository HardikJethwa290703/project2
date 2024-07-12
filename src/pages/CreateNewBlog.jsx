import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateNewBlog = () => {
    // 1st situation --> Solution
    // const [title, setTitle] = useState('');
    // const [image, setImagePath] = useState('');
    // const [content, setContent] = useState('');

    // 2nd situation --> solution    
    const [blogDetails, setBlogDetails] = useState({ title: '', image: '', content: '' });
    const [blog, setBlog] = useState([]);

    const navigate = useNavigate();
    const handleData = (e) => {        
        setBlog([...blog, blogDetails]);
        navigate('/', { state: {blog} });
    }
    return (
        <div>
            <h1 id="page">Welcome to Shitij Blog</h1>
            <div className='container border p-2 w-50' style={{ marginTop: 70, alignContent: 'center' }}>
                <div
                    className="row"
                >
                    <h1 className="text-primary">Create a new blog post</h1>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            placeholder=""
                            onChange={(e) => setBlogDetails({ ...blogDetails, title: e.target.value })}
                        />
                        <label for="titlecontent">Title</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            name="image"
                            id="image"
                            placeholder=""
                            onChange={(e) => setBlogDetails({ ...blogDetails, image: e.target.value })}
                        />
                        <label for="image">Provide image path</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="content"
                            id="content"
                            placeholder=""
                            onChange={(e) => setBlogDetails({ ...blogDetails, content: e.target.value })}
                        />
                        <label for="content">Content</label>
                    </div>
                    <button onClick={handleData} className="btn btn-primary">Post Blog</button>
                </div>
            </div>
            {blog.map((show,id)=>(
                <li>
                    Name: {show.name}, Salary: {show.salary}
                </li>
            ))}
        </div>
    )
}

export default CreateNewBlog
