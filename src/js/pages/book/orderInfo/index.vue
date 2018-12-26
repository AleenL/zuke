<!-- created by allen at 2018/11/27 -->

<template>
  <scroller class="order-info-wrap bg_f0eff4 p_bottom_120">
    <div class="header-title h_140 p_top_40 ju_co_center al_it_center flex_dir_row p_left_24 p_right_24">
      <text class=" w_150 te_left icon iconfont color_ffffff font_36 fo_we_500" @click="goBack">&#xe622;</text>
      <div class="w_400 te_center h_70  ju_co_center al_it_center">
        <text class="color_ffffff font_36 te_center li_he_80">订单详情</text>
      </div>
      <text class="w_150"></text>
    </div>
    <div class="order-info-content m_left_24  m_top_30 w_700 h_600 border_ra_13 bg_ffffff">
      <div class="order-head border_bottom  p_bottom_30">
        <div class="p_left_30 flex_dir_row ju_co_between al_it_center p_top_40">
          <text class="font_26 color_999999">订单编号：8886676567</text>
          <image src="bmlocal://assets/icon/wait_goods.png" class="w_100 h_50"></image>
        </div>
        <text class="font_26 color_999999 p_top_24 p_left_30">下单时间：2018-11-22 09:22:19</text>
      </div>
      <div class="order-user p_bottom_24 border_bottom-dash">
        <text class="p_top_24 color_333333 font_30 fo_we_500 p_left_30">收货人信息</text>
        <text class="font_26 color_666666 p_top_24 p_left_30">收货人：张老师</text>
        <text class="font_26 color_666666 p_top_12 p_left_30">电话：18765678878</text>
        <text class="font_26 color_666666 p_top_12 p_left_30">地址：广州市天河区林和东路200号珠江西苑</text>
      </div>
      <div>
        <div v-for="item,index in goodsList"
             class="w_700 p_left_24 p_right_24 h_220 bg_ffffff border_ra_13  flex_dir_row ju_co_start al_it_center">
          <image :src="item.image_src" class="h_200 w_200" resize="contain"></image>
          <div class="m_left_20 h_160">
            <text class="color_333333 fo_we_500  font_32 h_50">{{item.title}}</text>
            <div class="label flex_dir_row h_50 al_it_center ju_co_start flex_row">
              <text v-for="ite,ind in item.label_tag" class=" color_666666 font_26 m_right_12 border_ra_100 label_tag">{{ite}}</text>
            </div>
            <div class="goods-price flex_dir_row h_50 ju_co_start al_it_end">
              <text class="font_32 color_0a51a3 fo_we_500">¥{{item.price_total}}/</text>
              <text class="font_28 color_666666 fo_we_500">{{item.days}}天</text>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="order-cash bg_ffffff m_top_50 w_700 m_left_24 border_ra_13">
      <div class="order-detail-title h_80 p_right_24 p_left_24 border_bottom-dash flex_dir_row ju_co_between al_it_end p_bottom_20">
        <text class="font_30 color_333333 fo_we_500 p_left_12">金额结算</text>
        <text class="font_28 color_f4a033 p_right_12">寻求帮助 ?</text>
      </div>
      <div class="order-detail-title h_80 p_right_24 p_left_24 border_bottom-dash flex_dir_row ju_co_between al_it_end p_bottom_20">
        <div class="p_left_30 flex_dir_row ju_co_start al_it_end">
          <text class=" icon iconfont color_0a51a3 font_34 fo_we_500">&#xe608;</text>
          <text class="font_28 color_999999 p_left_12">租金金额:</text>
        </div>
        <text class="font_28 color_666666 p_right_30">¥180.00</text>
      </div>
      <div class="order-detail-title h_80 p_right_24 p_left_24 border_bottom-dash flex_dir_row ju_co_between al_it_end p_bottom_20">
        <div class="p_left_30 flex_dir_row ju_co_start al_it_end">
          <text class=" icon iconfont color_0a51a3 font_34 fo_we_500">&#xe61d;</text>
          <text class="font_28  color_999999 p_left_12">押金金额:</text>
        </div>
        <text class="font_28 color_666666 p_right_30">¥2300.00</text>
      </div>
      <div class="order-detail-title h_80 p_right_24 p_left_24 border_bottom-dash flex_dir_row ju_co_between al_it_end p_bottom_20">
        <div class="p_left_30 flex_dir_row ju_co_start al_it_end">
          <text class=" icon iconfont color_0a51a3 font_34 fo_we_500">&#xe63f;</text>
          <text class="font_28  color_999999 p_left_12">优惠:</text>
        </div>
        <text class="font_28 color_666666 p_right_30">-¥50.00</text>

      </div>
      <div class="order-detail-title h_80 p_right_24 p_left_24 border_bottom_solid flex_dir_row ju_co_between al_it_end p_bottom_20">
        <div class="p_left_30 flex_dir_row ju_co_start al_it_end">
          <text class=" icon iconfont color_0a51a3 font_34 fo_we_500">&#xe609;</text>
          <text class="font_28  color_999999  p_left_12">订单总额</text>
        </div>
        <text class="font_28 color_666666 p_right_30">¥2430.00</text>
      </div>
    </div>
    <div class="order-cash bg_ffffff m_top_24 w_700 m_left_24 border_ra_13">
      <div class="order-detail-title h_80 p_right_24 p_left_24  border_bottom-dash flex_dir_row ju_co_between al_it_end p_bottom_20">
        <text class="font_30 color_333333 fo_we_500 p_left_12">备注</text>
        <text class="font_28 color_f4a033 p_right_12"></text>
      </div>
      <text class="p_left_24 p_right_24 p_top_24 p_bottom_24 color_666666 font_26 line2 li_he_40">下午三点或者四点可以交货，楼下有咖啡馆可以在咖啡馆里面是机，随机赠送的游戏不能挑选，望周知</text>
    </div>
    <div class="flex_dir_row bottom-button h_88">
      <text class="w_375 bg_ff8527 color_ffffff li_he_88 te_center" @click="cancelRent">取消租用</text>
      <text class="w_375 bg_1367b6 color_ffffff li_he_88 te_center">确认收货</text>
    </div>
  </scroller>
</template>

<script>
  export default{
    data:()=>({
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
    methods:{
      goBack(){
        this.$router.back()
      },
      cancelRent(){
        this.$router.open({
          name:'cancelRent'
        })
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
  .border_bottom{
    border-bottom-width:1px;
    border-bottom-color:#d1d1d1;
  }
  .border_bottom-dash{
    border-bottom-width:2px;
    border-bottom-color:#d1d1d1;
    border-bottom-style: dashed;
  }
  .bottom-button{
    position: fixed;
    bottom:0;
  }
</style>