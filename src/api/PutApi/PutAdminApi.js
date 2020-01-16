import request from '../../util/request'

export function Putcategory (item) {
  return request({
    url: `category/${item.id}`,
    method: 'put',
    data: (item),
  })
}
