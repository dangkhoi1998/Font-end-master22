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
          { title:"Tổng quan mặt hàng", to:"/admin/nganh-hang/",},
          { title:"Mặt hàng", to:"/admin/chi-tiet-nganh-hang/",}
        ],
      },
      {
        to: "/admin/quan-ly-tai-khoan/",
        text: "Quản lý tài khoản",
        icon: "mdi-image"
      },
      {
        to: "/admin/san-pham",
        text: "Sản phẩm",
        icon: "mdi-asterisk",
        active: true,
        items:[
          { title:"Tìm kiếm sản phẩm", to:"",},
          { title:"Danh sách sản phẩm", to:"/admin/san-pham",}
        ],
      },
      {
        to: "",
        text: "Settings",
        icon: "settings",
        active: true,
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
