import axios from 'axios'

const API_PREFIX = 'https://cnodejs.org/api/v1'

const getTopics = async function ({ page, tab, limit, mdrender }) {
  try {
    const response = await axios.get(API_PREFIX + '/topics', {
      params: { page, tab, limit, mdrender }
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

const getTopicById = async function ({ id, mdrender, accesstoken }) {
  try {
    const response = await axios.get(API_PREFIX + `/topic/${id}`, {
      params: { mdrender, accesstoken }
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

const checkToken = async (accesstoken) => {
  try {
    const response = await axios.post(API_PREFIX + `/accesstoken`, { accesstoken })
    return response
  } catch (error) {
    console.log(error)
  }
}

const getUser = async (loginname) => {
  try {
    const response = await axios.get(`${API_PREFIX}/user/${loginname}`)
    return response
  } catch (error) {
    console.log(error)
  }
}

export { getTopics, getTopicById, checkToken, getUser }
