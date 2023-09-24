import {GET, POST} from "./api.js";


const getAll = async () => {
  return  await GET('api/blogs')
}

const createBlog = async (data) => {
  return await POST('api/blogs', data)
}

export default { getAll, createBlog }