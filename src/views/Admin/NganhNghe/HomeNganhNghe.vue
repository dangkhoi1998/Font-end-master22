<template>
  <div>
    <div>
      <app-Nganhnghe
      :headers="headers">
        <template v-slot:formNganhNghe="{ item }" >
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" class="py-0">
                <v-text-field v-model="item._id" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" label="Số thứ tự" filled></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" class="py-0">
                <v-text-field v-model="item.type_name"  label="Tên ngành nghề" filled></v-text-field>
              </v-col>
              <v-col cols="12"  sm="12" class="py-0">
                <v-text-field v-model="item.ancestors" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" label="Mô tả" filled></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </app-Nganhnghe>
    </div>
  </div>
</template>

<script>
  import NganhNghe from '../../../components/Admin/Table/NganhNghe'
  export default {
    data() {
      return {
        headers: [
          {
            text: 'STT',
            align: 'left',
            sortable: false,
            value: 'Id',
          },
          { text: 'Tên ngành nghề', value: 'type_name' },
          { text: 'Mô tả', value: 'paradigm' },
          { text: 'Actions', value: 'action', sortable: false },
        ],
      }
    },
    components: {
      appNganhnghe: NganhNghe
    },
  }
</script>
