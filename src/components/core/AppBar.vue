<template>
  <div>
    <v-app-bar id="core-app-bar" :clipped-left="$vuetify.breakpoint.lgAndUp" app class="back-img" flat height="90" >
      <slot name="formEmployees" :item="item"></slot>
      <slot name="formNganhNghe" :item="itemss"></slot>
    </v-app-bar>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data: () => ({
      singleLine: true,
      title: null,
      responsive: false,
      item:{},
      itemss:{}
    }),
    
    // props: {
    //   links: {
    //     require: true,
    //     type: [ Object, Array ]
    //   },
    //   to: {
    //     require: true,
    //     type: [ Object, Array ]
    //   }
    // },

    // watch: {
    //   '$route' (val) {
    //     this.title = val.name
    //   },
    // },
    // computed: {
    //   authenticated () {
    //     return this.$store.state.authenticated
    //   },
    //   classObject () {
    //     if (this.notifications.length > 1) {
    //       return {
    //         heartBeat: 'heartBeat',
    //         delay1s: 'delay-1s',
    //         display: 'display: none'
    //       }
    //     } else {
    //       return {
    //       }
    //     }
    //   },
    // },
    // mounted () {
    //   this.onResponsiveInverted()
    //   window.addEventListener('resize', this.onResponsiveInverted)
    // },
    // beforeDestroy () {
    //   window.removeEventListener('resize', this.onResponsiveInverted)
    // },
    // created () {
    //   this.getNotifications()
    // },
    // methods: {
    //   getNotifications () {
    //     this.getNotificationsApi()
    //     .then(response => {
    //       for (const i in response.data) {
    //         this.notifications.push(response.data[i]['work_name'])
    //       }
    //     })
    //   },
    //   ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    //   onClick () {
    //     this.setDrawer(!this.$store.state.app.drawer)
    //   },
    //   onResponsiveInverted () {
    //     if (window.innerWidth < 991) {
    //       this.responsive = true
    //     } else {
    //       this.responsive = false
    //     }
    //   },
    // },
  }
</script>

<style>
  /* Fix coming in v2.0.8 1*/
  #core-app-bar {
    width: auto;
  }

  #core-app-bar a {
    text-decoration: none;
  }
  .back-img{
    background-image: url('../../assets/menu1.jpg');
    background-size: 120%;
    background-repeat: no-repeat;
  }
</style>
