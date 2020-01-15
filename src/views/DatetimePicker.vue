<template>
  <v-menu
    ref="menu1"
    v-model="menu1"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    full-width
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="dateFormatted"
        persistent-hint
        @blur="date = parseDate(dateFormatted)"
        v-on="on"
        :label="lableName"
        :dense="textdense"
        icon="calendar-range"
        outlined
      >
      <v-icon slot="append">mdi-calendar-month</v-icon>
      </v-text-field>
    </template>
    <v-date-picker v-model="date" no-title
    @input="menu1 = false"></v-date-picker>
  </v-menu>
</template>
<script>
  export default {
    name: 'datetime-picker',
    data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
    }),

    props: {
      textdense: {
        require: true,
        type: String,
        default: null,
      },
      lableName: {
        require: true,
        type: String,
        default: null,
      },
    },
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
        this.$emit('date', this.dateFormatted)
      },
    },
    created () {
      this.$emit('date', this.dateFormatted)
    },
    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate (date) {
        if (!date) return null
        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
  }
</script>
