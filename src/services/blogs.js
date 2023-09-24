import {GET, PUT, POST} from "./api.js";


const getAll = async () => {
  return  await GET('api/blogs')
}

const createBlog = async (data) => {
  return await POST('api/blogs', data)
}

const modifyBlog = async (id, data) => {
  return await PUT('api/blogs/' + id, data)
}

export default { getAll, createBlog, modifyBlog }