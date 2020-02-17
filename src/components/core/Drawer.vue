<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    color="grey darken-2"
    dark
    floating
    mobile-break-point="991"
    persistent
    width="250"
    clipped
  >
    <v-list class="py-0" v-for="item in links">
      <v-list-group
        v-if="item.items"
        active-class="#6c757d white--text"
        style="text-decoration:none"
        no-action
        v-model="item.active"
        :prepend-icon="item.action"
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
            active-class="#6c757d white--text"
            :to="subitem.to"
          > 
            <v-list-item-title style="font-size: 14px;">{{subitem.title}}</v-list-item-title>
          </v-list-item>
      </v-list-group>
      
      <v-list-item 
        v-else
        :to="item.to"
        active-class="#6c757d white--text"
        style="text-decoration:none">
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-title> {{item.text}}</v-list-item-title>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="">
        <v-btn block>Đăng xuất</v-btn>
      </div>
    </template>
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
