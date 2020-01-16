<template>
  <div>
    <div class="list-thu-tuc" style="background-color: #e1e2e1">
      <div class="row-header d-flex">
        <div class="background-triangle-big"> <span>DANH SÁCH NGÀNH NGHỀ</span></div>
        <v-spacer></v-spacer>
        <v-text-field class="py-0 my-0 mr-4"  v-model="search" append-icon="search" label="Tìm kiếm" single-line hide-details></v-text-field>
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
        <v-col> 
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
            align: 'left',
            sortable: false,
            value: 'Id',
          },
          { text: 'Tên ngành nghề', value: 'name' },
          { text: 'Mô tả', value: 'desc' },
          { text: 'Actions', value: 'action', sortable: false },
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

<style lang="scss" scoped>
.btn--loader .btn__loading span{
  font-size: 12px;
}
  .background-triangle-big {
  background-color: #0b72ba;
  display: inline-block;
  padding: 9px 15px;
  width: auto;
  text-align: right;
  color: white;
  position: relative;
  margin-right: 20px;
  text-transform: uppercase;
  cursor: pointer;
}
.background-triangle-small {
  background-color: #0b72ba;
  display: inline-block;
  padding: 3px;
  width: 25px;
  text-align: right;
  color: white;
  position: relative;
  margin-right: 20px;
  text-transform: uppercase;
}

.background-triangle-small + div.header_tools, .background-triangle-big + div.header_tools {
  width: -webkit-calc( 100% - 100% );
  width: calc(100% - 100% );
  align-items: center
}
.background-triangle-big:before {
  content: "";
  position: absolute;
  top: 1px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  right: -4px;
  border-top: 28px solid #0b72ba;
  border-left: 28px solid transparent;
  border-bottom: 28px solid transparent;
}
.background-triangle-small:before {
  content: "";
  position: absolute;
  top: 1px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  right: -2px;
  border-top: 19px solid #0b72ba;
  border-left: 19px solid transparent;
  border-bottom: 19px solid transparent
}
.text-right {
  text-align: right;
}
.v-text-field > .v-input__control > .v-input__slot:before{
  position: fixed
}
</style>
