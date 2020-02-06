<template>
  <div class="white">
    <div class="list-thu-tuc" style="background-color: #e1e2e1">
      <div class="row-header d-flex">
        <div class="background-triangle-big"> <span>CHI TIẾT NGÀNH HÀNG</span></div>
        {{select1}} {{select2}} {{select3}}
        <v-spacer></v-spacer>
        <v-btn  color="#0b72ba" text @click="Add()">
          <v-icon size="40">mdi-plus-thick</v-icon>
        </v-btn>
      </div>
    </div>
    <v-row class="mx-3 my-5">
      <v-col cols="12" md="6" class="my-0 py-0">
        <v-combobox v-model="select" hide-details="auto" :items="items" item-text="name" item-value="id" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" label="Ngành hàng" filled></v-combobox>
      </v-col>
      <v-col cols="12" md="6" class="my-0 py-0">
        <v-text-field class="py-0 my-0 "  v-model="search" append-icon="search" label="Tìm kiếm..." filled hide-details></v-text-field>
      </v-col>
      <!-- <v-col cols="12" md="2" class="my-0 py-0">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  color="#0b72ba" @click="Add()"><span style="color: white;">Thêm mới</span></v-btn>
        </v-card-actions>
      </v-col> -->
    </v-row>

    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      :items-per-page="10"
      no-data-text="Không có dữ liệu"
      class="elevation-1"
    >
    <template v-slot:body="{items}">
      <tbody>
        <tr v-for="item in items" :key="item.source_name" @contextmenu.prevent="show($event, item)">
          <td >{{desserts.indexOf(item) + 1}}</td>
          <td >{{item.name}}</td>
          <td >{{item.desc}}</td>
          <v-menu
            v-model="showMenu"
            :position-x="x"
            :position-y="y"
            absolute
            offset-y
          >
            <v-list>
              <v-list-item @click="Addtwo()">
                <v-list-item-title>
                  <v-icon small class="mr-2" color="#0b72ba">mdi-plus-circle</v-icon>
                  Thêm mới
                </v-list-item-title>
              </v-list-item>
              <v-list-item @click="editItem()">
                <v-list-item-title>
                  <v-icon small class="mr-2">edit</v-icon>
                  Sửa
                </v-list-item-title>
              </v-list-item>
              <v-list-item @click="deleteItem(item)">
                <v-list-item-title>
                  <v-icon small class="mr-2" color="red">delete</v-icon>
                  Xóa
                </v-list-item-title>
              </v-list-item>
              <v-list-item @click="dialog1 = true">
                <v-list-item-title>
                  <v-icon small class="mr-2" >mdi-play</v-icon>
                  Xem chi tiết
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </tr>
      </tbody>
    </template>
    <template v-slot:item.action="{item}">
      <v-icon small class="mr-2">
        mdi-plus-circle
      </v-icon>
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
    <!-- thêm mới 1 -->
    <v-dialog v-model="dialog" persistent max-width="450">
      <v-card>
        <v-card-title class="headline mb-4" style="background: #0b72ba">
          <span style="color: white">{{text1}} 
          </span>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-col class="my-0 py-0">
          <label class="my-0 py-0 font-weight-bold">Cha
            <span style="color: red">(*)</span>
          </label>
          <v-combobox v-model="select" hide-details="auto" :items="items" item-text="name" item-value="id" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" filled dense></v-combobox>

          <label class=" mt-3 my-0 py-0 font-weight-bold">Ngành hàng
            <span style="color: red">(*)</span>
          </label>
          <v-text-field v-model="category.name"  color="deep-purple" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" filled dense hide-details="auto"></v-text-field>

          <label class=" mt-3 my-0 py-0 font-weight-bold" >Mô tả nghành hàng 
            <span style="color: red">(*)</span>
          </label>
          <v-textarea v-model="category.desc" filled name="input-7-4" rows="2"></v-textarea>
        </v-col>
          
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#0b72ba" @click="AddItem1()"><lable style="color: white">Lưu lại</lable></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- thêm mới 2 -->
    <v-dialog v-model="dialog2" persistent max-width="450">
      <v-card>
        <v-card-title class="headline mb-4" style="background: #0b72ba">
          <span style="color: white">{{text1}}
          </span>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog2 = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-col class="my-0 py-0"> 
          <label class="my-0 py-0 font-weight-bold">Cha
            <span style="color: red">(*)</span>
          </label>
          <v-text-field disabled v-model="name"  color="deep-purple"  filled dense hide-details="auto"></v-text-field>

          <label class=" mt-3 my-0 py-0 font-weight-bold">Ngành hàng
            <span style="color: red">(*)</span>
          </label>
          <v-text-field v-model="category.name"  color="deep-purple" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" filled dense hide-details="auto"></v-text-field>

          <label class=" mt-3 my-0 py-0 font-weight-bold" >Mô tả nghành hàng 
            <span style="color: red">(*)</span>
          </label>
          <v-textarea v-model="category.desc" filled name="input-7-4" rows="2"></v-textarea>
        </v-col>
          
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#0b72ba" @click="AddItem1()"><lable style="color: white">Lưu lại</lable></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- view -->
    <v-dialog v-model="dialog1" persistent max-width="700">
      <v-card height="auto" class="mx-auto my-2">
        <v-card-title class="headline" style="background: #0b72ba">
          <span style="color: white">Chi tiết ngành hàng cấp 2 - {{ViewCategory.name}}
          </span>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog1 = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-simple-table >
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left"></th>
                <th class="text-center">Tên mặt hàng</th>
                <th class="text-center">Mô tả</th>
                <th class="text-center">Actions</th>
              </tr>
            </thead>
            <tbody v-for="(index, i) in list" :key="index.name">
              <tr v-if="ViewCategory.name === index.parent" >
                <td ><v-icon class="mx-0 px-0" color="#0b72ba">mdi-play</v-icon></td>
                <td class="text-left">{{ index.name }}</td>
                <td>{{ index.desc }}</td>
                <td class="text-center" >
                  <v-icon
                    small
                    class="mr-2"
                    @click="editMin(index)"
                  >
                    edit
                  </v-icon>
                  <v-icon
                    small
                    @click="deleteItem(index)"
                  >
                    delete
                  </v-icon>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { getcategory } from '../../../api/GetApi/getApiAdmin'
