import request from '../../util/request'

export function Deletecategory (father, children) {
  return request({
    url: `http://192.168.1.250:18000/category/${father}/${children}`,
    method: 'delete',
  })
}

export function Deleteregister (item) {
  return request({
    url: `http://192.168.1.250:17000/register/${item._id}`,
    method: 'delete',
  })
}

export function Deletesource (item) {
  return request({
    url: `http://192.168.1.250:18001/source/${item.id}`,
    method: 'delete',
  })
}