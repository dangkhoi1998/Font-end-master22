import Vue from 'vue'
import Router from 'vue-router'
import DetailLogin from '../Login/Detail_Login'
import detailAdmin from '@/views/Detail_Admin'
import FormDangky from '../Login/Form_dangky'
import HomeNganhNghe from '@/views/Admin/NganhNghe/HomeNganhNghe'
import detailNganhNge from '@/views/Admin/NganhNghe/DetailNganhNghe'

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
        { path: 'nganh-nghe',
          names: 'Bản tin', 
          component: detailNganhNge,
          children: [
            { path: '', name: 'Cơ hội', component: HomeNganhNghe },
          ],
        },
      ]
    }      
  ],
})
