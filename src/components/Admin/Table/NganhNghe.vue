<template>
  <div>
    <div class="list-thu-tuc" style="background-color: #e1e2e1">
      <div class="row-header d-flex">
        <div class="background-triangle-big"> <span>DANH SÁCH NGÀNH NGHỀ</span></div>
        <v-spacer></v-spacer>
        <v-text-field class="py-0 my-0 mr-4 mt-1"  v-model="search" append-icon="search" label="Tìm kiếm..." single-line hide-details></v-text-field>
      </div>
    </div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="10"
      :search="search"
      no-data-text="Không có dữ liệu"
      class="elevation-1"
    >
      <template v-slot:item.Id="{item}">
        {{desserts.indexOf(item)}}
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
    <!-- Them moi nganh hang -->
    <v-dialog v-model="dialog" persistent max-width="450">
      <v-card>
        <v-card-title class="headline mb-4" style="background: #0b72ba">
          <span style="color: white">Thêm mới nghành hàng 
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
          <v-text-field v-model="category.name" color="deep-purple" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" filled dense hide-details="auto"></v-text-field>

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
    <!-- xóa categroy -->
    <v-dialog v-model="dialog1" persistent max-width="500px">
      <v-card>
        <v-card-title style="background: #0b72ba; color: white;" class="headline">Bạn có chắc chẵn xóa?
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog1 = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-simple-table class="mx-5">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Tên ngành nghề</th>
                <th class="text-left">Mô tả</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ category.name }}</td>
                <td>{{ category.desc }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#0b72ba" style="color: white" @click="Delete()" > Xóa </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import { getcategory } from '../../../api/GetApi/getApiAdmin'
  import { Postcategory } from '../../../api/PostApi/PostApiAdmin'
  import { Putcategory} from '../../../api/PutApi/PutAdminApi'
  import { Deletecategory } from '../../../api/DeleteApi/DeleteAdminApi'
  export default {
    data () {
      return {
        search: '',
        editedIndex: -1,
        dialog1: false,
        headers: [
          {
            text: 'STT',
            align: 'center',
            sortable: false,
            value: 'Id',
          },
          { text: 'Tên ngành nghề', value: 'name' },
          { text: 'Mô tả', value: 'desc' },
          { text: 'Actions', value: 'action', sortable: false, align: 'center', },
        ],
        category: {},
        desserts: [
        ],
        items: [
          { text: 'Thêm mới', icon: 'mdi-clock' },
          { text: 'Audience', icon: 'mdi-account' },
          { text: 'Conversions', icon: 'mdi-flag' },
        ],
      }
    },
    computed: {
      dialog () {
        return this.$store.state.dialog
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
      Back () {
        this.$store.state.dialog = false
      },
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.category = Object.assign({}, item)
        this.$store.state.dialog = true
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
      deleteItem (item) {
        this.category = item
        this.dialog1 = true
      },
      Delete () {
        Deletecategory(this.category)
          .then(reponse => {
            const index = this.desserts.indexOf(this.category)
            this.desserts.splice(this.category, 1)
            this.dialog1 = false
          })
          .catch(error => {
            console.log(error)
          })
      }
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
</style>
