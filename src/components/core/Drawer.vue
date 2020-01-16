<template>
  <v-app-bar style="margin-top:90px" :clipped-left="$vuetify.breakpoint.lgAndUp" app color="#00497f" flat height="40">
    <v-container>
      <b-tabs pills>
        <b-tab title="Ngành hàng" active><b-card-text></b-card-text></b-tab>
        <b-tab title="Danh mục mặt hàng"><b-card-text></b-card-text></b-tab>
      </b-tabs>
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
</style>
