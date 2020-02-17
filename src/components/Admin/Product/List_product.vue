<template>
  <div>
    <v-row>
      <v-col cols="12" md="3">
        <img width="100%" height="100%" src="https://picsum.photos/500/300?image=1" alt="">
      </v-col>
      <v-col cols="12" md="9" style="color: black">
        <p class="font-weight-medium mb-1">Tiêu đề ban đầu:</p>
        <p class="font-weight-medium mb-1">{{lisProduct.title.suppler_title}}</p>
        <p class="mb-1">Bởi:{{lisProduct.title}}</p>
        <label class="mb-1">Thay đổi tiều để:</label>
        <v-text-field placeholder="Thay đổi tiêu đề" color="deep-purple" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" filled dense hide-details="auto"></v-text-field>
        <label class="mb-1 mt-2">Bộ sưu tập:</label>
        <v-text-field placeholder="Bộ sưu tập" color="deep-purple" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" filled dense hide-details="auto"></v-text-field>
        <v-row class="mt-2">
          <v-col cols="6" class="my-0 py-0">
            <label class="my-0 py-0">Kiểu:</label>
            <v-text-field placeholder="Kiểu" color="deep-purple" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" filled dense hide-details="auto"></v-text-field>
          </v-col>
          <v-col cols="6" class="my-0 py-0">
            <label class="my-0 py-0">Tags:</label>
            <v-text-field placeholder="Tags" color="deep-purple" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" filled dense hide-details="auto"></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    lisProduct: {
      require: true,
      type: [Array, Object],
      default: null
    },
  }
}
</script>