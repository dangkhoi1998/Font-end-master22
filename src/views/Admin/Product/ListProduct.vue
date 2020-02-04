<template>
  <div>
    <div class="list-thu-tuc" style="background-color: #e1e2e1">
      <div class="row-header d-flex">
        <div class="background-triangle-big"> <span>Danh sách sản phẩm</span></div>
        <v-spacer></v-spacer>
        <v-text-field class="py-0 my-0 mr-4 mt-1"  v-model="search" append-icon="search" label="Tìm kiếm..." single-line hide-details></v-text-field>
      </div>
    </div>
    <v-card color="basil">
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
  export default {
    data () {
      return {
        tab: null,
        search: '',
        items: [
          'Sản phẩm', 'Miêu tả', 'Deserts', 'ảnh',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
    components: {
      listImg: () => import('./ListProductImage'),
      product: () => import('./Product')
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
