<template>
  <el-row class="m-header" :gutter="15">
    <el-col :span="6">
      <geo />
    </el-col>
    <!-- <el-col :span="6">
      <user />
    </el-col>
    <el-col :span="6"></el-col> -->
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Geo from "./geo.vue";
import User from "./user.vue";

@Component({
  components: {
    Geo
  }
})
export default class MyHeader extends Vue {}
</script>

<style lang="scss">
@import "@/assets/css/public/layout.scss";
</style>
