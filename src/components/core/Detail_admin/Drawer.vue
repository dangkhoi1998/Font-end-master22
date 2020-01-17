<template>
  <div>
    <core-drawer :links="links" />
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        to: "/admin/nganh-hang/",
        text: "Ngành hàng",
      },
      {
        to: "/admin/quan-ly-tai-khoan/",
        text: "Quản lý tài khoản",
      },
    ]
  }),
  components: {
    CoreDrawer: () => import('../Drawer'),
  },
}
</script>
