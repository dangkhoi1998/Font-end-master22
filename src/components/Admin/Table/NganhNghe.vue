<template>
  <div>
    <div class="list-thu-tuc" style="background-color: #e1e2e1">
      <div class="row-header d-flex">
        <div class="background-triangle-big"> <span>DANH SÁCH NGÀNH NGHỀ</span></div>
        <v-spacer></v-spacer>
        <v-text-field class="py-0 my-0 mr-4" v-model="search" append-icon="search" label="Tìm kiếm" single-line hide-details></v-text-field>
        <!-- <v-btn class="mr-4" color="blue">Thêm mới</v-btn> -->
      </div>
    </div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      :search="search"
      no-data-text="Không có dữ liệu"
      class="elevation-1"
    >
      <template v-slot:item.Id="{item}">
        <th :col="2">
          {{item.id}}
        </th>
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
    <!-- ssssssssssssssss -->
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  
  import { getcategory } from '../../../api/GetApi/getApiAdmin'
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'STT',
            align: 'left',
            sortable: false,
            value: 'Id',
          },
          { text: 'Tên ngành nghề', value: 'name' },
          { text: 'Mô tả', value: 'paradigm' },
          { text: 'Actions', value: 'action', sortable: false },
        ],
        desserts: [
          {
            id: '1',
            name: 'Điện tử'
          }
        ],
        items: [
          { text: 'Thêm mới', icon: 'mdi-clock' },
          { text: 'Audience', icon: 'mdi-account' },
          { text: 'Conversions', icon: 'mdi-flag' },
        ],
      }
    },
    created () {
      this.listCategory()
    },
    methods: {
      listCategory () {
        getcategory()
          .then(response => {
            console.log(response.data)
            this.desserts = response.data
          })
      },
      addItem () {

      }
    }
  }
</script>

<style>
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
</style>
