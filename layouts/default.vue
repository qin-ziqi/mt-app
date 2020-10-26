<template>
  <el-container class="layout-default">
    <el-header>
      <my-header />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
// import { Component, Vue } from "vue-property-decorator";
import MyHeader from "@/components/public/header/index.vue";
// @Component({
//   components: {
//     MyHeader
//   }
// })
// export default class extends Vue {}

export default {
  components: {
    MyHeader
  }
};
</script>

<style></style>
