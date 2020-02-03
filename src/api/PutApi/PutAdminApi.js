//import request from '../../util/request'

export function Putcategory (item) {
  return request({
    url: `category/${item.id}`,
    method: 'put',
    data: (item),
  })
}

export function Putregister (item) {
  return request({
    url: `http://192.168.1.250:17000/register/${item._id}`,
    method: 'put',
    data: (item)
  })
}