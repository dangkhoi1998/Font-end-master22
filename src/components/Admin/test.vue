<template>
  <div id="app">
    
    <p @contextmenu.prevent="$refs.menu.open($event, { foo: 'bar' })">
        Right click on me
    </p>

    <td @contextmenu.prevent="$refs.menu.open($event, { foo: 'sssssssssss' })">
        Right click on me td
    </td>
    
    <vue-context ref="menu">
        <v-menu
          v-model="showMenu"
          :position-x="x"
          :position-y="y"
          absolute
          offset-y
        >
          <v-list>
            <v-list-item @click="editItem($event.target.innerText, $event.data)">
              <v-list-item-title>Sửa</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
    </vue-context>
    
</div>
</template>
<script>
import Vue from 'vue';
import { VueContext } from 'vue-context';
  export default {
    data: () => ({
      showMenu: true,
      x: 0,
      y: 0,
    }),
    components: {
        VueContext
    },
    methods: {
      onClick (text, data) {
          alert(`You clicked ${text}!`);
          console.log(data);
          // => { foo: 'bar' }
      }
    },
  }
</script>
<style scoped>
.portrait.v-card {
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}
</style>