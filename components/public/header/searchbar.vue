<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col class="left">
        <a href="//sh.meituan.com"
          ><img
            src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
            alt="美团"
        /></a>
      </el-col>
      <el-col class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="handleInput"
            placeholder="搜索商家或地点"
          />
          <button class="el-button el-button--primary">
            <i class="el-icon-search"></i>
          </button>
          <dl v-if="isHotPlace" class="hotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlace" :key="index">{{ item }}</dd>
          </dl>
          <dl v-if="isSearchList" class="searchList">
            <dd v-for="(item, index) in searchList" :key="index">{{ item }}</dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="">故宫博物院</a>
          <a href="">故宫博物院</a>
          <a href="">故宫博物院</a>
          <a href="">故宫博物院</a>
          <a href="">故宫博物院</a>
          <a href="">故宫博物院</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="takeout">美团公寓</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col class="right">
        <ul class="security">
          <li>
            <i class="refund"></i>
            <p class="txt">随时退</p>
          </li>
          <li>
            <i class="single"></i>
            <p class="txt">不满意免单</p>
          </li>
          <li>
            <i class="overdue"></i>
            <p class="txt">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      isFocus: false,
      hotPlace: ["火锅", "火锅", "火锅", "火锅", "火锅"],
      searchList: ["炒菜", "炒菜", "炒菜", "炒菜", "炒菜"]
    };
  },

  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.search;
    },
    isSearchList: function() {
      return this.isFocus && this.search;
    }
  },

  methods: {
    handleFocus() {
      this.isFocus = true;
    },

    handleBlur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 500);
    },

    handleInput() {
      console.log(this.search);
    }
  }
};
</script>

<style lang="scss"></style>
