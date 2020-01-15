<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="drawer"
    :clipped="$vuetify.breakpoint.lgAndUp"
    :src="image"
    app
    color="#d7d7d7"
    dark
    floating
    mobile-break-point="991"
    persistent
    width="260"
  >

    <v-list>
      
      <template v-for="item in links">
        <v-list-group
          v-if="item.items"
          active-class="primary white--text"
          style="text-decoration:none;"
          no-action
          :prepend-icon="item.action"
          :key="item"
          >
          <template v-slot:activator >
              <v-list-item-icon :to="item.to" >
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{item.text}}</v-list-item-title>
            </template>

            <v-list-item
              v-for=" subitem in item.items"
              style="text-decoration:none;"
              :to="subitem.to"
              :key="subitem"> 
              <v-list-item-title>{{subitem.title}}</v-list-item-title>
            </v-list-item>
        </v-list-group>
        
        <v-list-item 
          v-else
          :to="item.to"
          active-class="primary white--text"
          style="text-decoration:none;margin-top:-8px"
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
import { mapMutations, mapState } from "vuex";
export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    },
    links: {
      require: true,
      type: [ Object]
    },
  },
  data: () => ({
  }),
  computed: {
    ...mapState("app", [ "color"]),
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
