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
          <v-row class="my-0 py-0">
            <v-col class="my-0 py-0" cols="12" sm="6">
              <label class="my-0 py-0">Tên
                <span style="color: red">(*)</span>
              </label>
              <v-text-field v-model="nhansu.name" placeholder="Tên" color="deep-purple" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" hide-details="auto" required outlined dense></v-text-field>
            </v-col>
            <v-col class="my-0 py-0" cols="12" sm="6">
              <label class="my-0 py-0">Họ
                <span style="color: red">(*)</span>
              </label>
              <v-text-field v-model="nhansu.sur_name" placeholder="Họ" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" color="deep-purple" hide-details="auto"  required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="12" sm="6">
              <label class="my-0 py-0">Đệm
                <span style="color: red">(*)</span>
              </label>
              <v-text-field v-model="nhansu.middle_name" placeholder="Đệm" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" color="deep-purple" hide-details="auto" required outlined dense></v-text-field>
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="12" sm="6">
              <label class="my-0 py-0">Giới tính 
                <span style="color: red">(*)</span>
              </label>
              <v-combobox v-model="nhansu.sex" :items="sex" placeholder="Giới tính" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" hide-details="auto" required outlined dense></v-combobox> 
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="12">
              <label class="my-0 py-0">Email
                <span style="color: red">(*)</span>
              </label>
              <v-text-field v-model="nhansu.email" placeholder="Email" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" color="deep-purple" hide-details="auto" required outlined dense></v-text-field>
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="12">
              <label class="my-0 py-0">Địa chỉ
                <span style="color: red">(*)</span>
              </label>
              <v-text-field v-model="nhansu.address" placeholder="Địa chỉ" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" hide-details="auto" color="deep-purple" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="6">
              <label class="my-0 py-0">Thành phố
                <span style="color: red">(*)</span>
              </label>
              <v-combobox v-model="nhansu.city" placeholder="Thành phố" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" hide-details="auto" :items="items" required outlined dense></v-combobox>
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="6">
              <label class="my-0 py-0">Quốc gia
                <span style="color: red">(*)</span>
              </label>
              <v-combobox v-model="nhansu.country" placeholder="Quốc gia" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" hide-details="auto" :items="cacnuoc" required outlined dense></v-combobox>
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="6">
              <label class="my-0 py-0">Số điện thoại
                <span style="color: red">(*)</span>
              </label>
              <v-text-field v-model="nhansu.phone" placeholder="Số điện thoại" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" color="deep-purple" hide-details="auto" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="6">
              <label class="my-0 py-0">Tên đăng nhập
                <span style="color: red">(*)</span>
              </label>
              <v-text-field v-model="nhansu.user" placeholder="Tên đăng nhập" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" hide-details="auto" color="deep-purple" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="12">
              <label class="my-0 py-0">Password
                <span style="color: red">(*)</span>
              </label>
              <v-text-field v-model="nhansu.pass" placeholder="Password" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" hide-details="auto" color="deep-purple" :type="show1 ? 'text' : 'password'" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="12">
              <label class="my-0 py-0">Ngành nghề
                <span style="color: red">(*)</span>
              </label>
              <v-combobox v-model="nhansu.role" placeholder="Ngành nghề" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" hide-details="auto" required outlined dense></v-combobox>
            </v-col>
            <!-- <v-col class="my-0 py-0 mt-2" cols="12">
              <label class="my-0 py-0">Mặt hàng
                <span style="color: red">(*)</span>
              </label>
              <v-combobox v-model="nhansu.category" placeholder="Mặt hàng" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" hide-details="auto" required outlined dense></v-combobox>
            </v-col> -->
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="ml-4" style="text-decoration:none; color:#fff" @click="addDangky()" color="blue">Đăng ký</v-btn>
          </v-card-actions>
        </v-form>
      </v-container>
    </v-card>
    <v-snackbar v-model="snackbar1" color="red" top dark >
      <v-icon color="white" class="mr-3">mdi-bell-plus</v-icon>
      <div>{{text1}}</div>
      <v-btn icon  @click="$store.state.snackbar1 = false" >
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>
<script>
import axios from 'axios'
import seclectData from '../components/json/thanhpho.json'
export default {
  data() {
    return {
      nhansu: {},
      show1: false,
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
      // var vm = this
      // if (vm.$refs.formDangKy.validate()) {
      //   axios.post('http://192.168.1.250:17000/register', this.nhansu)
      //     .then(response => {
      //       console.log(response)
      //     })
      //     .catch(error => {
      //       console.log(error)
      //     })
      //   vm.nhansu = {}
      // }
      this.$store.state.snackbar1 = true
      this.$store.state.text1 = 'Đăng ký tài khoản thành công'
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
    snackbar1 () {
      return this.$store.state.snackbar1
    },
    text1 () {
      return this.$store.state.text1
    }
  }
}
</script>