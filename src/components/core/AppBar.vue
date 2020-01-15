<template>
  <v-app-bar id="core-app-bar" :clipped-left="$vuetify.breakpoint.lgAndUp" absolute app color="#f5f5f5" flat height="90" >
    <!-- <v-toolbar-title class="tertiary--text font-weight-light align-self-center">
    </v-toolbar-title> -->
    <!-- <v-spacer /> -->

      <slot name="formEmployees" :item="item"></slot>
    
          <!-- <template v-slot:activator="{ attrs, on }">
            <v-btn class="toolbar-items " icon to="" v-bind="attrs"
              v-on="on"
            >
              <v-badge
                color="error"
                overlap
              >
                <v-icon color="tertiary">
                  mdi-account
                </v-icon>
              </v-badge>
            </v-btn>
          </template> -->
         
          <!-- <v-card>
            <v-list dense>
              <v-list-item v-for="(link, i) in links" :key="i"  style="text-decoration:none" @click="$store.state.authenticated = false" :to="link.to">
                <v-list-item-action >
                  <v-icon>{{link.icon}}</v-icon>
                </v-list-item-action>

                <v-list-item-title >{{link.text}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card> -->
  </v-app-bar>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data: () => ({
      singleLine: true,
      notifications: [],
      title: null,
      responsive: false,
      item:{},
    }),
    
    props: {
      getNotificationsApi: {
        require: true,
        type: Function
      },
      links: {
        require: true,
        type: [ Object, Array ]
      },
      to: {
        require: true,
        type: [ Object, Array ]
      }
    },

    watch: {
      '$route' (val) {
        this.title = val.name
      },
    },
    computed: {
      authenticated () {
        return this.$store.state.authenticated
      },
      classObject () {
        if (this.notifications.length > 1) {
          return {
            heartBeat: 'heartBeat',
            delay1s: 'delay-1s',
            display: 'display: none'
          }
        } else {
          return {
          }
        }
      },
    },
    mounted () {
      this.onResponsiveInverted()
      window.addEventListener('resize', this.onResponsiveInverted)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.onResponsiveInverted)
    },
    created () {
      this.getNotifications()
    },
    methods: {
      getNotifications () {
        this.getNotificationsApi()
        .then(response => {
          for (const i in response.data) {
            this.notifications.push(response.data[i]['work_name'])
          }
        })
      },
      ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
      onClick () {
        this.setDrawer(!this.$store.state.app.drawer)
      },
      onResponsiveInverted () {
        if (window.innerWidth < 991) {
          this.responsive = true
        } else {
          this.responsive = false
        }
      },
    },
  }
</script>

<style>
  /* Fix coming in v2.0.8 */
  #core-app-bar {
    width: auto;
  }

  #core-app-bar a {
    text-decoration: none;
  }
</style>
