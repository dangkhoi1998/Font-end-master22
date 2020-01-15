<template>
  <v-app-bar id="core-app-bar" absolute app color="#f5f5f5" height="120">
    <!-- <v-toolbar-title class="tertiary--text font-weight-light align-self-center">
      <v-btn icon @click.stop="onClick">
        <v-icon size="30" color="tertiary">mdi-view-list</v-icon>
      </v-btn>
      <span class="mt-2">{{ title }}</span>
    </v-toolbar-title >-->
    <v-spacer />
    <v-toolbar-title class="tertiary--text font-weight-light align-self-center">
      <slot name="formEmployees" :item="item"></slot>
    </v-toolbar-title>
    <!-- <v-toolbar-items>
      <v-row align="center" class="mx-0" >
        <v-menu bottom center offset-y transition="slide-y-transition" >
          <template v-slot:activator="{ attrs, on }">
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
          </template>
         
          <v-card>
            <v-list dense>
              <v-list-item v-for="(link, i) in links" :key="i"  style="text-decoration:none" @click="$store.state.authenticated = false" :to="link.to">
                <v-list-item-action >
                  <v-icon>{{link.icon}}</v-icon>
                </v-list-item-action>

                <v-list-item-title >{{link.text}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </v-row>
    </v-toolbar-items> -->
  </v-app-bar>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data: () => ({
      singleLine: true,
      notifications: [],
      title: null,
      item: {},
      responsive: false,
    }),
    
    props: {
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
    methods: {
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
