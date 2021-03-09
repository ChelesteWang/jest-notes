import axios from 'axios'

export const runCallback = (callback) => {
  callback('abc')
}

export const createObject = (classItem) => {
  new classItem()
}

export const getData = async () => {
  const res = await axios.get('/api')
  return res.data
}