<template>
  <v-app-bar style="margin-top:90px" :clipped-left="$vuetify.breakpoint.lgAndUp" app color="#00497f" flat height="48">
    <v-container>
        <template v-for="item in links">
            <v-btn
              color="#00497f"
              :to="item.to"
              style="height:48px; color:#ffff; border-radius:0px; text-decoration:none"
              active-class="blue white--text"
            >
              {{item.text}}
            </v-btn>
        </template>
    </v-container>
  </v-app-bar>
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
