<template>
  <div>
    <v-card max-width="450" class="mx-auto my-0 py-0">
      <v-app-bar dark color="blue">
        <v-toolbar-title class="ml-5 mt-3"><span>Đăng ký tài khoản</span></v-toolbar-title>
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
              <v-text-field v-model="nhansu.name" color="deep-purple" label="Tên" required outlined dense></v-text-field>
            </v-col>
            <v-col class="my-0 py-0" cols="12" sm="6">
              <v-text-field v-model="nhansu.sur_name" color="deep-purple" label="Họ" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0" cols="12" sm="6">
              <v-text-field v-model="nhansu.middle_name" color="deep-purple" label="Đệm" required outlined dense></v-text-field>
            </v-col>
            <v-col class="my-0 py-0" cols="12" sm="6">
              <v-combobox v-model="nhansu.sex" :items="sex" label="Giới tính" required outlined dense></v-combobox> 
            </v-col>
            <v-col class="my-0 py-0" cols="12">
              <v-text-field v-model="nhansu.email" color="deep-purple" label="Email" required outlined dense></v-text-field>
            </v-col>
            <v-col class="my-0 py-0" cols="12">
              <v-text-field v-model="nhansu.address" color="deep-purple" label="Địa chỉ" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0" cols="6">
              <v-combobox v-model="nhansu.city" label="Thành phố" :items="items" required outlined dense></v-combobox>
            </v-col>
            <v-col class="my-0 py-0" cols="6">
              <v-combobox v-model="nhansu.country" label="Quốc gia" :items="cacnuoc" required outlined dense></v-combobox>
            </v-col>
            <v-col class="my-0 py-0" cols="6">
              <v-text-field v-model="nhansu.phone" :rules="phone" color="deep-purple" label="Số điện thoại" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0" cols="6">
              <v-text-field v-model="nhansu.user" color="deep-purple" label="Tên đăng nhập" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0" cols="12">
              <v-text-field v-model="nhansu.pass" color="deep-purple" :type="show1 ? 'text' : 'password'" label="Password" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0" cols="12">
              <v-combobox v-model="nhansu.role" label="Ngành nghề" required outlined dense></v-combobox>
            </v-col>
            <v-col class="my-0 py-0" cols="12">
              <v-combobox v-model="nhansu.category" label="Mặt hàng" required outlined dense></v-combobox>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="ml-4" style="text-decoration:none; color:#fff" @click="addDangky" color="blue">Đăng ký</v-btn>
          </v-card-actions>
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import axios from 'axios'
import api from '../api/http'
import seclectData from '../components/json/thanhpho.json'
export default {
  data() {
    return {
      nhansu:[],
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
    addDangky () {
      var vm = this
      if (vm.$refs.formDangKy.validate()) {
        api
        .post('employee', {
          name: this.nhansu.name,
          sur_name: this.nhansu.sur_name,
          middle_name: this.nhansu.middle_name,
          sex: this.nhansu.sex,
          email: this.nhansu.email,
          address: this.nhansu.address,
          city: this.nhansu.city,
          country: this.nhansu.country,
          phone: this.nhansu.phone,
          user: this.nhansu.user,
          pass: this.nhansu.pass,
          role: this.nhansu.role,
          category: this.nhansu.category,
        })
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
        this.$emit('snackbar', this.snackbar=true)
        vm.nhansu = []
      }
    }
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
  computed: {
    phone () {
      // return this.$store.state.phone
    }
  }
}
</script>