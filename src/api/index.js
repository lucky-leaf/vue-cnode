import axios from 'axios'

const API_PREFIX = 'https://cnodejs.org/api/v1'

const getTopics = async function ({ page, tab, limit, mdrender }) {
  try {
    const response = await axios.get(API_PREFIX + '/topics', {
      params: {
        page,
        tab,
        limit,
        mdrender
      }
    })
    return response
  } catch (error) {
    console.error(error)
  }
}

export { getTopics }
