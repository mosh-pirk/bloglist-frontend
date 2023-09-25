import {GET, PUT, POST, DELETE} from "./api.js";


const getAll = async () => {
  return  await GET('api/blogs')
}

const createBlog = async (data) => {
  return await POST('api/blogs', data)
}

const modifyBlog = async (id, data) => {
  return await PUT('api/blogs/' + id, data)
}

const deleteBlog = async (id) => {
  return await DELETE('api/blogs/' + id)
}

export default { getAll, createBlog, modifyBlog, deleteBlog }