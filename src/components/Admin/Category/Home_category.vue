<template>
  <div>
    <div class="list-thu-tuc" style="background-color: #e1e2e1">
      <div class="row-header d-flex">
        <div class="background-triangle-big"> <span>CHI TIẾT NGÀNH HÀNG</span></div>
      </div>
    </div>
    {{category_id}}
    <v-card>
      <v-row>
        <v-col cols="12" md="4">
          <v-sheet id="scrolling-techniques" class="overflow-y-auto" max-height="600">
            <v-card>
              <v-list dense>
                <v-subheader>REPORTS</v-subheader>
                <v-list-item-group v-model="item" color="primary">
                  <v-list-item v-for="(item, i) in category_name" :key="i" @click="listItem(item)">
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.name"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="4">1</v-col>
        <v-col cols="12" md="4">1</v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
  import { mapState, mapActions} from 'vuex'
  export default {
    data: () => ({
      item: 1,
    }),
    methods: {
      listItem (item) {
        this.$store.state.category_id = item[['id']]
      }
    },
    mounted () {
      this.$store.dispatch('loadCategory')
    },
    computed: {
      ...mapState(['category_name', 'category_id'])
    },
    mutations: {
      test(state, n) {
        state.category_id += n
      }
    }
  }
</script>