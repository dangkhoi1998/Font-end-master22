<template>
  <v-content class="white" style="padding-top:64px;">
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
