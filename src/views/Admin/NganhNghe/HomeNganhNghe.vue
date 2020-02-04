<template>
  <v-container class="my-0 py-0">
    <router-view></router-view>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { text: 'Ngành hàng', icon: 'mdi-clock', to: '/admin/nganh-hang' },
          { text: 'Chi tiết ngành hàng', icon: 'mdi-account', to: '/admin/chi-tiet-nganh-hang' },
          { text: 'Conversions', icon: 'mdi-flag', to: '/admin/nganh-nghe2' },
        ],
      }
    },
    computed: {
      dialog () {
        return this.$store.state.dialog
      }
    },
    methods: {
      addItem () {
        this.$store.state.dialog = true
      }
    }
  }
</script>
