<template>
  <div class="m-user">
    <!-- <template v-if="message">
      欢迎您，<span class="username">{{ message }}</span>
    </template>
    <template v-else>
      <nuxt-link class="login" to="/login">立即登录</nuxt-link>
      <nuxt-link class="register" to="/register">注册</nuxt-link>
    </template> -->
    123456
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default class User extends Vue {
  message: string = "Hello!";
}
</script>
