<template>
  <div>
    <div class="list-thu-tuc" style="background-color: #e1e2e1">
      <div class="row-header d-flex">
        <div class="background-triangle-big"> <span>Danh sách sản phẩm</span></div>
        <v-spacer></v-spacer>
        <v-text-field class="py-0 my-0 mr-4 mt-1"  v-model="search" append-icon="search" label="Tìm kiếm..." single-line hide-details></v-text-field>
      </div>
    </div>
    <v-row class="mx-0 px-0 my-0 py-0">
      <v-btn class="font-weight-regular text-none" outlined @click="checkBtn()" color="teal" tile>
        <v-checkbox v-model="checkItem" class="px-0 py-0 mx-0 my-0 mt-2 "></v-checkbox>
        <span class="mb-3">{{TextProduct}}</span>
      </v-btn>
      <div v-if="checkItem === false" class="mt-5"></div>
      <div v-else class="">
        <v-btn class="font-weight-regular text-none" tile outlined color="teal">
          <span class="mt-2">Nhập tất cả để lưu trữu</span>
        </v-btn>
        <v-btn class="font-weight-regular text-none" tile outlined color="teal">
          <span class="mt-2">Xóa tất cả khỏi danh sách nhập khẩu</span>
        </v-btn>
      </div>
    </v-row>
    <v-card color="basil" class="mb-5" v-for="item in 3" :key="item">
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="#0b72ba"
        
      >
        <div style="width: 68px; background: #f9fafb;">
          <v-checkbox class="ml-5 px-0 py-0"></v-checkbox>
        </div>
        <v-tab
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </v-tab>
        <v-spacer></v-spacer>
        <div class="text-center mt-3">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                outlined 
                v-on="on"
              >
                Thao tác
                <v-icon right dark>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                @click=""
              >
                <v-list-item-title>Chia sẻ sản phẩm </v-list-item-title>
              </v-list-item>
            </v-list>
            <v-list>
              <v-list-item
                @click=""
              >
                <v-list-item-title>Xóa sản phẩm</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card
            color="basil"
            flat
          >
            <v-card-text>
              <product></product>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card
            color="basil"
            flat
          >
            <v-card-text>22222</v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card
            color="basil"
            flat
          >
            <v-card-text>33333</v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card
            color="basil"
            flat
          >
            <v-card-text>
              <list-img></list-img>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>
<script>
  import { getproduct } from '../../../api/GetApi/getApiAdmin'
  export default {
    data () {
      return {
        tab: null,
        search: '',
        checkItem: false,
        index: '',
        TextProduct: '',
        items: [
          'Sản phẩm', 'Miêu tả', 'Deserts', 'ảnh',
        ],
        product: {},
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
    components: {
      listImg: () => import('./ListProductImage'),
      product: () => import('./Product')
    },
    created() {
      this.getItem()
    },
    methods: {
      getItem () {
        getproduct()
          .then(response => {
            console.log(response)
            this.product = response.data
            this.index = response.data.length
            this.TextProduct = 'Hiển thị ' + this.index + ' sản phẩm'
          })
      },
      checkBtn() {
        this.checkItem =! this.checkItem
        if(this.checkItem === true) {
          this.TextProduct = this.index + ' sản phẩm đã được chọn'
        } else {
          this.TextProduct = 'Hiển thị ' + this.index + ' sản phẩm'
        }
      }
    }
  }
</script>
<style>
.basil--text {
  color: #356859 !important;
}
.v-slide-group__content {
  border-bottom: 1px solid !important;
}
</style>
