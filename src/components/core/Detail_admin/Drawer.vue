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
        to: "/admin/nganh-nghe/",
        text: "Ngành hàng",
      },
      {
        to: "/admin/cai-dat/",
        text: "Danh mục các mặt hàng",
      },
    ]
  }),
  components: {
    CoreDrawer: () => import('../Drawer'),
  },
}
</script>