import { Postcategory } from '../../../api/PostApi/PostApiAdmin'
import { Putcategory} from '../../../api/PutApi/PutAdminApi'
import { Deletecategory } from '../../../api/DeleteApi/DeleteAdminApi'
import axios from 'axios'
export default {
  data: () => ({
    items: [],
    items1: [],
    items2: [],
    editedIndex: -1,
    select: {},
    select11: { name: ''},
    select12: {},
    search: '',
    list: {},
    dialog: false,
    dialog2: false,
    dialog1: false,
    category: {
      parent: ''
    },
    text1: '',
    ViewCategory: {},
    name: '',
    headers: [
      { text: 'STT', value: 'stt', sortable: false, },
      { text: 'Tên ngành hàng', value: 'name' },
      { text: 'Mô tả', value: 'desc' }
    ],
    desserts: [],
    showMenu: false,
    x: 0,
    y: 0,
  }),
  created () {
    this.listCategory()
  },
  methods: {
    listCategory () {
        getcategory()
          .then(response => {
            this.list = response.data
            this.desserts = this.list
          })
      },
    editItem () {
      this.editedIndex = this.desserts.indexOf(this.ViewCategory)
      this.category = Object.assign({}, this.ViewCategory)
      this.text1 = 'Sửa ngành hàng'
      this.dialog = true
    },
    editMin (item) {
      this.editedIndex = 0
      this.category = Object.assign({}, item)
      this.text1 = 'Sửa'
      this.dialog1 = false
      this.dialog2 = true
    },
    Add () {
      this.category = {}
      this.ViewCategory = -1
      this.text1 = 'Thêm mới ngành hàng'
      this.dialog = true
    },
    AddItem1 () {
      console.log('this.editedIndex', this.editedIndex)
      if(this.editedIndex > -1) {
        Putcategory(this.category)
          .then(reponse => {
            // Object.assign(this.desserts[this.editedIndex], this.category)
            this.dialog2 = false
          })
          .catch(error => {
            console.log(error)
          }) 
        this.dialog = false
      } else {
        this.category.parent = this.select.name
        this.category.parent = this.name
        Postcategory(this.category)
          .then(reponse => {
            this.desserts.push(this.category)
            this.dialog = false
            this.dialog2 = false
          })
          .catch(error => {
            console.log(error)
          })
      }
      console.log('caaaa', this.category)
    },
    Addtwo () {
      this.name = this.ViewCategory.name
      this.category={}
      this.text1 = 'Thêm mới '
      this.editedIndex = -1
      this.dialog2 = true
    },
    clearMessage () {
      this.items1 = []
    },
    show (e, item) {
      e.preventDefault()
      this.showMenu = false
      this.x = e.clientX
      this.y = e.clientY
      this.$nextTick(() => {
        // thêm mới cấp 1
        this.ViewCategory = item
        // sửa thằng cấp 1
        // this.editedIndex = this.desserts.indexOf(item)
        // this.category = Object.assign({}, item)
        // 
        this.showMenu = true
      })
    },
  },
  computed: {
    select1 () {
      const mappedComments = this.list
      const data = []
      for( const i in mappedComments) {
        if(mappedComments[i]['parent'] === 'null') {
          this.select = Object.assign({}, mappedComments[0]);
          const copy = Object.assign({}, mappedComments[i]);
          data.push(copy);
          this.items = data
          this.desserts = this.items
        }
      }
    },
    select2 () {
      const mappedComments = this.list
      const data = []
      for ( const i in mappedComments) {
        if( this.select.name === mappedComments[i]['parent']) {
          const copy = Object.assign({}, mappedComments[i]);
          data.push(copy);
          this.items1 = data
          this.desserts = this.items1
        }
      }
    },
    select3 () {
      const mappedComments = this.list
      const data = []
      for ( const i in mappedComments) {
        if( this.select11.name === mappedComments[i]['parent']) {
          const copy = Object.assign({}, mappedComments[i]);
          data.push(copy);
          this.items2 = data
          this.desserts = this.items2
        }
      }
    },
  },
}
</script> 
<style scoped>
  .container{
    width: 70% !important;
  }
</style>