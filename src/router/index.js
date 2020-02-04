import Vue from 'vue'
import Router from 'vue-router'
import DetailLogin from '../Login/Detail_Login'
import detailAdmin from '@/views/Detail_Admin'
import FormDangky from '../Login/Form_dangky'
import HomeNganhNghe from '@/views/Admin/NganhNghe/HomeNganhNghe'
import NghanhNghe from '../components/Admin/Table/NganhNghe'
import ChitietNN from '../components/Admin/Table/ChiTietNganhHang'
import QLTK from '../views/Admin/Quanlytaikhoan/Home-QL-tai-khoan'
import Product from '../views/Admin/Product/DetailProduct'
import ListProduct from '../views/Admin/Product/ListProduct'
import Settings from '../views/Admin/Settings/DetailSetting'
import Source from '../components/Admin/Settings/Source'
 
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'login' } },
    { path: '/login/', 
      name: 'login', 
      component: DetailLogin,
      children: [
        { path: 'dang-ky', name: 'Đăng ký', component: FormDangky}
      ],
    },
    {
      path: '/admin/',
      name: 'detailAdmin',
      component: detailAdmin,
      children: [
        { path: '/',
          name: 'Ngành nghề', 
          component: HomeNganhNghe,
          children: [
            {
              path: 'nganh-hang',
              name: 'Nghành nghề',
              component: NghanhNghe,
             },
            {
              path: 'chi-tiet-nganh-hang',
              name: 'ChitietNN',
              component: ChitietNN,
            }
          ]
        },
        { path: 'quan-ly-tai-khoan',
          name: 'QLTK', 
          component: QLTK,
        },
        { path: 'san-pham',
          name: 'Product', 
          component: Product,
          children: [
            { path: '/', name: 'ListProduct', component: ListProduct }
          ]
        },
        { path: 'setting',
          name: 'Settings', 
          component: Settings,
          children: [
            { path: 'source', name: 'Source', component: Source }
          ]
        },
      ]
    }      
  ],
})
