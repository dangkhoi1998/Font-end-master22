<template>
  <div>
    <div class="list-thu-tuc" style="background-color: #e1e2e1">
      <div class="row-header d-flex">
        <div class="background-triangle-big"> <span>ngành hàng</span></div>
      </div>
    </div>
    <v-row class="mx-2">
      <v-col cols="12" md="4" class="mr-0 my-0 py-0">
        <v-card class="mt-3">
          <v-skeleton-loader
            :loading="load"
            type="list-item-three-line"
          >
            <v-sheet id="scrolling-techniques" class="overflow-y-auto" max-height="350">
              <v-container style="height: 350px" class="mx-0 px-0 my-0 py-0">
                <v-list dense class="mx-0 px-0 my-0 py-0">
                  <v-subheader >
                    <v-text-field class="py-0 my-0 mt-1" v-model="search" append-icon="search" label="Tìm kiếm..." single-line hide-details></v-text-field>
                    <v-btn text class="mx-0 px-0 my-0 py-0" @click="AddCategory()">
                      <v-icon class="mx-0 px-0 my-0 py-0">mdi-plus-thick</v-icon>
                    </v-btn>
                  </v-subheader>
                  <v-list-item-group color="primary">
                    <v-list-item
                      v-for="(item, i) in searching"
                      :key="i"
                      @click="listItem(item)"
                      @contextmenu.prevent="show($event, item)">
                      <v-tooltip bottom >
                        <template v-slot:activator="{ on }">
                          <v-list-item-content v-on="on">
                            <v-list-item-title> {{item.name}}</v-list-item-title>
                          </v-list-item-content>
                          <v-list-item-icon v-on="on">
                            <v-icon>mdi-chevron-right</v-icon>
                          </v-list-item-icon>
                        </template>
                        <span>{{item.desc}}</span>
                      </v-tooltip>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-container>
            </v-sheet>
          </v-skeleton-loader>
        </v-card>
      </v-col>
      <!-- //category1 -->
      <v-col cols="12" md="4" class=" my-0 py-0">
        <v-card class="mt-3">
          <v-skeleton-loader
            :loading="load"
            type="list-item-three-line"
          >
            <v-sheet id="scrolling-techniques" class="overflow-y-auto" max-height="350">
              <v-container style="height: 350px" class="mx-0 px-0 my-0 py-0">
                <v-list dense class="mx-0 px-0 my-0 py-0">
                  <v-subheader>
                    <v-text-field v-if="test" class="py-0 my-0 mt-1" v-model="search1" append-icon="search" label="Tìm kiếm..." single-line hide-details></v-text-field>
                    <v-btn v-if="test" text class="mx-0 px-0 my-0 py-0" @click="AddCategory1()">
                      <v-icon class="mx-0 px-0 my-0 py-0">mdi-plus-thick</v-icon>
                    </v-btn>
                  </v-subheader>
                  <v-list-item-group  color="primary">
                    <v-list-item 
                      v-for="(item, i) in searching1"
                      :key="i"
                      @click="listItem1(item)"
                      @contextmenu.prevent="show1($event, item)">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <v-list-item-content v-on="on">
                            <v-list-item-title> {{item.name}}</v-list-item-title>
                          </v-list-item-content>
                          <v-list-item-icon v-on="on">
                            <v-icon>mdi-chevron-right</v-icon>
                          </v-list-item-icon>
                        </template>
                        <span>{{item.desc}}</span>
                      </v-tooltip>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-container>
            </v-sheet>
          </v-skeleton-loader>
        </v-card>
      </v-col>
      <!-- //category2 -->
      <v-col cols="12" md="4" class="my-0 py-0">
        <v-card class="mt-3">
          <v-skeleton-loader
            :loading="load"
            type="list-item-three-line"
          >
            <v-sheet id="scrolling-techniques" class="overflow-y-auto" max-height="350">
              <v-list dense class="mx-0 px-0 my-0 py-0">
                <v-container style="height: 350px" class="mx-0 px-0 my-0 py-0">
                  <v-subheader>
                    <v-text-field v-if="test1" class="py-0 my-0 mt-1" v-model="search2" append-icon="search" label="Tìm kiếm..." single-line hide-details></v-text-field>
                    <v-btn v-if="test1" text class="mx-0 px-0 my-0 py-0" @click="AddCategory2()">
                      <v-icon class="mx-0 px-0 my-0 py-0">mdi-plus-thick</v-icon>
                    </v-btn>
                  </v-subheader>
                  <v-list-item-group  color="primary">
                    <v-list-item
                      v-for="(item, i) in searching2"
                      :key="i"
                      @click="listItem2(item)"
                      @contextmenu.prevent="show2($event, item)">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <v-list-item-content v-on="on">
                            <v-list-item-title> {{item.name}}</v-list-item-title>
                          </v-list-item-content>
                        </template>
                        <span>{{item.desc}}</span>
                      </v-tooltip>
                    </v-list-item>
                  </v-list-item-group>
                </v-container>
              </v-list>
            </v-sheet>
          </v-skeleton-loader>
        </v-card>
      </v-col>
      <v-col cols="12" >
        <v-card height="150">
          <v-skeleton-loader
            :loading="load"
            type="list-item"
          >
            <v-card-text>
              <span class="font-weight-medium " style="font-size: 18px;">Đã chọn :</span>
              <span style="color: #f26522">
                {{test.name}}<v-icon v-if="test1.id" color="#f26522">mdi-chevron-right</v-icon>
                {{test1.name}}<v-icon v-if="test2.id" color="#f26522">mdi-chevron-right</v-icon>
                {{test2.name}}
              </span>
            </v-card-text>
          </v-skeleton-loader>
          <v-skeleton-loader
            class="ml-3"
            :loading="load"
            type="button"
          >
            <v-btn class="ml-3 " :disabled="!valid1" color="#f26522"><span style="color:white;">Tiếp theo nào ae</span></v-btn>
          </v-skeleton-loader>
        </v-card>
      </v-col>
    </v-row>
    <!-- thêm mới ngành hành -->
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
            <v-btn color="#0b72ba" :disabled="!valid" @click="AddItem()"><span style="color: white">Lưu lại</span></v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
    <!--  -->
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
      </v-list>
    </v-menu>
    <!--  -->
    <v-menu
      v-model="showMenu1"
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
        <v-list-item @click="deleteItem()">
          <v-list-item-title>
            <v-icon small class="mr-2" >delete</v-icon>
            Xóa
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
  import { mapState, mapActions} from 'vuex'
  export default {
    data: () => ({
      test: '',
      test1: '',
      test2: {},
      search: '',
      search1: '',
      search2: '',
      loading: true,
      dialog: false,
      category: {
        parent_id: null
      },
      valid: false,
      valid1: false,
      text: 'Thêm mới',
      showMenu: false,
      showMenu1: false,
      x: 0,
      y: 0,
      addEdit: -1,
    }),
    methods: {
      listItem (item) {
        this.test = item
        this.test1 = {}
        this.test2 = {}
        this.valid1 = false
        this.$store.state.category1 = []
        this.$store.state.category2 = []
        this.$store.commit('SET_CATEGORY_ID', item['id'])
      },
      listItem1 (item) {
        this.test1 = item
        this.test2 = {}
        this.valid1 = false
        this.$store.state.category2 = []
        this.$store.state.category2 = []
        this.$store.commit('SET_CATEGORY_ID1', item['id'])
      },
      listItem2 (item) {
        this.test2 = item
        this.valid1 = true
      },
      AddCategory () {
        this.category = {}
        this.addEdit = 1
        this.dialog = true
      },
      AddCategory1 () {
        this.AddCategory()
        this.addEdit = 1
        this.$store.state.categoryAdd = 0
        this.category.parent_id = this.test.id
      },
      AddCategory2 () {
        this.AddCategory()
        this.addEdit = 1
        this.$store.state.categoryAdd = 2
        this.category.parent_id = this.test1.id
      },
      Back () {
        this.dialog = false
      },
      AddItem () {
        if(this.addEdit === -1) {
          this.$store.dispatch('PutCategory', this.category)
          this.Back()
        } else {
          this.$store.dispatch('postCategory', this.category)
          this.Back()
        }
      },
      show (e, item) {
        e.preventDefault()
        this.showMenu = false
        this.showMenu1 = false
        this.x = e.clientX
        this.y = e.clientY
        this.$nextTick(() => {
          this.category = Object.assign({}, item)
          this.showMenu = true
        })
      },
      show1 (e, item) {
        this.$store.state.categoryAdd = 0
        e.preventDefault()
        this.showMenu = false
        this.showMenu1 = false
        this.x = e.clientX
        this.y = e.clientY
        this.$nextTick(() => {
          this.category = Object.assign({}, item)
          this.showMenu1 = true
        })
      },
      show2 (e, item) {
        this.$store.state.categoryAdd = 1
        e.preventDefault()
        this.showMenu = false
        this.showMenu1 = false
        this.x = e.clientX
        this.y = e.clientY
        this.$nextTick(() => {
          this.category = Object.assign({}, item)
          this.showMenu1 = true
        })
      },
      editItem () {
        this.addEdit = -1
        this.dialog = true
      },
      deleteItem () {
        this.$store.dispatch('deletecategory', this.category)
      }
    },
    mounted () {
      this.$store.dispatch('loadCategory')
    },
    computed: {
      ...mapState(['category_name', 'category_id', 'category1', 'category2']),
      load () { 
        if(this.category_name.length === 0) {
          return this.loading = true
        } else {
          return this.loading = false
        }
      },
      searching () {
        if (!this.search) return this.category_name
        const search = this.search.toLowerCase()
        return this.category_name.filter(item => {
          const text = item.name.toLowerCase()
          return text.indexOf(search) > -1
        })
      },
      searching1 () {
        if (!this.search1) return this.category1
        const search1 = this.search1.toLowerCase()
        return this.category1.filter(item => {
          const text = item.name.toLowerCase()
          return text.indexOf(search1) > -1
        })
      },
      searching2 () {
        if (!this.search2) return this.category2
        const search1 = this.search2.toLowerCase()
        return this.category2.filter(item => {
          const text = item.name.toLowerCase()
          return text.indexOf(search1) > -1
        })
      },
    },
    mutations: {
    }
  }
</script>
<style>
  #slide {
    animation-duration: 3s;
    animation-name: slidein;
  }

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%; 
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }  
</style>