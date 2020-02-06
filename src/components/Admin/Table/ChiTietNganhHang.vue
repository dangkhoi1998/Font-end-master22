<template>
  <div class="white">
    <div class="list-thu-tuc" style="background-color: #e1e2e1">
      <div class="row-header d-flex">
        <div class="background-triangle-big"> <span>CHI TIẾT NGÀNH HÀNG</span></div>
        {{select1}} {{select2}} {{select3}}
        <v-spacer></v-spacer>
        <v-text-field class="py-0 my-0 mr-4 mt-1"  v-model="search" append-icon="search" label="Tìm kiếm..." single-line hide-details></v-text-field>
      </div>
    </div>
    <v-row class="mx-3 mt-5">
      <v-col cols="6" class="my-0 py-0">
        <v-combobox v-model="select" hide-details="auto" :items="items" item-text="name" item-value="id" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" label="Ngành hàng" filled></v-combobox>
      </v-col>
      <!-- <v-col cols="6" class="my-0 py-0">
        <v-combobox v-model="select11" hide-details="auto" clearable @click:clear="clearMessage" :items="items1" item-text="name" label="Ngành hàng 1" filled></v-combobox>
      </v-col>     -->
    </v-row>
    
    <v-card-actions class="my-1 mx-3">
      <v-spacer></v-spacer>
      <v-btn class="py-2" color="#0b72ba" @click="Add()"><span style="color: white;">Thêm mới</span></v-btn>
    </v-card-actions>

    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="10"
      no-data-text="Không có dữ liệu"
      class="elevation-1"
    >
    <template v-slot:body="{items}">
      <tbody>
        <tr v-for="item in items" :key="item.source_name">
          <td >{{desserts.indexOf(item) + 1}}</td>
          <td >{{item.name}}</td>
          <td >{{item.desc}}</td>
          <td class="text-center">
            <v-icon small class="mr-2" @click="Addtwo(item)">
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
            <v-icon
              small
              @click="ViewItem(item)"
            >
              mdi-play
            </v-icon>
          </td>
        </tr>
      </tbody>
    </template>
    <!-- <template v-slot:expanded-item="{ item }">
      <td :colspan="10">
      </td>
    </template> -->
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
          <span style="color: white">Thêm mới nghành hàng 
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
          <v-btn color="#0b72ba" @click="AddItem()"><lable style="color: white">Lưu lại</lable></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- thêm mới 2 -->
    <v-dialog v-model="dialog2" persistent max-width="450">
      <v-card>
        <v-card-title class="headline mb-4" style="background: #0b72ba">
          <span style="color: white">Thêm mới nghành hàng 
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
          <v-btn color="#0b72ba" @click="AddItem()"><lable style="color: white">Lưu lại</lable></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- view -->
    <v-dialog v-model="dialog1" persistent max-width="700">
      <v-card width="600" height="auto" class="mx-auto my-2">
        {{category}}
        <!-- <v-simple-table >
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
              <tr v-if="item.name === index.parent">
                <td ><v-icon class="mx-0 px-0 ">mdi-play</v-icon></td>
                <td class="text-left">{{ index.name }}</td>
                <td>{{ index.desc }}</td>
                <td>
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
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table> -->
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
    name: '',
    headers: [
      { text: 'STT', value: 'stt' },
      { text: 'Tên ngành hàng', value: 'name' },
      { text: 'Mô tả', value: 'desc' },
      { text: 'Actions', value: 'action', sortable: false, align: 'center', },
    ],
    desserts: []
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
    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.category = Object.assign({}, item)
      this.dialog = true
    },
    Add () {
      this.category = {}
      this.dialog = true
    },
    AddItem () {
      if(this.editedIndex > -1) {
        Putcategory(this.category)
          .then(reponse => {
            Object.assign(this.desserts[this.editedIndex], this.category)
            this.category = {}
          })
          .catch(error => {
            console.log(error)
          }) 
        this.dialog = false
      } else {
        this
        // this.category.parent = this.
        Postcategory(this.category)
          .then(reponse => {
            this.desserts.push(this.category)
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    ViewItem(item) {
      this.category = item
    },
    Addtwo (item) {
      this.name = item['name']
      this.category={}
      this.dialog2 = true
    },
    clearMessage () {
      this.items1 = []
    }
  },
  computed: {
    select1 () {
      const mappedComments = this.list
      const data = []
      for( const i in mappedComments) {
        if(mappedComments[i]['parent'] === 'null') {
          this.select = mappedComments[0]
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
    }
  },
  watch: {
    
  }
}
</script> 
<style scoped>
  /* td{
    border: 0px !important;
    border-bottom: 1px solid #d7d7d7 !important; 
  }
  th{
    border: 0px !important;
    border-bottom: 1px solid #d7d7d7 !important; 
  } */
</style>