
<template>
  <div class="order-list-wrap">
    <div class="header-title h_140 p_top_40 ju_co_center al_it_center flex_dir_row p_left_24 p_right_24">
      <text class=" w_150 te_left icon iconfont color_ffffff font_36 fo_we_500" @click="goBack">&#xe622;</text>
      <div class="w_400 te_center h_70  ju_co_center al_it_center">
        <text class="color_ffffff font_36 te_center li_he_80">我的订单</text>
      </div>
      <text class="w_150"></text>
    </div>
    <wxc-tab-page ref="wxc-tab-page"
                  :tab-titles="tabTitles"
                  :tab-styles="tabStyles"
                  title-type="icon"
                  :tab-page-height="tabPageHeight"
                  @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
      <list class="order-list flex_ite_1 w_750 bg_f0eff4" v-for="item,index in orderList" :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
       <cell class=" h_450 m_top_20 " v-for="ite,ind in item.list">
         <div class=" border_ra_13 m_left_24 w_700 h_350  ">
           <div class="zuer-user h_80 p_left_24 p_right_24 flex_dir_row al_it_center ju_co_between">
              <text class="color_999999 font_28">租客：{{ite.name}}</text>
              <text class="color_f4a033 font_28">{{ite.type === 1 ? '待支付' : ite.type === 2 ? '待收货' : ite.type === 3 ? '已收货' : '已退租'}}</text>
            </div>
           <div class="bg_ffffff h_350 border_ra_13">
             <div class="p_left_24 p_right_24 h_250 border_bottom_solid   flex_dir_row ju_co_start al_it_center">
               <image :src="ite.image_src" class="h_200 w_200" resize="contain"></image>
               <div class="m_left_20 h_160">
                 <text class="color_333333 fo_we_500 font_32 h_50 line1 w_400">{{ite.title}}</text>
                 <div class="label flex_dir_row h_80 al_it_center ju_co_start flex_row">
                   <text v-for="it,id in ite.label_tag" class=" color_666666 font_26 m_right_12 border_ra_100 label_tag">{{it}}</text>
                 </div>
                 <div class="goods-price flex_dir_row h_50 ju_co_start al_it_end">
                   <text class="font_30 color_f4a033 fo_we_500">¥{{ite.price_total}} X {{ite.days}}天</text>
                 </div>
               </div>
             </div>
             <div class="bottom-button h_100 al_it_center flex_dir_row ju_co_between p_left_24 p_right_24">
               <div class="al_it_center flex_dir_row ju_co_between">
                 <text class="color_0a51a3 font_30">总额：</text>
                 <text class="color_0a51a3 font_32">¥ {{ite.total_price_string}}</text>
               </div>
               <text class="bg_0a51a3 color_ffffff font_28 p_left_40 p_right_40 border_ra_100 p_top_5 p_bottom_5">{{ite.type === 1 ? '立即支付' : ite.type === 2 ? '确认收货' : ite.type === 3 ? '去评价' : '申请售后'}}</text>
             </div>
           </div>
         </div>
       </cell>
      </list>
    </wxc-tab-page>

  </div>
</template>

<script>
import {WxcTabPage,Utils} from 'weex-ui';
import {config,orderList} from './config'
  export default{
    components:{
      WxcTabPage
    },
    data:()=>({
      orderList: orderList,
      tabTitles: config.tabTitles,
      tabStyles: config.tabStyles,
      tabList: [],
      demoList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      tabPageHeight: 1334
    }),
    created(){
      this.tabPageHeight = Utils.env.getPageHeight();
      console.log(this.tabPageHeight,'goods')
    },
    methods:{
      goBack(){
        this.$router.back()
      }
    }
  }
</script>

<style src="../common.css" scoped></style>
<style>
  .header-title{
    position: sticky;
    background-image:linear-gradient(to bottom right,#3049cb,#197fcb);
  }
  .border_bottom_solid {
    border-bottom-color: #d1d1d1;
    border-bottom-width: 1px;
  }
</style>