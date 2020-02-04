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
        items:[
          { title:"Chi tiết mặt hàng", to:"/admin/nganh-hang/",},
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
        items:[
          { title:"Tìm kiếm sản phẩm", to:"",},
          { title:"Danh sách sản phẩm", to:"/admin/san-pham",}
        ],
      },
      {
        to: "",
        text: "Settings",
        icon: "settings",
        items:[
          { title:"Nguồn hàng", to:"/admin/setting/source",},
        ],
      },
    ]
  }),
  components: {
    CoreDrawer: () => import('../Drawer'),
  },
}
</script>
