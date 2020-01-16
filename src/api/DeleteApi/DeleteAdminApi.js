import request from '../../util/request'

export function Deletecategory (item) {
  return request({
    url: `category/${item.id}`,
    method: 'delete',
  })
}
