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
        icon: "mdi-view-dashboard",
        text: "Ngành nghề",
      },
      {
        to: "/admin/Cai-dat/",
        icon: "mdi-format-font",
        text: "Setting",
      }
    ]
  }),
  components: {
    CoreDrawer: () => import('../Drawer'),
  },
}
</script>
