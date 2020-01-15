<template>
    <div id="app">
        <router-view  @authenticated="setAuthenticated" />
    </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      authenticated: true,
      mockAccount: []
    }
  },
  mounted () {
    if (!this.authenticated) {
      this.$router.replace({ name: 'login' })
    }
  },
  methods: {
    setAuthenticated (status) {
      this.authenticated = status
    },
    logout () {
      this.authenticated = false
    },
  },
}
</script>

<style> 
  @import "styles/loading.scss";
  v-menu .v-text-field {
   background: red!important;
 }
 body {
   font-size: 14px;
 }
</style>
