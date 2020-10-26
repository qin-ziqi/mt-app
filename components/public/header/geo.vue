<template>
  <div class="m-geo">
    <i class="el-icon-location" />北京
    <nuxt-link class="changeCity" to="/changeCity">切换城市</nuxt-link>
    [香河 廊坊 天津]
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default class Geo extends Vue {}
</script>
