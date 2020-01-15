<template>
  <v-app id="app">
    <v-container>
      <app-menu>
        <template v-slot:formEmployees="{ item }" >
          <app-login></app-login>
        </template>
      </app-menu>
      <v-row row style="margin-top:100px">
        <v-col cols="12" sm="7" color="white ss" class="my-auto">
          <v-list-item class="img1" style="margin-top:100px">
            <v-img class="ml-5" src="@/assets/dropship.png" contain />
          </v-list-item>
        </v-col>
        <v-col cols="12" sm="5" class="mx-auto my-auto">
          <transition
            appear
            enter-class=""
            enter-active-class="animated fadeInRight">
              <router-view></router-view>
          </transition>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import login from '../Login/login'
import menu from '../components/core/AppBar'
  export default {
    data() {
      return {
         password: undefined,
        input: { user: '', pass:''},
        form: false,
        isloading: false,
        isUpdating:false,
        form: false,
        show1:false,
      }
    },
    components:{
      appMenu: menu,
      appLogin:login
    }
  }
</script>
<style>
.input{
  border: 1px solid black;
  font-size: 13px;
}
.px-3 {
  margin: 26px !important;
  font-weight: 600 !important;
}
.dangnhap .px-3 h4{
  font-weight: 800 !important;
  color: white !important;
}
@media(max-width: 560px){
  .img{ background-size: 100% }
}
@media(min-width: 905px){
  .text-login{
    margin-left:115px;
  }
  .img{ width: 800px}
}
#app{
} 
#btn1{ margin-top:-30px}
</style>
