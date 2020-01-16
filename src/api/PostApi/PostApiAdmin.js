import request from '../../util/request'

export function Postcategory (item) {
  return request({
    url: 'category',
    method: 'post',
    data: (item),
  })
}
