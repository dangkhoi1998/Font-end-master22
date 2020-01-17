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
        <v-combobox v-model="select" :items="items" item-text="name" item-value="id" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" label="Ngành hàng" filled></v-combobox>
      </v-col>
      <v-col cols="6" class="my-0 py-0">
        <v-combobox v-model="select11" :items="items1" item-text="name" label="Ngành hàng 1" filled></v-combobox>
      </v-col>
      <!-- <v-col cols="4">
        <v-combobox v-model="select12" :items="items2" item-text="name" label="Ngành hàng 2" required outlined></v-combobox>
      </v-col> -->
    </v-row>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>
<script>
import { getcategory } from '../../../api/GetApi/getApiAdmin'
import axios from 'axios'
export default {
  data: () => ({
    items: [],
    items1: [],
    items2: [],
    select: {},
    select11: { name: ''},
    select12: {},
    search: '',
    list: {},
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