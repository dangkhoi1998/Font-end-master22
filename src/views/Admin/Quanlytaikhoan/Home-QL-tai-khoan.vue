<template>
  <div>
     <!-- <v-container class="my-0 py-0"> -->
      <div class="list-thu-tuc" style="background-color: #e1e2e1">
        <div class="row-header d-flex">
          <div class="background-triangle-big"> <span>Danh sách tài khoản</span></div>
          <v-spacer></v-spacer>
          <v-text-field class="py-0 my-0 mr-4 mt-1"  v-model="search" append-icon="search" label="Tìm kiếm..." single-line hide-details></v-text-field>
        </div>
      </div>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:item.stt="{item}">
          {{desserts.indexOf(item) + 1}}
        </template>
        <template v-slot:item.action="{item}">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            delete
          </v-icon>
        </template>
      </v-data-table>
    <!-- </v-container> -->
    <v-dialog v-model="dialog1" width="500">
      <v-card>
        <v-card-title
          style="background: #0b72ba; color: white"
        >
          SỬA THÔNG TIN TÀI KHOẢN
           <v-spacer></v-spacer>
            <v-btn icon dark @click="dialog1 = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-card-title>
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
              <v-text-field v-model="nhansu.sur_name" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" color="deep-purple" hide-details="auto" label="Họ" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="12" sm="6">
              <label class="my-0 py-0">Đệm
                <span style="color: red">(*)</span>
              </label>
              <v-text-field v-model="nhansu.middle_name" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" color="deep-purple" hide-details="auto" required outlined dense></v-text-field>
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="12" sm="6">
              <label class="my-0 py-0">Giới tính 
                <span style="color: red">(*)</span>
              </label>
              <v-combobox v-model="nhansu.sex" :items="sex" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" hide-details="auto" required outlined dense></v-combobox> 
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="12">
              <label class="my-0 py-0">Email
                <span style="color: red">(*)</span>
              </label>
              <v-text-field v-model="nhansu.email" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" color="deep-purple" hide-details="auto" required outlined dense></v-text-field>
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="12">
              <label class="my-0 py-0">Địa chỉ
                <span style="color: red">(*)</span>
              </label>
              <v-text-field v-model="nhansu.address" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" hide-details="auto" color="deep-purple" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="6">
              <label class="my-0 py-0">Thành phố
                <span style="color: red">(*)</span>
              </label>
              <v-combobox v-model="nhansu.city" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" hide-details="auto" :items="items" required outlined dense></v-combobox>
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="6">
              <label class="my-0 py-0">Quốc gia
                <span style="color: red">(*)</span>
              </label>
              <v-combobox v-model="nhansu.country" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" hide-details="auto" :items="cacnuoc" required outlined dense></v-combobox>
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="6">
              <label class="my-0 py-0">Số điện thoại
                <span style="color: red">(*)</span>
              </label>
              <v-text-field v-model="nhansu.phone" :rules="phone" color="deep-purple" hide-details="auto" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="6">
              <label class="my-0 py-0">Tên đăng nhập
                <span style="color: red">(*)</span>
              </label>
              <v-text-field v-model="nhansu.user" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" hide-details="auto" color="deep-purple" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="12">
              <label class="my-0 py-0">Password
                <span style="color: red">(*)</span>
              </label>
              <v-text-field v-model="nhansu.pass" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" hide-details="auto" color="deep-purple" :type="show1 ? 'text' : 'password'" required outlined dense ></v-text-field>
            </v-col>
            <v-col class="my-0 py-0 mt-2" cols="12">
              <label class="my-0 py-0">Ngành nghề
                <span style="color: red">(*)</span>
              </label>
              <v-combobox v-model="nhansu.role" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" hide-details="auto" required outlined dense></v-combobox>
            </v-col>
            <!-- <v-col class="my-0 py-0 mt-2" cols="12">
              <label class="my-0 py-0">Mặt hàng
                <span style="color: red">(*)</span>
              </label>
              <v-combobox v-model="nhansu.category" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" hide-details="auto" required outlined dense></v-combobox>
            </v-col> -->
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="ml-4" style="text-decoration:none; color:#fff" @click="addDangky()" color="blue">Lưu lại</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import { getregister } from '../../../api/GetApi/getApiAdmin'
  import axios from 'axios'
  export default {
    data () {
      return {
        search: '',
        editedIndex: -1,
        sex:['Nam', 'Nữ'],
        nhansu: {
          pass: ''
        },
        dialog1: false,
        headers: [
          {
            text: 'STT',
            align: 'left',
            sortable: false,
            value: 'stt',
          },
          { text: 'Tên', value: 'first_name' },
          { text: 'Họ', value: 'sur_name' },
          { text: 'Đệm', value: 'middle_name' },
          { text: 'Giới tính', value: 'sex' },
          { text: 'Email', value: 'email' },
          { text: 'Địa chỉ', value: 'address' },
          { text: 'Thành phố', value: 'city' },
          { text: 'Quốc gia', value: 'country' },
          { text: 'Số điện thoại', value: 'phone' },
          { text: 'Tên đăng nhập', value: 'user' },
          { text: 'Ngành nghề', value: 'role' },
          // { text: 'Mặt hàng', value: 'iron' },
          { text: 'Actions', value: 'action', sortable: false, align: 'center', },
        ],
        desserts: [],
      }
    },
    created () {
      this.listRegister()
    },
    methods: {
      listRegister () {
        getregister()
        //axios.get('http://192.168.1.250:17000/register')
          .then(response => {
            this.desserts = response.data
            console.log('ddddđ', this.desserts)
          })
          .catch(error => {
            console.log(error)
          })
      },
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.nhansu = Object.assign({}, item)
        this.nhansu.pass = ''
        this.dialog1 = true
      },
      addDangky () {
        Object.assign(this.desserts[this.editedIndex], this.nhansu)
        //this.nhansu = {}
      }
    }
  }
</script>
