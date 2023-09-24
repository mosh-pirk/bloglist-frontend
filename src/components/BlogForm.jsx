import React, {useEffect, useState} from "react";
import blogs from "../services/blogs.js";


const initDataForm = {
    title: "",
    author: "",
    url: "",
}
function BlogForm(props) {
    const [formData, setFormData] = useState(initDataForm);

    useEffect(() => setFormData(initDataForm), [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       const addedBolg = await blogs.createBlog(formData)
        setFormData(initDataForm)
        props.emitChanges(addedBolg)
    };

    return (
        <div>
            <h2>Create a Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="url">URL:</label>
                    <input
                        type="text"
                        id="url"
                        name="url"
                        value={formData.url}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default BlogForm;
