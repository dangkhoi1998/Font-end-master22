<template>
  <v-row class="mx-1">
    <v-col cols="12" md="3">
      <img width="100%" height="92%" src="https://picsum.photos/500/300?image=1" alt="">
    </v-col>
    <v-col cols="12" md="9" class="py-0 my-0">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field label="Tiêu đề" solo></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field label="Nguồn sản phẩm" solo></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" class="py-0 my-0">
          <v-textarea solo name="input-7-4" label="Miêu tả chi tiết sản phẩm"></v-textarea>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
