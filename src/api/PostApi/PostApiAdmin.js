import request from '../../util/request'

export function Postcategory (item) {
  return request({
    url: 'http://192.168.1.250:18000/category',
    method: 'post',
    data: (item),
  })
}

export function Postregister (item) {
  return request({
    url: 'http://192.168.1.250:17000/register',
    method: 'post',
    data: (item),
  })
}

export function Postsource (item) {
  return request({
    url: 'http://192.168.1.250:18001/source',
    method: 'post',
    data: (item),
  })
}

export function PostImg (item, id) {
  console.log('test', item)
  console.log('ssssaaa', id)
  return request({
    url: 'http://192.168.1.250:18002/photo/uploads',
    method: 'post',
    headers: {
      'content-type': 'multipart/form-data',
      'content-type': 'Access-Control-Allow-Origi'
    },
    data: {
      files: `${item}`,
      id: `${id}`
    },
  })
}