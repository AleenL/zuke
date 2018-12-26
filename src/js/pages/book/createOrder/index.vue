<!--created by allen on 2018/05/29-->

<template>
  <scroller @scroll="scroll" class="order-wrap flex_ite_1 bg_ffffff p_bottom_120">
    <div class="header w_750"></div>
    <div :style="bgStyle" class="header-title h_140 p_top_40  ju_co_center al_it_center flex_dir_row p_left_24 p_right_24">
      <text class=" w_150 te_left icon iconfont color_ffffff font_36 fo_we_500" @click="goBack">&#xe622;</text>
      <div class="w_400 te_center h_70  ju_co_center al_it_center">
        <text class="color_ffffff font_36 te_center li_he_80">确认订单</text>
      </div>
      <text class="w_150 te_right icon iconfont color_ffffff font_32 fo_we_500" @click="goOrderList">订单中心</text>
    </div>
    <div class="order-info w_700 h_650 m_left_24 bg_ffffff border_ra_13">
      <div class="shadow-box po_absolute h_100 bg_ffffff "></div>
      <div class="seller-info border-top bg_ebf4fb p_bottom_30 border-bottom-dashed">
        <text class="m_top_24 te_center class_333333 font_32">收货人信息</text>
        <div class="m_top_30 ju_co_between al_it_center flex_dir_row h_60 p_left_30 p_right_30" @click="goAddress">
          <text class="w_500 color_333333 font_32 line1">重庆市 沙坪坝区 大学城 世纪家园A栋12-14</text>
          <text class=" icon iconfont color_333333 font_34">&#xe62e;</text>
        </div>
      </div>
      <div class="goods-info border-bottom-dashed">
        <text class="font_32 fo_we_500 m_top_30 te_center">商品信息</text>
        <div v-for="item,index in goodsList"
             class="w_700 p_left_24 p_right_24 h_220 bg_ffffff border_ra_13  flex_dir_row ju_co_start al_it_center">
          <image :src="item.image_src" class="h_200 w_200" resize="contain"></image>
          <div class="m_left_20 h_160">
            <text class="color_0a51a3 font_32 h_50">{{item.title}}</text>
            <div class="label flex_dir_row h_50 al_it_center ju_co_start flex_row">
              <text v-for="ite,ind in item.label_tag" class=" color_666666 font_26 m_right_12 border_ra_100 label_tag">{{ite}}</text>
            </div>
            <div class="goods-price flex_dir_row h_50 ju_co_start al_it_end">
              <text class="font_32 color_f4a033 fo_we_500">¥{{item.price_total}}/</text>
              <text class="font_28 color_666666 fo_we_500">{{item.days}}天</text>
            </div>
          </div>
        </div>
      </div>
      <div class="order-info-items bg_ffffff border-bottom">
        <div class="flex_dir_row  p_left_40 p_right_40 order-info-item border_bottom_solid h_90 ju_co_between al_it_center">
          <text class="color_333333">发票信息</text>
          <div class="flex_dir_row h_100 ju_co_between al_it_center w_200">
            <text class="color_666666">不开发票</text>
            <text class=" icon iconfont color_666666 font_30">&#xe62e;</text>
          </div>
        </div>
        <div class="flex_dir_row  p_left_40 p_right_40 order-info-item h_90 ju_co_between al_it_center">
          <text class="color_333333">交易方式</text>
          <div class="flex_dir_row h_100 ju_co_between al_it_center w_200">
            <text class="color_666666">线下自取</text>
          </div>
        </div>
      </div>
    </div>
    <div class="order-cash bg_ffffff">
      <div class="order-detail-title h_80 m_right_24 m_left_24 border_bottom_solid flex_dir_row ju_co_between al_it_end p_bottom_20">
        <text class="font_32 color_333333 fo_we_500 p_left_12">金额结算</text>
        <text class="font_28 color_f4a033 p_right_12">寻求帮助 ?</text>
      </div>
      <div class="order-detail-title h_80 m_right_24 m_left_24 border_bottom_solid flex_dir_row ju_co_between al_it_end p_bottom_20">
        <div class="p_left_30 flex_dir_row ju_co_start al_it_end">
          <text class=" icon iconfont color_0a51a3 font_34 fo_we_500">&#xe608;</text>
          <text class="font_28 color_999999 p_left_12">租金金额:</text>
        </div>
        <text class="font_28 color_666666 p_right_30">¥180.00</text>
      </div>
      <div class="order-detail-title h_80 m_right_24 m_left_24 border_bottom_solid flex_dir_row ju_co_between al_it_end p_bottom_20">
        <div class="p_left_30 flex_dir_row ju_co_start al_it_end">
          <text class=" icon iconfont color_0a51a3 font_34 fo_we_500">&#xe61d;</text>
          <text class="font_28  color_999999 p_left_12">押金金额:</text>
        </div>
        <text class="font_28 color_666666 p_right_30">¥2300.00</text>
      </div>
      <div @click="goTicked" class="order-detail-title h_80 m_right_24 m_left_24 border_bottom_solid flex_dir_row ju_co_between al_it_end p_bottom_20">
        <div class="p_left_30 flex_dir_row ju_co_start al_it_end">
          <text class=" icon iconfont color_0a51a3 font_34 fo_we_500">&#xe63f;</text>
          <text class="font_28  color_999999 p_left_12">优惠:</text>
        </div>
        <div class="p_left_30 flex_dir_row ju_co_start al_it_end">
          <text class="font_28 color_666666">-¥50.00</text>
          <text class="font_28 icon iconfont color_999999 p_left_12">&#xe62e;</text>
        </div>

      </div>
      <div class="order-detail-title h_80 m_right_24 m_left_24 border_bottom_solid flex_dir_row ju_co_between al_it_end p_bottom_20">
        <div class="p_left_30 flex_dir_row ju_co_start al_it_end">
          <text class=" icon iconfont color_0a51a3 font_34 fo_we_500">&#xe609;</text>
          <text class="font_28  color_999999  p_left_12">订单总额</text>
        </div>
        <text class="font_28 color_666666 p_right_30">¥2430.00</text>
      </div>
    </div>
    <div class="bg_ffffff m_top_30">
      <div class="order-detail-title h_80 flex_dir_row ju_co_between al_it_end p_bottom_20">
        <text class="font_32 color_333333 fo_we_500 p_left_24 m_left_12">订单备注</text>
        <text class="font_28 color_f4a033 p_right_12"></text>
      </div>
      <textarea  class="w_700 color_666666 h_200 bg_dddddd m_left_24 border_ra_13 p_top_12 p_bottom_12 p_left_12 p_right_12 textarea" rows='9'  maxlength="101"  @input="oninput" @change="onchange"></textarea>
    </div>
    <text class="bottom-button h_88 w_750 bg_1367b6 color_ffffff li_he_88 font_34 te_center" @click="goOrderInfo">提交订单</text>
  </scroller>
