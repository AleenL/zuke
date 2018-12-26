<!-- created by allen at 2018/11/27 -->

<template>
  <scroller class="ticket-wrap bg_f0eff4 p_bottom_120">
    <div class="header-title h_140 p_top_40 bg_fcfcfc ju_co_center al_it_center flex_dir_row p_left_24 p_right_24">
      <text class=" w_150 te_left icon iconfont color_333333 font_36 fo_we_500" @click="goBack">&#xe622;</text>
      <div class="w_400 te_center h_70  ju_co_center al_it_center">
        <text class="color_333333 font_36 te_center li_he_80">我的优惠券</text>
      </div>
      <text class="w_150 te_right icon iconfont color_ffffff font_32 fo_we_500" >订单中心</text>
    </div>
    <div class="no-use-ticket flex_dir_row ju_co_between h_100 bg_ffffff al_it_center border-top p_left_24 p_right_24">
      <text class="color_333333 font_32">不使用优惠券</text>
      <text class="color_999999 font_40 icon iconfont">&#xe72f;</text>
    </div>
    <div class="ticket-list p_left_24 p_right_24">
      <div v-for="item,index in ticketList" class="h_200 m_top_24 ticket-item flex_dir_row ju_co_between al_it_center">
        <image :src="item.ticketImage" class="w_200 h_200" ></image>
        <div class="w_500 h_200 bg_ffffff border_ra_13 p_left_24 p_right_24 ">
          <div class="ticket-info-title flex_dir_row h_70 ju_co_between al_it_center">
            <text v-if="item.use" class="color_ffffff p_left_10 p_right_10 border_ra_7 h_40 li_he_40 font_24" :class="[item.type === 1 ? 'bg_fd5f7d' : item.type === 2 ? 'bg_f2b36b' : 'bg_72c2f5' ]">{{item.type === 1 ? '租金抵用券' : item.type === 2 ? '租金折扣券' : '新人福利券'}}</text>
            <text v-else class="color_ffffff p_left_10 p_right_10 border_ra_7 h_40 li_he_40 font_24 bg_dddddd">{{item.type === 1 ? '租金抵用券' : item.type === 2 ? '租金折扣券' : '新人福利券'}}</text>
            <text class="color_999999 font_40 icon iconfont">&#xe72f;</text>
          </div>
          <text class="font_26 color_999999 line2 li_he_40">{{item.detail}}</text>
          <text class="maxTime h_40 w_500 font_24 p_left_24 color_999999 line2 li_he_40">截止日期：{{item.maxTime}}</text>
        </div>
      </div>
    </div>
    <text class="bottom-button h_88 w_750 li_he_88 te_center bg_1367b6 color_ffffff font_34">去使用</text>
  </scroller>
</template>

<script>
export default{
  data:()=>({
    ticketList:[
      {ticketImage:'bmlocal://assets/ticket/3000out10_unused.png',type:1,use:true,maxTime:'2018-12-30',detail:'喜迎双十二，满减折扣让你嗨到爽，'},
      {ticketImage:'bmlocal://assets/ticket/1000out5_unused.png',type:1,use:true,maxTime:'2018-12-30',detail:'周末和家人一起度过，最新折扣玩转周末，快和你的家人一起玩游戏吧！'},
      {ticketImage:'bmlocal://assets/ticket/85out_unused.png',type:2,use:true,maxTime:'2018-12-30',detail:'优惠券打折券，上不封顶！'},
      {ticketImage:'bmlocal://assets/ticket/75out_unused.png',type:2,use:true,maxTime:'2018-12-20',detail:'周末和家人一起度过，最新折扣玩转周末，快和你的家人一起玩游戏吧！'},
      {ticketImage:'bmlocal://assets/ticket/newuser_unused.png',type:3,use:true,maxTime:'2018-12-20',detail:'年轻就是要玩的有young！ps4 pro，xbox one x 天蝎座，宅男从来不寂寞！'},
      {ticketImage:'bmlocal://assets/ticket/2000out12_used.png',type:1,use:false,maxTime:'2018-12-30',detail:'新手上路，快让老司机带带路！一个新手优惠券送给你！'},
      {ticketImage:'bmlocal://assets/ticket/3000out10_used.png',type:1,use:false,maxTime:'2018-12-30',detail:'轻就是要玩的有young！ps4 pro，xbox one x 天蝎座，宅男从来不寂寞！'},
      {ticketImage:'bmlocal://assets/ticket/85out_unless.png',type:2,use:false,maxTime:'2018-12-30',detail:'轻就是要玩的有young！ps4 pro，xbox one x 天蝎座，宅男从来不寂寞！'},
    ]
  }),
  beforeCreate() {
    const domModule = weex.requireModule('dom');
    this.$navigator.setNavigationInfo({
      title: '',                              // 中间区域标题
      navShow: false,                          // 是否显示导航栏
      statusBarStyle: 'Default'               // 状态栏文字颜色：Defautl 黑色， LightContent 白色
    }, () => {
      // 点击回调
      console.log("您点击了导航条中间区域。")
    })
  },
  methods:{
    goBack(){
      this.$router.back()
      this.$navigator.setNavigationInfo({
        title: '',                              // 中间区域标题
        navShow: false,                          // 是否显示导航栏
        statusBarStyle: 'LightContent'               // 状态栏文字颜色：Defautl 黑色， LightContent 白色
      }, () => {
        // 点击回调
        console.log("您点击了导航条中间区域。")
      })
    },
  }
}
</script>

<style src="../common.css"></style>
<style>
.border-top{
  border-top-width: 1px;
  border-top-color: #d1d1d1;
}
  .header-title{
    position: sticky;
  }
  .maxTime{
    position: absolute;
    left:0;
    bottom:3;
    border-top-width: 2px;
    border-top-color: #d1d1d1;
    border-top-style: dashed;
  }
  .bottom-button{
    position: fixed;
    bottom:0;
  }
</style>