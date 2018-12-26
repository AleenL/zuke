<template>
  <scroller @scroll="scroll" class="address-wrap bg_f6f6f6">
    <div class="header h_250 w_750"></div>
    <div :style="bgStyle" class="header-title h_140 p_top_30  ju_co_center al_it_center flex_dir_row p_left_24 p_right_24">
      <text class=" w_150 te_left icon iconfont color_ffffff font_36 fo_we_500" @click="goBack">&#xe622;</text>
      <div class="w_400 te_center h_70  ju_co_center al_it_center">
        <text class="color_ffffff font_36 te_center li_he_80">我的收货地址</text>
      </div>
      <text class="w_150 te_right icon iconfont color_ffffff font_32 fo_we_500">保存</text>
    </div>
    <div class="address-list m_top_24">
      <div v-for="item,index in addressList" class="address-list-item w_700 m_left_24 bg_ffffff h_450 border_ra_13 m_bottom_30">
        <div class="address-item-header border-bottom-dashed border-top h_170 ju_co_between al_it_start flex_dir_row p_top_40 p_left_24 p_right_24" :class="[checkedIndex === index ? 'bg_fef3e2':'bg_ebf4fb']">
          <div class="address-user-info">
            <div class="address-user-name flex_dir_row al_it_center ju_co_start">
              <text class="icon iconfont color_999999 font_32 ">&#xe696;</text>
              <text class="color_333333 font_28 p_left_24 fo_we_500">联系人: {{item.name}}</text>
            </div>
            <div class="address-user-phone flex_dir_row al_it_center ju_co_start m_top_24">
              <text class="icon iconfont color_999999 font_32">&#xe610;</text>
              <text class="color_333333 font_28 p_left_24 fo_we_500">联系电话: {{item.phone}}</text>
            </div>
          </div>
          <text v-if="checkedIndex === index" class="address-choose font_26 color_ffffff p_left_12 p_right_12 bg_f4a033 p_top_5 p_bottom_5 border_ra_100">默认地址</text>
        </div>
        <div class="address-item-content  p_left_24 p_right_24 m_top_30">
          <div class="address-user-phone flex_dir_row al_it_center ju_co_start">
            <text class="icon iconfont color_999999 font_32">&#xe60d;</text>
            <text class="color_333333 font_28 p_left_24 fo_we_500">收货地址：</text>
          </div>
          <text class="line2 color_666666 font_28 li_he_50 p_top_12">{{item.address}}</text>
        </div>
        <div class="address-item-bottom p_left_24 p_right_24 m_top_30 ju_co_between al_it_center flex_dir_row">
          <div v-if="checkedIndex !== index" @click="chooseChecked(index)" class="setting-checked w_200 flex_dir_row ju_co_start al_it_center">
            <text class="icon iconfont" :class="[item.checked !== true?'color_666666':'color_f4a033']">{{item.checked === true ? '&#xe668;' : '&#xe72f;'}}</text>
            <text class="color_999999 font_28 p_left_24">设为默认</text>
          </div>
          <div v-else></div>
          <div class="setting-checked w_200 flex_dir_row ju_co_between al_it_center">
            <text class="color_333333 font_28 w_100 te_left border-right">修改</text>
            <text class="color_333333 font_28 w_100 te_right">删除</text>
          </div>
        </div>
      </div>
    </div>
    <div class="address-bottom-button m_top_30 w_750 al_it_center ju_co_center">
      <div class="button w_450 h_88 flex_dir_row al_it_center ju_co_center border-0a51a3 border_ra_100">
        <text class="icon iconfont  color_0a51a3 font_36 p_right_24 ">&#xe6e0;</text>
        <text class="color_0a51a3 fong_32 ">新增地址</text>
      </div>
    </div>
  </scroller>
</template>


<script>
  import {addressList} from './config'
  export default{
    data:()=>({
      addressList:addressList,
      bgStyle:{backgroundColor:'rgba(48,73,203,0)'},
      checkedIndex:0
    }),
    methods:{
      scroll(event){
        let opacity;
        opacity = -event.contentOffset.y*0.005 > 1 ?  1 : -event.contentOffset.y*0.005
        this.bgStyle.backgroundColor = `rgba(48,73,203,${opacity})`
      },
      goBack(){
        this.$router.back()
      },
      chooseChecked(index){
        this.addressList[index].checked = !this.addressList[index].checked
        this.addressList.forEach((item,ind) => {
          if(index === ind) return;
          item.checked = false
        })
      }
    }
  }
</script>

<style src="../common.css" scoped></style>
<style scoped>
  .header {
    background-image: linear-gradient(to bottom, #3049cb, #197fcb);
    position: absolute;
    top:0;
  }

  .header-title {
    position: sticky;

  }

  .border-top {
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
  }

  .border-0a51a3 {
    border-width:1px;
    border-color:#0a51a3;
  }

  .border-right{
   border-right-width:2px;
   border-right-color:#333333;
  }

  .border-bottom-dashed {
    border-bottom-color: #999999;
    border-bottom-style: dashed;
    border-bottom-width: 2px;
  }

  .address-list-item{
    position: relative;
  }
</style>