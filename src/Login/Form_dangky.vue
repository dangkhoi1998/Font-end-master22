<template>
  <div>
    <v-card max-width="450" class="mx-auto my-0 py-0">
      <v-app-bar dark color="blue">
        <v-toolbar-title class="ml-5 mt-3"><p>Đăng ký tài khoản</p></v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-container>
        <v-form
          ref="formDangKy"
          lazy-validation
          class="pa-4"
        >
          <v-row>
            <v-col class="my-0 py-0" cols="12" sm="6">
              <v-text-field v-model="user.name" color="deep-purple" label="Tên" required outlined dense></v-text-field>
            </v-col>
            <v-col class="my-0 py-0" cols="12" sm="6">
              <v-text-field v-model="user.sur_name" color="deep-purple" label="Họ" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0" cols="12" sm="6">
              <v-text-field v-model="user.middle_name" color="deep-purple" label="Đệm" required outlined dense></v-text-field>
            </v-col>
            <v-col class="my-0 py-0" cols="12" sm="6">
              <v-combobox v-model="user.sex" :items="sex" label="Giới tính" required outlined dense></v-combobox>
            </v-col>
            <v-col class="my-0 py-0" cols="12">
              <v-text-field v-model="user.email" color="deep-purple" label="Email" required outlined dense></v-text-field>
            </v-col>
            <v-col class="my-0 py-0" cols="12">
              <v-text-field v-model="user.address" color="deep-purple" label="Địa chỉ" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0" cols="6">
              <v-combobox v-model="user.city" label="Thành phố" :items="items" required outlined dense></v-combobox>
            </v-col>
            <v-col class="my-0 py-0" cols="6">
              <v-combobox v-model="user.country" label="Quốc gia" :items="cacnuoc" required outlined dense></v-combobox>
            </v-col>
            <v-col class="my-0 py-0" cols="6">
              <v-text-field v-model="user.phone" color="deep-purple" label="Số điện thoại" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0" cols="6">
              <v-text-field v-model="user.user" color="deep-purple" label="Tên đăng nhập" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0" cols="12">
              <v-text-field v-model="user.pass" color="deep-purple" :type="show1 ? 'text' : 'password'" label="Password" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0" cols="12">
              <v-combobox v-model="user.role" label="Ngành nghề" required outlined dense></v-combobox>
            </v-col>
            <v-col class="my-0 py-0" cols="12">
              <v-combobox v-model="user.category" label="Mặt hàng" required outlined dense></v-combobox>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="ml-4" style="text-decoration:none; color:#fff" color="blue">Đăng ký</v-btn>
          </v-card-actions>
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import axios from 'axios'
import seclectData from '../components/json/thanhpho.json'
export default {
  data() {
    return {
      user:[],
      show1:false,
      password: undefined,
      sex:['Nam', 'Nữ'],
      items: [],
      cacnuoc: []
    }
  },
  created () {
  },
  methods: {
  },
  beforeCreate () {
    var vm = this
    vm.$nextTick(function () {
      for(const i in seclectData.thanhpho) {
        this.items.push(seclectData.thanhpho[i]['name'])
      }
      for(const j in seclectData.cacnuoc) {
        this.cacnuoc.push(seclectData.cacnuoc[j]['name'])
      }
    })
  },
}
</script>