<template>
  <div>
    <v-snackbar v-model="snackbar" color="green" top dark >
      <v-icon color="white" class="mr-3">mdi-bell-plus</v-icon>
      <div>{{text}}</div>
      <v-btn icon  @click="snackbar1" >
        <v-icon >mdi-close-circle</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  name: 'appSnackbar',
  methods: {
    snackbar1 () {
      this.$store.state.snackbar = false
    }
  },
  computed: {
    snackbar () {
      return this.$store.state.snackbar
    },
    text () {
      return this.$store.state.text1
    }
  },
}
</script>