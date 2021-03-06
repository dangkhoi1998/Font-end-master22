import Vue from 'vue'
import Router from 'vue-router'
import DetailLogin from '../Login/Detail_Login'
import detailAdmin from '@/views/Detail_Admin'
import FormDangky from '../Login/Form_dangky'
import HomeNganhNghe from '@/views/Admin/Category/HomeNganhNghe'
import Tong_quan_nganh_hang from '../components/Admin/Category/Tong_quan_nganh_hang'
import ChitietNN from '../components/Admin/Category/Chi_tiet_nganh_hang'
import QLTK from '../views/Admin/Quanlytaikhoan/Home-QL-tai-khoan'
import Product from '../views/Admin/Product/DetailProduct'
import ListProduct from '../views/Admin/Product/ListProduct'
import Settings from '../views/Admin/Settings/DetailSetting'
import Source from '../components/Admin/Settings/Source'
import test from '../components/Admin/test'
import Category from '../components/Admin/Category/Home_category'
import formProduct from '../views/Admin/Product/Form_product'
 
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
              component: Tong_quan_nganh_hang,
             },
            {
              path: 'chi-tiet-nganh-hang',
              name: 'ChitietNN',
              component: ChitietNN,
            },
            {
              path: 'category',
              name: 'Category',
              component: Category,
            }
          ]
        },
        { path: 'quan-ly-tai-khoan',
          name: 'QLTK', 
          component: QLTK,
        },
        { path: 'product',
          name: 'Product', 
          component: Product,
          children: [
            { path: 'product', name: 'ListProduct', component: ListProduct },
            { path: 'from-product', name: 'formProduct', component: formProduct }
          ]
        },
        { path: 'setting',
          name: 'Settings', 
          component: Settings,
          children: [
            { path: 'source', name: 'Source', component: Source }
          ]
        },
        { path: 'test',
          name: 'test', 
          component: test,
        },
      ]
    }      
  ],
})
