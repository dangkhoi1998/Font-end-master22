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
        icon: "dashboard",
        active: true,
        items:[
          { title:"Tổng quan ngành hàng", to:"/admin/nganh-hang/"},
          { title:"Chi tiết ngành hàng", to:"/admin/chi-tiet-nganh-hang/"},
          { title:"Category", to:"/admin/category/"}
        ],
      },
      {
        to: "/admin/quan-ly-tai-khoan/",
        text: "Quản lý tài khoản",
        icon: "mdi-image"
      },
      {
        to: "/admin/product",
        text: "Sản phẩm",
        icon: "mdi-asterisk",
        active: true,
        items:[
          { title:"Danh sách sản phẩm", to:"/admin/product/product"},
          { title:"Thêm mới SP", to:"/admin/product/from-product/"},
        ],
      },
      {
        to: "",
        text: "Settings",
        icon: "settings",
        active: false,
        items:[
          { title:"Nguồn hàng", to:"/admin/setting/source",},
          { title:"Nguồn 1", to:"",},
        ],
      },
      {
        to: "/admin/test",
        text: "test dữ liệu",
        icon: "mdi-image"
      },
    ]
  }),
  components: {
    CoreDrawer: () => import('../Drawer'),
  },
}
</script>
