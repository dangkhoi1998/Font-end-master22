<template>
  <div>
    <div class="list-thu-tuc" style="background-color: #e1e2e1">
      <div class="row-header d-flex">
        <div class="background-triangle-big"> <span>DANH CHI TIẾT NGÀNH HÀNG</span></div>
        {{select1}} {{select2}} {{select3}}
        <v-spacer></v-spacer>
        <v-text-field class="py-0 my-0 mr-4 mt-1"  v-model="search" append-icon="search" label="Tìm kiếm..." single-line hide-details></v-text-field>
      </div>
    </div>
    <v-row class="mx-3 mt-5">
      <v-col cols="6" class="my-0 py-0">
<<<<<<< HEAD
        <v-combobox v-model="select" :items="items" item-text="name" item-value="id" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" label="Ngành hàng" filled></v-combobox>
      </v-col>
      <v-col cols="6" class="my-0 py-0">
        <v-combobox v-model="select11" :items="items1" item-text="name" label="Ngành hàng 1" filled></v-combobox>
=======
        <v-combobox v-model="select" hide-details="auto" :items="items" item-text="name" item-value="id" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" label="Ngành hàng" filled></v-combobox>
      </v-col>
      <v-col cols="6" class="my-0 py-0">
        <v-combobox v-model="select11" hide-details="auto" clearable @click:clear="clearMessage" :items="items1" item-text="name" label="Ngành hàng 1" filled></v-combobox>
>>>>>>> 5961abd135077f306932a786daad349ac877d8f4
      </v-col>
      <!-- <v-col cols="4">
        <v-combobox v-model="select12" :items="items2" item-text="name" label="Ngành hàng 2" required outlined></v-combobox>
      </v-col> -->
<<<<<<< HEAD
    </v-row>
=======
      
    </v-row>
    <v-card-actions class="my-1 mx-3">
        <v-spacer></v-spacer>
        <v-btn class="py-2" color="#0b72ba" @click="Add()"><span style="color: white;">Thêm mới</span></v-btn>
      </v-card-actions>
>>>>>>> 5961abd135077f306932a786daad349ac877d8f4
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
<<<<<<< HEAD
    ></v-data-table>
=======
    >
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
          <label class="my-0 py-0 font-weight-bold">Ngành hàng111111
            <span style="color: red">(*)</span>
          </label>
          <v-combobox v-model="select" hide-details="auto" :items="items" item-text="name" item-value="id" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" dense filled></v-combobox>

          <label class="mt-3 my-0 py-0 font-weight-bold">Ngành hàng
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
>>>>>>> 5961abd135077f306932a786daad349ac877d8f4
  </div>
</template>
<script>
import { getcategory } from '../../../api/GetApi/getApiAdmin'
<<<<<<< HEAD
=======
import { Postcategory } from '../../../api/PostApi/PostApiAdmin'
import { Putcategory} from '../../../api/PutApi/PutAdminApi'
import { Deletecategory } from '../../../api/DeleteApi/DeleteAdminApi'
>>>>>>> 5961abd135077f306932a786daad349ac877d8f4
import axios from 'axios'
export default {
  data: () => ({
    items: [],
    items1: [],
    items2: [],
<<<<<<< HEAD
=======
    editedIndex: -1,
>>>>>>> 5961abd135077f306932a786daad349ac877d8f4
    select: {},
    select11: { name: ''},
    select12: {},
    search: '',
    list: {},
<<<<<<< HEAD
=======
    dialog: false,
    category: {
      parent: ''
    },
>>>>>>> 5961abd135077f306932a786daad349ac877d8f4
    headers: [
      {
        text: 'STT',
        align: 'center',
        sortable: false,
        value: 'id',
      },
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
        //axios.get('http://localhost:3000/testNganhhang')
        getcategory()
          .then(response => {
            this.list = response.data
            this.desserts = this.list
          })
      },
<<<<<<< HEAD
=======
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
      } else {
        this.category.parent = this.select.name
        Postcategory(this.category)
          .then(reponse => {
            this.desserts.push(this.category)
          })
          .catch(error => {
            console.log(error)
          })
      }
      this.dialog = false
    },
    clearMessage () {
      this.items1 = []
    }
>>>>>>> 5961abd135077f306932a786daad349ac877d8f4
  },
  computed: {
    select1 () {
      const mappedComments = this.list
      const data = []
      for( const i in mappedComments) {
        if(mappedComments[i]['parent'] === 'null') {
<<<<<<< HEAD
          this.select = mappedComments[0]
=======
          this.select = mappedComments[i]
>>>>>>> 5961abd135077f306932a786daad349ac877d8f4
          const copy = Object.assign({}, mappedComments[i]);
          data.push(copy);
          this.items = data
          this.desserts = this.items
<<<<<<< HEAD
=======
          // return data.push(copy);
>>>>>>> 5961abd135077f306932a786daad349ac877d8f4
        }
      }
    },
    select2 () {
<<<<<<< HEAD
      const mappedComments = this.list
      const data = []
      for ( const i in mappedComments) {
        if( this.select.name === mappedComments[i]['parent']) {
=======
      console.log('dddđ', this.select.name)
      const mappedComments = this.list
      const data = []
      for ( const i in mappedComments) {
        if( this.select.name === mappedComments[i]['parent'] ) {
>>>>>>> 5961abd135077f306932a786daad349ac877d8f4
          const copy = Object.assign({}, mappedComments[i]);
          data.push(copy);
          this.items1 = data
          this.desserts = this.items1
<<<<<<< HEAD
        }
=======
        } 
>>>>>>> 5961abd135077f306932a786daad349ac877d8f4
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
<<<<<<< HEAD
        }
=======
        } 
>>>>>>> 5961abd135077f306932a786daad349ac877d8f4
      }
    }
  },
  watch: {
    
  }
}
</script>