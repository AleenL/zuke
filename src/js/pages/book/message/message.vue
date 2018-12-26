<!--created by allen on 2018/05/29-->

<template>
  <scroller class="message-wrap flex_ite_1 bg_f0eff4">
    <div class="header-title h_140 p_top_40 bg_fcfcfc ju_co_center al_it_center flex_dir_row p_left_24 p_right_24">
      <text class=" w_150 te_left icon iconfont color_333333 font_36 fo_we_500" @click="goBack">&#xe622;</text>
      <div class="w_400 te_center h_70  ju_co_center al_it_center">
        <text class="color_333333 font_36 te_center li_he_80">消息</text>
      </div>
      <text class="w_150 te_right icon iconfont color_ffffff font_32 fo_we_500" >订单中心</text>
    </div>
    <div class="m_top_24 p_left_24">
      <div  v-for="item,index in goodsList"
            class="w_700 p_left_24 p_right_24 h_220 bg_ffffff border_ra_13 m_bottom_24 flex_dir_row ju_co_start al_it_center">
        <image :src="item.image_src" class="h_150 w_150 border_ra_13" resize="contain"></image>
        <text v-if="item.hasNew" class="avatar-number bg_fd5f7d w_40 h_40 li_he_40 te_center color_ffffff fo_we_500 font_24 border_ra_100">{{item.amount}}</text>
        <div class="m_left_30 h_170 al_it_start ju_co_start">
          <text  class="color_333333 font_32 fo_we_500 h_50">{{item.title}}</text>
          <text class="h_100 w_470 line2 color_333333 font_28 m_right_12 li_he_40 label_tag">{{item.message}}</text>
          <text class="h_30  font_24 color_999999 ">{{item.time}}</text>
        </div>
      </div>
    </div>
  </scroller>
</template>

<script>
  import navigationBar from '../common/navigationBar'

  export default{
    data:()=>({
      goodsList:[
        {title:'sky22122',hasNew:true,time:'1分钟前',message:'请问租金能不能便宜点呢？很想要租你的机器但是租金确实有点太贵了！',amount:'1',deposit:'1500',price_total:'180.00',days:'30',deposit_total:'1500.00',label_tag:['ps4主机','限定版','双手柄'],image_src:'bmlocal://assets/avatar/avatar1.jpg'},
        {title:'在人民广场吃炸鸡',hasNew:true,time:'15分钟前',message:'中山街三号线面交吧！今天下午五点可以面交嘛？',amount:'2',deposit:'0',price_total:'260.00',days:'30',deposit_total:'0.00',label_tag:['xbox主机','单手柄','金会员'],image_src:'bmlocal://assets/avatar/avatar5.jpg'},
        {title:'相逢一笑',hasNew:true,time:'1天前',message:'今天缺货，不租了！谢谢',deposit:'2700',amount:'1',price_total:'10.00',days:'1',deposit_total:'2700.00',label_tag:['ps4主机','PS plus','单手柄'],image_src:'bmlocal://assets/avatar/avatar2.jpg'},
        {title:'tbggf221',hasNew:true,time:'2天前',message:'3200租金又少吗？',amount:'4',deposit:'0',price_total:'90.00',days:'30',deposit_total:'0.00',label_tag:['ps4游戏','单机','冒险'],image_src:'bmlocal://assets/avatar/avatar6.jpg'},
        {title:'艾因故意',hasNew:false,time:'1个月前',message:'战争机器4还有嘛？',amount:'4',deposit:'120',price_total:'2.00',days:'1',deposit_total:'120.00',label_tag:['xbox游戏','联机','射击'],image_src:'bmlocal://assets/avatar/avatar8.jpg'},
        {title:'死亡故意221',hasNew:false,time:'2018-10-09',message:'血源诅咒便宜出了！160块带血源老猎人！怎么样？',amount:'2',deposit:'300',price_total:'60.00',days:'30',deposit_total:'300.00',label_tag:['switch游戏','多人','搞笑'],image_src:'bmlocal://assets/avatar/avatar7.jpg'},
        {title:'空一',hasNew:false,time:'2018-05-22',message:'嗯！',amount:'1',deposit:'0',price_total:'90.00',days:'30',deposit_total:'0.00',label_tag:['xbox主机','体感','双手柄'],image_src:'bmlocal://assets/avatar/avatar4.jpg'},
        {title:'起个什么名字呢',hasNew:false,time:'2018-03-22',message:'今天租能到货嘛？',amount:'1',deposit:'2500',price_total:'160.00',days:'30',deposit_total:'2500.00',label_tag:['虚拟现实','VR设备','体感'],image_src:'bmlocal://assets/avatar/avatar3.jpg'},
        {title:'整个重庆老子最帅',hasNew:false,time:'2018-01-23',message:'已经收到了，正在玩呢！太棒了，尤其是那个体感游戏，我女儿很喜欢玩，打算买一台回去！',amount:'1',deposit:'2000',price_total:'140.00',days:'30',deposit_total:'2000.00',label_tag:['switch主机','体感'],image_src:'bmlocal://assets/avatar/avatar9.jpg'},
        {title:'叫错我的名字了',hasNew:false,time:'2018-01-02',message:'ok',amount:'1',deposit:'300',price_total:'1.50',days:'1',deposit_total:'300.00',label_tag:['switch游戏','单人','冒险'],image_src:'bmlocal://assets/avatar/avatar10.jpg'},
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
  .header-title{
    position:sticky;
  }
  .avatar-number{
    position:absolute;
    top:20px;
    left:150px;
  }
</style>
