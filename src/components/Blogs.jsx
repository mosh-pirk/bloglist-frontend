import {useEffect, useRef, useState} from "react";
import blogService from "../services/blogs.js";
import {clearAllLocalStorage, getFromLocalStorage} from "../utils/methods.js";
import Blog from "./Blog.jsx";
import BlogForm from "./BlogForm.jsx";
import Notification from "./Notification.jsx";
import '../css/notification.css'
import Togglable from "./Togglable.jsx";

const Blogs = ({user, emitUserChanges}) => {
    const [blogs, setBlogs] = useState([])
    const [message, setMessage] = useState(null)
    const noteFormRef = useRef()

    const handleBlogAfterAdding = (blog) => {
        fetchBlogs()
        showMessage(`A new blog ${blog.title} by ${blog.author} added`, 'blog' )
        noteFormRef.current.toggleVisibility()
    }
    const fetchBlogs = async () => {
        try {
            const blogs = await blogService.getAll();
            setBlogs(blogs);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    }
    useEffect(() => {
        getFromLocalStorage('USER') && fetchBlogs();
    }, [user]);

    const logout = () => {
        clearAllLocalStorage();
        emitUserChanges(null)
    }

    const showMessage = (str, style) => {
        setMessage({note: str, style: style})
        setTimeout(() => {
            setMessage(null);
        }, 5000);
    }


    return <>
        <h2>blogs</h2>
        {message ? <Notification message={message.note} style={message.style}/> : <></>}
        <Togglable buttonLabel='Add Blog' ref={noteFormRef}>
            <BlogForm emitChanges={(data) => handleBlogAfterAdding(data)}/>
        </Togglable>

        <p>{`${user.name} logged in`} <button onClick={() => logout()}>Log out</button></p>
        {blogs.map(blog => <Blog key={blog.id} blog={blog}/>)}</>;
}

export default Blogs;