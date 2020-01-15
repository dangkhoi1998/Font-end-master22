<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="drawer"
    :clipped="$vuetify.breakpoint.lgAndUp"
    :src="image"
    app
    color="grey darken-2"
    dark
    floating
    mobile-break-point="991"
    persistent
    width="260"
  >
    <template v-slot:img="attrs">
      <v-img v-bind="attrs" gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)" />
    </template>

    <v-list-item two-line>
        <v-img src="@/assets/logos.png" height="100" contain />
      <v-list-item-title class="title">1Media Soft</v-list-item-title>
    </v-list-item>

    <v-divider class="mx-3 mb-3" />

    <v-list>
      
      <template v-for="item in links">
        <v-list-group
          v-if="item.items"
          active-class="primary white--text"
          style="text-decoration:none"
          no-action
          :prepend-icon="item.action"
          :key="item"
          >
          <template v-slot:activator >
              <v-list-item-icon :to="item.to">
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{item.text}}</v-list-item-title>
            </template>

            <v-list-item
              v-for=" subitem in item.items"
              style="text-decoration:none"
              :to="subitem.to"
              :key="subitem"> 
              <v-list-item-title>{{subitem.title}}</v-list-item-title>
            </v-list-item>
        </v-list-group>
        
        <v-list-item 
          v-else
          :to="item.to"
          active-class="primary white--text"
          style="text-decoration:none"
          :key="item">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title> {{item.text}}</v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapMutations, mapState } from "vuex";
export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    },
    links: {
      require: true,
      type: [ Object, Array ]
    },
  },
  data: () => ({
  }),
  computed: {
    ...mapState("app", ["image", "color"]),
    inputValue: {
      get() {
        return this.$store.state.app.drawer;
      },
      set(val) {
        this.setDrawer(val);
      }
    }
  },
  methods: {
    ...mapMutations("app", ["setDrawer", "toggleDrawer"])
  }
};
</script>
