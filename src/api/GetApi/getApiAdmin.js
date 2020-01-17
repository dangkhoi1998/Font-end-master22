import request from '../../util/request'

export function getcategory () {
  return request({
    url: 'category',
    method: 'get',
  })
}

export function getregister () {
  return request({
    url: 'register',
    method: 'get',
  })
}
