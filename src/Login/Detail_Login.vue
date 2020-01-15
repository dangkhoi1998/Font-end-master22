<template>
  <v-app id="app">
    <v-container>
      <app-menu>
        <template v-slot:formEmployees="{ item }" >
          <v-card-actions class="my-0 py-0 mt-1">
            <v-text-field
              color="deep-purple"
              v-model="item.user"
              class="mr-3"
              label="Tên đăng nhập"
              prepend-inner-icon="mdi-account"
              solo
              rounded
              dense
              style="max-width:250px;height:30px"
            ></v-text-field>
          
            <v-text-field
              solo
              dense
              v-model="item.pass"
              prepend-inner-icon="mdi-lock"
              rounded
              style="max-width:250px; height:30px"
              placeholder="Password"
              color="deep-purple"
              :type="show1 ? 'text' : 'password'"
              label="Password"
            ></v-text-field>
          </v-card-actions>
          
          <v-card-actions class="my-0 py-0 mt-5">
            <v-spacer />
            <v-btn height="25" rounded :to="'/login/Dang-ky'"  style="text-decoration:none; color:#fff" color="#fdb44b">Đăng ký</v-btn>
            <v-btn height="25" rounded class="ml-4 mr-1 " style="text-decoration:none; color:#fff" color="blue">Đăng nhập</v-btn>
          </v-card-actions>
        </template>
      </app-menu>
      <v-row row style="margin-top:100px">
        <v-col cols="12" sm="7" color="white" class="my-auto">
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
import appMenu from '../components/core/AppBar'
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
      appMenu
    }
  }
</script>
<style>
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