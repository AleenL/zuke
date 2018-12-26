<template>
  <div class="wrapper bg_ffffff flex_ite_1 w_750 ">
    <scroller class="flex_ite_1 p_bottom_100" @scroll="scroll">
      <slider class="slider w_750 h_500" interval="3000" auto-play="true" :index="0">
        <div class="frame" v-for="(img, idx) in imageList">
          <image class="image w_750 h_500" resize="cover" :src="img.src"></image>
        </div>

      </slider>
      <div class="header ju_co_center w_750 al_it_center page-title" :style="scrollNumber">
        <text class="font_34 color_ffffff m_top_24">玩家世界</text>
      </div>
      <div class="h_140 serach_bar" >
        <div class="p_top_24 p_left_30 p_right_30 w_750 p_bottom_30 p_top_50  ju_co_center al_it_center flex_dir_row">
          <div class="inputBox">
            <input type="text" placeholder="搜索一下"
                   class="m_right_30 input bg_f6f6f6 w_500 h_60 p_left_24 font_24 border_rad_100" :autofocus=false
                   value="" @change="onchange"
                   @input="oninput"/>
          </div>
          <text class="bar-ic iconfont font_54 color_ffffff">&#xe64b;</text>
        </div>
      </div>
      <div class="shadow-box po_absolute h_10 bg_ff8527 "></div>
      <div class="center-box h_350 w_700 bg_ffffff ju_co_center al_it_center flex_wrap flex_dir_row po_absolute border_ra_10">
        <div v-for="(item,index) in iconList" class="icon-item ju_co_center al_it_center" :index="index">
          <image class="image w_100 h_100" resize="cover" :src="item.src"></image>
          <text class="font_28 color_666666">{{item.title}}</text>
        </div>
      </div>
      <scroller scroll-direction="horizontal" :show-scrollbar="false"
                class="w_750 h_250 flex_dir_row al_it_center m_top_70 p_top_50">
        <div v-for="(v,index) in tickets"
             :key="index"
             :slot="`card${index}_${slider.sliderId}`"
             :class="['slider',`slider${index}`]">
          <image class="image w_350 h_170 border_ra_10" resize="cover" :src="v.src"></image>
        </div>
      </scroller>
      <div class="title p_top_50  p_bottom_60 w_750 ju_co_center al_it_center flex_dir_row">
        <text class="font_32 color_666666"> - </text>
        <text class="font_32 color_666666 p_left_12 p_right_12"> 信用高，免押金</text>
        <text class="font_32 color_666666"> - </text>
      </div>
      <div class="w_750">
        <scroller scroll-direction="horizontal" :show-scrollbar="false"
                  class="w_750 h_350 flex_dir_row al_it_center">
          <div v-for="item,index in goodsList" class="goods-items flex_dir_cloumn ju_co_start al_it_center w_300 h_350">
            <image class="image w_200 h_200" resize="cover" :src="item.src"></image>
            <div class="w_300 te_left">
              <text class="m_left_24 te_center bg_0a51a3 border_rad_100 w_100 p_top_5 p_bottom_5 font_24 color_ffffff">免押金</text>
            </div>
            <text class="w_300 te_left p_left_24 p_top_10 font_30 fo_we_500 color_333333">{{item.title}}</text>
            <div class="w_300 te_left p_left_24 p_top_10  flex_dir_row">
              <text class="font_28 color_f4a033">¥{{item.price_total}}/</text>
              <text class="font_28 color_666666">{{item.days}}天</text>
            </div>
          </div>
        </scroller>
      </div>
      <div class="title p_top_50 p_bottom_60 w_750 ju_co_center al_it_center flex_dir_row">
        <text class="font_32 color_666666 "> - </text>
        <text class="font_32 color_666666 p_left_12 p_right_12"> 一周免费试用</text>
        <text class="font_32 color_666666"> - </text>
      </div>
      <div class="p_left_24 p_right_24 ju_co_between flex_dir_row al_it_start ">
        <image src="bmlocal://assets/banner4.png" class="h_320 w_350  border_ra_10"></image>
        <div class="flex_dir_cloumn h_250 ju_co_between al_it_center">
          <image src="bmlocal://assets/banner5.png" class="h_150 w_330  border_ra_10 "></image>
          <image src="bmlocal://assets/banner6.png" class="h_150 w_330  border_ra_10 m_top_20"></image>
        </div>
      </div>
      <div class="title p_top_50  p_bottom_60 w_750 ju_co_center al_it_center flex_dir_row">
        <text class="font_32 color_666666"> - </text>
        <text class="font_32 color_666666 p_left_12 p_right_12"> 新资讯，先掌握</text>
        <text class="font_32 color_666666"> - </text>
      </div>
      <div class="p_left_24 p_right_24 ju_co_center al_it_start flex_dir_cloumn ">
        <image v-for="item,index in artList" :src="item.src" :style="{height:item.height}" class="w_700 m_top_20  border_ra_10" resize="cover"></image>
      </div>
    </scroller>
  </div>
