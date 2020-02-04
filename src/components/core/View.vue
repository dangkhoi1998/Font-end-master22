<template>
  <v-content style="padding-top:90px; background: #f0f4f7">
    <div id="core-view" style="margin-bottom: 100px;">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </div>
  </v-content>
</template>

<script>
  export default {
    name: 'CoreView',

    metaInfo () {
      return {
        title: 'Vue Material Dashboard by CreativeTim'
      }
    }
  }
</script>
 <style>
  .container .lighten-3 {
    width: 100%!important;
  } 
</style>
