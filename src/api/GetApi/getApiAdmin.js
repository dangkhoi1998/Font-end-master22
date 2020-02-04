import request from '../../util/request'

export function getcategory () {
  return request({
    url: 'http://192.168.1.250:18000/category',
    method: 'get',
  })
}

export function getsource () {
  return request({
    url: 'http://192.168.1.250:18001/source',
    method: 'get',
  })
}

export function getregister () {
  return request({
    url: 'http://192.168.1.250:17000/register',
    method: 'get',
  })
}

export function getproduct () {
  return request({
    url: 'http://192.168.1.250:18002/product',
    method: 'get',
  })
}
