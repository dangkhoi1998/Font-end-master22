<template>
  <v-container class="my-0 py-0">
    <div class="list-thu-tuc" style="background-color: #e1e2e1">
      <div class="row-header d-flex">
        <div class="background-triangle-big"> <span>Danh sách nguồn hàng</span></div>
        <v-spacer></v-spacer>
        <v-text-field class="py-0 my-0 mr-4 mt-1"  v-model="search" append-icon="search" label="Tìm kiếm..." single-line hide-details></v-text-field>
      </div>
    </div>
    <v-card class="my-0 py-0">
      <v-card class="mx-auto my-0 py-0">
        <v-card-actions class="mx-3">
          <v-spacer></v-spacer>
          <v-btn class="py-2" color="#0b72ba" @click="Add()"><span style="color: white;">Thêm mới</span></v-btn>
        </v-card-actions>
        <v-data-table
          :headers="headers"
          :search="search"
          :items="desserts"
          :items-per-page="10"
          no-data-text="Không có dữ liệu"
          no-results-text="Không tìm thấy"
          class="elevation-1"
        >
          <template v-slot:body="{items}">
            <tbody>
              <tr v-for="item in items" :key="item.source_name">
                <td >{{desserts.indexOf(item) + 1}}</td>
                <td class="text-center">{{item.source_name}}</td>
                <td class="text-center">
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
  
        </v-data-table>
      </v-card>
    </v-card>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title
          style="background: #0b72ba; color: white"
        >
          {{text}}
           <v-spacer></v-spacer>
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-card-title>
        <v-form v-model="valid" >
          <v-col>
            <label class="my-0 py-0">Nguồn hàng
              <span style="color: red">(*)</span>
            </label>
            <v-text-field  v-model="source.source_name" placeholder="Tên" color="deep-purple" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" hide-details="auto" required outlined dense></v-text-field>
          </v-col>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="ml-4" :disabled="!valid" style="text-decoration:none; color:#fff" @click="Save()" color="blue">Lưu lại</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <!-- ---------- -->
    <v-dialog v-model="dialog1" width="500">
      <v-card>
        <v-card-title
          style="background: #0b72ba; color: white"
        >
          {{text}}
           <v-spacer></v-spacer>
            <v-btn icon dark @click="dialog1 = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-card-title>

        <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">STT</th>
              <th class="text-center">Nguồn hàng</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>1</td>
              <td>{{ source.source_name }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="ml-4" style="text-decoration:none; color:#fff" @click="Delete()" color="blue">Xóa</v-btn>
      </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
  import { getsource } from '../../../api/GetApi/getApiAdmin'
  import { Postsource } from '../../../api/PostApi/PostApiAdmin'
  import { Putsource } from '../../../api/PutApi/PutAdminApi'
  import { Deletesource } from '../../../api/DeleteApi/DeleteAdminApi'
  export default {
    data () {
      return {
        search: '',
        dialog: false,
        dialog1: false,
        valid: false,
        editedItem: -1,
        source: {},
        text: '',
        headers: [
          {
            text: 'STT',
            align: 'center',
            sortable: false,
            value: 'stt',
          },
          { text: 'Nguồn hàng', align: 'center', value: 'source_name' },
          { text: 'Actions', value: 'action', sortable: false, align: 'center', },
        ],
        desserts: [],
      }
    },
    created () {
      this.listsource()
    },
    computed: {
      Source () {
        return this.$store.state.Source
      }
    },
    methods: {
      listsource () {
        getsource()
          .then(response => {
            this.desserts = response.data
          })
      },
      Add () {
        this.source = {}
        this.editedItem = -2
        this.dialog = true
        this.text = 'Thêm mới nguồn hàng'
      },
      editItem (item) {
        this.editedItem = 0
        this.source = {...item}
        this.dialog = true
      },
      Save () {
        if(this.editedItem === 0) {
          Putsource(this.source)
            .then(response => {
              this.listsource()
              this.dialog = false
            })
            .catch(error => {
              console.log(error)
            })
        } else {
          Postsource(this.source)
            .then(response => {
              this.listsource()
              this.dialog = false
            })
            .catch(error => {
              console.log(error)
            })
        }
      },
      deleteItem (item) {
        this.text = 'Xóa thông tin nguồn hàng'
        this.source = item
        this.dialog1 = true
      },
      Delete () {
        Deletesource(this.source)
          .then(response => {
            this.listsource()
          })
        this.dialog1 = false
      },
    }
  }
</script>
<style scoped>
  .portrait.v-card {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }
  .container{
    width: 40% !important;
  }
</style>
