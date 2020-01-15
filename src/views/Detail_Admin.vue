<template>
  <v-app>
    <core-app-bar />

    <core-drawer />

    <core-view />

    <core-footer />
  </v-app>
</template>

<script>
  export default {
    components: {
      CoreDrawer: () => import('@/components/core/Detail_admin/Drawer'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreAppBar: () => import('@/components/core/Detail_admin/AppBar'),
      CoreView: () => import('@/components/core/View'),
    },
  }
</script>
<style>
  .container{
    width: 100%!important;
  }
</style>
