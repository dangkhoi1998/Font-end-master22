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
