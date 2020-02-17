<template>
  <div>
    <app-bar
    :links="links"
    :to="to">
      <template v-slot:formNganhNghe>
        <v-toolbar-title
          style="width: 300px"
          class="ml-0 pl-3"
        >
          <v-btn icon @click.stop="onClick">
            <v-icon size="30" color="white">apps</v-icon>
          </v-btn>
          <span class="hidden-sm-and-down">Admin</span>
        </v-toolbar-title>
        <span class="hidden-sm-and-down" style="
            color: #f26522;
            white-space: nowrap;
            text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
            text-align: left;
            font-weight: bold; font-size:28px">Phần mềm hỗ trợ bán hàng hiệu quả hàng đầu tại Việt Nam!</span>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon color="white">notifications</v-icon>
        </v-btn>
      </template>
    </app-bar>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import bar from '../AppBar'
export default {
  data: () => ({
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
    appBar:bar
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onClick () {
      this.setDrawer(!this.$store.state.app.drawer)
    },
  }
}
</script>
<style>
@media (max-width: 560px) {
  .img-repon{
    margin-top: 115px;
}
.text-logo{
  margin-top: 5px;
    color: #f26522;
    white-space: nowrap;
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
    text-align: left;
    font-weight: bold;
 }
}

</style>
