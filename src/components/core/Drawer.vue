<template>
  <v-app-bar style="margin-top:90px" :clipped-left="$vuetify.breakpoint.lgAndUp" app color="#00497f" flat height="48">
    <v-container>
      <v-row>
        <template v-for="item in links">
          <v-col cols="12" sm="2" class="">
            <v-list-item 
            :to="item.to"
            active-class="blue white--text"
            style="text-decoration:none">
            <v-list-item-title style="color:#ffff; font-size:18px">{{item.text}}</v-list-item-title>
          </v-list-item>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-app-bar>
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
<style>
  .v-application a{
    color: #ffffff;
    font-size:16px;
    font-weight: bold;
  }
  .nav-pills .nav-link{
    border-radius: 0px
  }
</style>
