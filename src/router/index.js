import Vue from 'vue'
import Router from 'vue-router'
import DetailLogin from '../Login/Detail_Login'
import detailAdmin from '@/views/Detail_Admin'
import FormDangky from '../Login/Form_dangky'
import HomeNganhNghe from '@/views/Admin/NganhNghe/HomeNganhNghe'
import NghanhNghe from '../components/Admin/Table/NganhNghe'
import Homecaidat from '@/views/Admin/NganhNghe/HomeCaiDat'

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
              path: 'nganh-nghe',
              name: 'Nghành nghề',
              component: NghanhNghe,
            }
          ]
        },
        { path: 'cai-dat',
          name: 'Cài đặt', 
          component: Homecaidat,
        },
      ]
    }      
  ],
})