</template>

<script>
  export default{
    data: ()=>({
      bgStyle:{backgroundColor:'rgba(48,73,203,0)'},
      goodsList: [{
        title: 'ps4主机加2个游戏',
        amount: '1',
        deposit: '1500',
        price_total: '180.00',
        days: '30',
        deposit_total: '1500.00',
        label_tag: ['ps4主机', '限定版', '双手柄'],
        image_src: 'bmlocal://assets/goods/goods1.jpg'
      }]
    }),
    methods: {
      goBack(){
        this.$router.back()
      },
      goAddress(){
        this.$router.open({
          name:'myAddress'
        })
      },
      goTicked(){
        this.$router.open({
          name:'ticket'
        })
      },
      goOrderInfo(){
        this.$router.open({
          name:'payPage'
        })
      },
      goOrderList(){
        this.$router.open({
          name:'orderList'
        })
      },
      scroll(event){
        let opacity;
        opacity = -event.contentOffset.y*0.005 > 1 ?  1 : -event.contentOffset.y*0.005
        this.bgStyle.backgroundColor = `rgba(48,73,203,${opacity})`
      }
    }
  }
</script>

<style src="../common.css" scoped></style>
<style>
  .header {
    background-image: linear-gradient(to bottom, #3049cb, #197fcb);
    height:625px;
    position: absolute;
    top:0;
  }

  .textarea {

  }

  .order-info {
    position: absolute;
    top: 150px;
  }

  .border-top {
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
  }

  .border-bottom {
    border-bottom-left-radius: 13px;
    border-bottom-right-radius: 13px;
  }

  .border-bottom-dashed {
    border-bottom-color: #999999;
    border-bottom-style: dashed;
    border-bottom-width: 2px;
  }

  .header-title {
    position: sticky;
  }

  .border_bottom_solid {
    border-bottom-color: #d1d1d1;
    border-bottom-width: 1px;
  }

  .order-cash {
    margin-top: 700px;

  }

  .shadow-box {
    top: 540px;
    position: absolute;
    margin-left: 20px;
    width: 670px;
    box-shadow: 0 5px 20px #1a6abc;
  }

  .bottom-button{
    position: fixed;
    bottom:0;
  }
</style>