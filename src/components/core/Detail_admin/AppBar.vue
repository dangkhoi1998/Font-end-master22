<template>
  <div>
    <core-app-bar
    :getNotificationsApi="getworkApi"
    :links="links"
    :to="to" />
  </div>
</template>

<script>
import { getworkApi } from '../../../api/GetApi/getApiAdmin'
export default {
  data: () => ({
    getworkApi,
    to: {
      to1: '/admin/ban-tin',
      to2: '/admin/thong-bao'
    },
    links: [
      {
        to: "/login",
        icon: "mdi-logout",
        text: "Đăng xuất"
      },
      {
        to: "/admin/them-cong-viec",
        icon: "mdi-account-multiple-check",
        text: "Thêm công việc"
      },
    ],
  }),
  components: {
    CoreAppBar: () => import('../AppBar'),
  },
}
</script>
