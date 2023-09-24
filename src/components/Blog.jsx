import {useState} from "react";

const Blog = ({ blog }) => {
  const [showData, setShowData] = useState(false)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  return (<div style={blogStyle}>
    <div><span>{blog.title}</span> <button onClick={() => setShowData(!showData)}> {showData ? 'Hide' : 'View'}</button> </div>
    {
        showData && <div>
          <p><span>Url: </span><a href={blog.url}>{blog.url}</a></p>
          <p><span>Likes: </span><span>{blog.likes ?? 0}</span></p>
          <p><span>Author: </span><span>{blog.author}</span></p>
          <p><span>Add By: </span><span>{blog?.user?.name}</span></p>
        </div>
    }
  </div>)
}

export default Blog