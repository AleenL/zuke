<!--created by allen on 2018/05/29-->

<template>
  <div class="message-wrap flex_ite_1 bg_ffffff">
    <div class="header h_570 w_750">
      <div class="header-title h_100  m_top_40 ju_co_center al_it_center flex_dir_row p_left_24 p_right_24">
        <text class=" w_50 te_left icon iconfont color_ffffff font_36 fo_we_500" @click="goBack" >&#xe622;</text>
        <div class="w_600 te_center h_70  ju_co_center al_it_center">
          <text class="color_ffffff font_36 te_center li_he_80">商品</text>
        </div>
        <text class="message-number bg_ffffff fo_we_500 te_center li_he_30 w_30 h_30 border_ra_100 font_26 color_0a51a3">4</text>
        <text @click="goMessage" class="w_50 te_right icon iconfont color_ffffff font_48 fo_we_500" >&#xe764;</text>
      </div>
    </div>
    <div class="shadow-box po_absolute h_60 bg_ff8527 "></div>
    <slider class="slider w_650 h_500 " interval="3000" auto-play="false" :index="0">
      <div class="frame  border_ra_13  ju_co_center al_it_center bg_ffffff" v-for="(img, idx) in goodsInfo.imageList">
        <image class="image w_500 h_400 " resize="contain" :src="img.src"></image>
      </div>
      <indicator class="indicator w_200 h_60 ju_co_center al_it_center"></indicator>
    </slider>
    <div class="goodsInfo ">
      <div class="goods-title p_left_24 p_right_24">
        <text class="goods-name color_333333 font_36 fo_we_500 lines2">{{goodsInfo.title}}</text>
        <text class="font_24 color_666666 lines2 m_top_24 li_he_40">{{goodsInfo.mask}}</text>
      </div>
      <div class="m_top_24 flex_dir_row goods-price ju_co_center al_it_center h_120 w_750 border-top border-bottom-20">
        <div class="w_350 ju_co_between p_left_24 p_right_24 al_it_center h_80 flex_dir_row border_f0eff5">
          <text class="color_666666 font_28">租金</text>
          <text class="p_left_12 p_right_12 font_42 fo_we_500 color_f4a033">¥{{goodsInfo.price_total}}</text>
          <text class="font_28 color_666666">元</text>
        </div>
        <div class="w_350 ju_co_between al_it_center h_80 flex_dir_row p_left_12 p_right_12">
          <text class="color_666666 font_26">押金: ¥{{goodsInfo.deposit_total}}</text>
          <text class="color_666666 font_26 te-de-through">¥{{goodsInfo.old_total}}</text>
        </div>
      </div>
    </div>
    <div class="bottom-button flex_dir_row w_750 ju_co_between al_it_center h_88">
      <text class="te_center bg_f4a033 color_ffffff w_375 h_88 li_he_88" @click="createOrder">即刻下单</text>
      <text class="te_center bg_0a51a3 color_ffffff w_375 h_88 li_he_88">和ta聊聊</text>
    </div>
    <div class="seller-tag flex_dir_row ju_co_between al_it_center h_70 ">
      <div class="seller-tag-item flex_dir_row w_250  ju_co_center al_it_center border_f0eff5">
        <text class="icon iconfont font_26 p_right_12 color_f4a033 ">&#xe668;</text>
        <text class="color_999999 font_24">金牌租客</text>
      </div>
      <div class="seller-tag-item flex_dir_row w_250  ju_co_center al_it_center border_f0eff5">
        <text class="icon iconfont font_26 p_right_12 color_f4a033">&#xe668;</text>
        <text class="color_999999 font_24 ">本地自取</text>
      </div>
      <div class="seller-tag-item flex_dir_row w_250 ju_co_center al_it_center">
        <text class="icon iconfont font_26 p_right_12 color_0a51a3">&#xe668;</text>
        <text class="color_999999 font_24 ">实名认证</text>
      </div>
    </div>
  </div>
</template>

<script>
  import navigationBar from '../common/navigationBar'

  export default{
    components: {
      'navigation-bar': navigationBar
    },
    data:()=>({

      goodsInfo:{
        imageList: [
          {src: 'bmlocal://assets/goods/goods1.jpg'},
          {src: 'bmlocal://assets/goods/goods4.jpg'},
          {src: 'bmlocal://assets/goods/goods5.jpg'}
        ],
        title:'ps4 (slim) 主机 限定版 双手柄 ',
        amount:'1',
        deposit:'1500',
        price_total:'180.00',
        days:'30',
        mask:'95新 箱说全 配件齐全 有双手柄可以和朋友一起玩 机子内带了3款免费游戏可供游玩 请在7点之后联系我',
        deposit_total:'1500.00',
        old_total:'2300.00',
        label_tag:['ps4主机','限定版','双手柄'],
        image_src:'bmlocal://assets/goods/goods1.jpg'
      },
    }),
    methods:{
      goBack(){
        this.$router.back()
      },
      goMessage(){
        this.$router.open({
          name:'message'
        })
      },
      createOrder(){
        this.$router.open({
          name:'createOrder'
        })
      }
    }
  }
</script>

<style src="../common.css" scoped></style>
<style>
  .slider{
    position: absolute;
    top:140px;
    left:50px;
  }
  .header{
    background-image: linear-gradient(to  bottom, #3049cb, #197fcb);
  }
  .header-title{
    background-color: rgba(0,0,0,0);
  }
  .border_white{
    border-right-width:2px;
    border-right-color:#ffffff;
  }
  .active{
    border-bottom-color: #f4a033;
    border-bottom-width: 6px;
  }

  .image{
    margin-left: 75px;
    margin-top: 50px;
  }

  .indicator {
    left:220px;
    item-color: rgba(0,0,0,0.2);
    item-selected-color: #f4a033;
    item-size: 18px;
    position: absolute;
    top: 510px;
  }

  .message-number{
    position: absolute;
    right:10px;
    top:13px;
  }

  .shadow-box {
    top: 570px;
    position: absolute;
    margin-left: 55px;
    width: 640px;
    box-shadow: 0 5px 20px #1a6abc;
  }

  .goodsInfo{
    margin-top: 160px;
  }

  .border_f0eff5{
    border-right-width:2px;
    border-right-color:#f0eff5;
  }

  .border-top{
    border-top-width:3px;
    border-top-color:#f0eff5;
  }

  .border-bottom-20{
    border-bottom-width:10px;
    border-bottom-color:#f0eff5;
  }
  .bottom-button{
    position: fixed;
    bottom:0;
  }
  .seller-tag{
    border-bottom-color: #f0eff5;
    border-bottom-width: 2px;
  }
</style>
