<template>
  <div>
    <div class="list-thu-tuc" style="background-color: #e1e2e1">
      <div class="row-header">
        <div class="background-triangle-big"> <span>DANH SÁCH NGÀNH NGHỀ</span> </div>
      </div>
    </div>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-container>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        desserts: [],
      }
    },
    props: {
      headers: {
        require: true,
        type: Array,
        default: null
      }
    },
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
