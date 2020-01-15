<template>
  <v-container class="my-0 py-0">
    <v-row>
      <v-col cols="3" class="my-0 py-0 px-0 mx-0">
        <v-card
          class="mx-auto"
          max-width="300"
          tile
        >
          <v-list dense class="my-0 py-0">
            <v-btn style="width: 100%" @click="addItem()">Thêm mới</v-btn>
            <v-list-item-group v-model="item" color=" #e1e2e1">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :to="item.to"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="9" class="my-0 py-0 px-0 mx-0">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { text: 'Thêm mới', icon: 'mdi-clock', to: '/admin/nganh-nghe' },
          { text: 'Audience', icon: 'mdi-account', to: '/admin/nganh-nghe' },
          { text: 'Conversions', icon: 'mdi-flag', to: '/admin/nganh-nghe' },
        ],
      }
    },
  }
</script>
