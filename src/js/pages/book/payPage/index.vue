<!-- created by Allen at 2018/12/03 -->

<template>
  <div class="cancelRent-wrap">
    <div class="header-title h_140 p_top_40 ju_co_center al_it_center flex_dir_row p_left_24 p_right_24">
      <text class=" w_150 te_left icon iconfont color_ffffff font_36 fo_we_500" @click="goBack">&#xe622;</text>
      <div class="w_400 te_center h_70  ju_co_center al_it_center">
        <text class="color_ffffff font_36 te_center li_he_80">付款页面</text>
      </div>
      <text class="w_150"></text>
    </div>
  </div>
</template>

<script>
  export default{
    data:()=>({}),
    methods:{
      goBack(){
        this.$router.back()
      }
    }
  }
</script>

<style src="../common.css"></style>
<style>
  .header-title{
    position: sticky;
    background-image:linear-gradient(to bottom right,#3049cb,#197fcb);
  }
</style>