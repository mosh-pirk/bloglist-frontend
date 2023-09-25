import {useState} from "react";
import blogs from "../services/blogs.js";
import user from "../services/user.js";

const Blog = ({ blog, emitNewBlog, emitDeleting}) => {
  const [showData, setShowData] = useState(false)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const handleLike = async () => {
    const blogCopy = {...blog}
    blogCopy.likes = blog.likes + 1
    delete blogCopy.user
    try {
      const addedBolg = await blogs.modifyBlog(blog.id, blogCopy)
      emitNewBlog(addedBolg)
    } catch (error) {
      console.log(error)
    }


  }

   const handleBlogDelete = async () => {
     if (window.confirm(`Remove blog ${blog.title} by ${blog.author}` )) {
       try {
         await blogs.deleteBlog(blog.id)
         emitDeleting(blog)
       } catch (error) {
         console.log(error)
       }

     }
  }

  return (<div style={blogStyle}>
    <div><span>{blog.title}</span> <button onClick={() => setShowData(!showData)}> {showData ? 'Hide' : 'View'}</button> </div>
    {
        showData && <div>
          <p><span>Url: </span><a href={blog.url}>{blog.url}</a></p>
          <p><span>Likes: </span><span>{blog.likes ?? 0}</span><button onClick={() => handleLike()} >Like</button></p>
          <p><span>Author: </span><span>{blog.author}</span></p>
          <p><span>Add By: </span><span>{blog?.user?.name}</span></p>
          <button onClick={() => handleBlogDelete()} >Remove</button>

        </div>
    }
  </div>)
}

export default Blog