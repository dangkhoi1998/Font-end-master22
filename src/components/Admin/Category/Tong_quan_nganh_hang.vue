<template>
  <div class="white">
    <div class="list-thu-tuc" style="background-color: #e1e2e1">
      <div class="row-header d-flex">
        <div class="background-triangle-big"> <span>TỔNG QUAN NGÀNH HÀNG</span></div>
        <v-spacer></v-spacer>
        <v-text-field class="py-0 my-0 mr-4 mt-1"  v-model="search" append-icon="search" label="Tìm kiếm..." single-line hide-details></v-text-field>
        
      </div>
    </div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="#0b72ba"  @click="Add()">
        <span style="color: white">Thêm mới</span>
      </v-btn>
    </v-card-actions>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="10"
      :search="search"
      no-data-text="Không có dữ liệu"
      class="elevation-1"
    >
      <template v-slot:body="{items}">
        <tbody>
          <tr v-for="item in items" :key="item.source_name" @contextmenu.prevent="show($event, item)">
            <td>{{desserts.indexOf(item) + 1}}</td>
            <td>{{item.name}}</td>
            <td >{{item.desc}}</td>
            <v-menu
              v-model="showMenu"
              :position-x="x"
              :position-y="y"
              absolute
              offset-y
            >
              <v-list>
                <v-list-item @click="editItem()">
                  <v-list-item-title>
                    <v-icon small class="mr-2" color="blue" >edit</v-icon>
                    Sửa
                  </v-list-item-title>
                </v-list-item>
                <!-- <v-list-item @click="deleteItem()">
                  <v-list-item-title>
                    <v-icon small class="mr-2" >delete</v-icon>
                    Xóa
                  </v-list-item-title>
                </v-list-item> -->
              </v-list>
            </v-menu>
          </tr>
        </tbody>
      </template>
    </v-data-table>
    <!-- Them moi nganh hang -->
    <v-dialog v-model="dialog" persistent max-width="450">
      <v-form v-model="valid">
        <v-card>
          <v-card-title class="headline mb-4" style="background: #0b72ba">
            <span style="color: white">{{text}} 
            </span>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="Back()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-col class="my-0 py-0"> 
            <label class="my-0 py-0 font-weight-bold">Ngành hàng
              <span style="color: red">(*)</span>
            </label>
            <v-text-field v-model="category.name" required outlined dense placeholder="Ngành hàng" color="deep-purple" :rules="[v => !!v || 'Thông tin bắt buộc ' ]"  hide-details="auto"></v-text-field>

            <label class=" mt-3 my-0 py-0 font-weight-bold" >Mô tả nghành hàng 
              <span style="color: red">(*)</span>
            </label>
            <v-textarea v-model="category.desc" placeholder="Mô tả nghành hàng" required outlined dense name="input-7-4" rows="2"></v-textarea>
          </v-col>
            
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#0b72ba" :disabled="!valid" @click="AddItem()"><lable style="color: white">Lưu lại</lable></v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
    <!-- xóa categroy -->
  </div>
</template>
<script>
  import { getcategory } from '../../../api/GetApi/getApiAdmin'
  import { Postcategory } from '../../../api/PostApi/PostApiAdmin'
  import { Putcategory} from '../../../api/PutApi/PutAdminApi'
  export default {
    data () {
      return {
        search: '',
        valid: false,
        dialog: false,
        editedIndex: -1,
        
        headers: [
          {
            text: 'STT',
            align: 'center',
            sortable: false,
            value: 'Id',
          },
          { text: 'Tên ngành nghề', value: 'name', align: 'center', },
          { text: 'Mô tả', value: 'descs', align: 'center', },
        ],
        category: {},
        desserts: [
        ],
        items: [
          { text: 'Thêm mới', icon: 'mdi-clock' },
          { text: 'Audience', icon: 'mdi-account' },
          { text: 'Conversions', icon: 'mdi-flag' },
        ],
        showMenu: false,
        x: 0,
        y: 0,
        text: 'Thêm mới nghành hàng'
      }
    },
    created () {
      this.listCategory()
    },
    methods: {
      listCategory () {
        getcategory()
          .then(response => {
            this.desserts = response.data
          })
      },
      Add () {
        this.category = {}
        this.text = 'Thêm mới nghành hàng'
        this.dialog = true
      },
      Back () {
        this.dialog = false
      },
      editItem () {
        this.text = 'Sửa nghành hàng'
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
          Postcategory(this.category)
            .then(reponse => {
              this.desserts.push(this.category)
            })
            .catch(error => {
              console.log(error)
            })
        }
        this.Back()
      },
      show (e, item) {
        console.log(item['id'])
        e.preventDefault()
        this.showMenu = false
        this.x = e.clientX
        this.y = e.clientY
        this.$nextTick(() => {
          this.editedIndex = this.desserts.indexOf(item)
          this.category = Object.assign({}, item)
          this.showMenu = true
        })
      },
    }
  }
</script>
<style>
  .mr-4 .v-input__slot {
    position: inherit !important;
  }

table.v-datatable td:nth-child(1) {
  width: 8%;
  padding: 0px ! important;
  text-align: center ! important;
}
table.v-datatable td:nth-child(2) {
  width: 65%;
  padding: 0px ! important;
}
table.v-datatable td:nth-child(3) {
  width: 15%;
 padding: 0px ! important;
}
table.v-datatable td:nth-child(4) {
  width: 10%;
  padding: 0px ! important;
}
.text-xs-right input {
  text-align: right;
}
.v-text-field > .v-input__control > .v-input__slot:before{
  position: fixed
}
</style>