</template>

<script>
  const dom = weex.requireModule('dom');
  import {WxcEpSlider} from 'weex-ui'

  export default{
    components: {
      StatusBar: require('../common/StatusBar'),
      WxcEpSlider
    },
    watch:{
      scrollNumber(){}
    },
    data: ()=>({
      imageList: [
        {src: 'bmlocal://assets/banner1.jpg'},
        {src: 'bmlocal://assets/banner2.jpg'},
        {src: 'bmlocal://assets/banner3.png'}
      ],
      goodsList: [
        {src: 'bmlocal://assets/goods1.png', title: 'ps4 pro', price_total: '200.00', days: 30},
        {src: 'bmlocal://assets/goods2.png', title: 'xbox one 天蝎座', price_total: '230.00', days: 30},
        {src: 'bmlocal://assets/goods3.png', title: 'ps4 荒野大镖客2', price_total: '36.00', days: 30},
        {src: 'bmlocal://assets/goods4.png', title: 'switch主机', price_total: '126.00', days: 30}
      ],
      slider: {
        sliderId: 1,
        cardLength: 5,
        cardSize: {
          width: 370,
          height: 170,
          spacing: 0,
          scale: .9
        }
      },
      artList:[
        {title:'一分钟了解XBOX的历史',src:'bmlocal://assets/banner7.png',height:300},
        {title:'仿生人会梦见电子羊吗？',src:'bmlocal://assets/banner8.png',height:250},
        {title:'仿生人会梦见电子羊吗？',src:'bmlocal://assets/banner9.png',height:130},
        {title:'仿生人会梦见电子羊吗？',src:'bmlocal://assets/banner10.png',height:300}
      ],
      iconList: [
        {src: 'bmlocal://assets/icon/PS4.png', title: 'PS4'},
        {src: 'bmlocal://assets/icon/xbox.png', title: 'XBOX'},
        {src: 'bmlocal://assets/icon/switch.png', title: 'SWITCH'},
        {src: 'bmlocal://assets/icon/games.png', title: '游戏'},
        {src: 'bmlocal://assets/icon/vrglass.png', title: 'VR'},
        {src: 'bmlocal://assets/icon/camera.png', title: '单反'},
        {src: 'bmlocal://assets/icon/screen.png', title: '显示器'},
        {src: 'bmlocal://assets/icon/more.png', title: '更多'},
      ],
      tickets: [
        {src: 'bmlocal://assets/price/100.png'},
        {src: 'bmlocal://assets/price/20.png'},
        {src: 'bmlocal://assets/price/85.png'},
        {src: 'bmlocal://assets/price/30.png'},
      ],
      scrollNumber:{opacity:0},
    }),
    methods:{
      scroll(event){
        this.scrollNumber.opacity = -event.contentOffset.y*0.005 > 1 ?  1 : -event.contentOffset.y*0.005
      }
    }
  }
</script>

<style src="../common.css" scoped></style>
<style scoped>
  .header {
    top: -470px;
    height: 100px;
    position: sticky;
    background-image:linear-gradient(to top right,#3049cb,#197fcb);
    opacity:0
  }

  .serach_bar{
    position: absolute;
    top:20px;
  }

  .shadow-box {
    top: 657px;
    position: absolute;
    margin-left: 35px;
    width: 680px;
    box-shadow: 0 5px 20px #1a6abc;
  }

  .center-box {
    position: absolute;
    top: 340px;
    margin-left: 25px;
  }

  .icon-item {
    width: 175px;
    height: 175px;
  }

  .slider-box {
    margin-top: 170px;
  }

  .slider {
    width: 400px;
    height: 200px;
    align-items: center;
    justify-content: center;
  }

  .goods-items {
    border-right-width: 2px;
    border-right-color: #d6d6d6
  }

</style>
