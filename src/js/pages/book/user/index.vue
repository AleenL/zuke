<template>
  <div class="wrapper flex_ite_1 bg_f0eff4">
    <div class="header_box ">
      <div class="bottom_avatar_cover w_750 h_400"></div>
      <div class="header_box_title">
          <div class="header-title h_100  m_top_30 ju_co_start al_it_center flex_dir_row ">
            <text class=" w_350 te_left p_left_24 icon iconfont color_ffffff font_36 fo_we_500" >&#xe622;</text>
            <text class="w_400 color_ffffff m_right_24 font_36 te_left active li_he_80">我的</text>
          </div>
      </div>
      <div class="user_info p_left_24 p_right_24 w_750 flex_dir_row h_150 ju_co_between al_it_center">
        <div class="avatar_cover bg_ffffff ju_co_center al_it_center">
          <image class="avatar_image w_120 h_120 border_ra_100"  src="bmlocal://assets/banner1.jpg"></image>
        </div>
        <text class="w_400 te_left font_34 color_ffffff">185 **** 0217</text>
        <text class="te_left p_left_24 icon iconfont color_ffffff font_36 fo_we_500" >&#xe62e;</text>
      </div>
    </div>
    <div class="user-banner w_700 m_left_24 h_140 bg_ffffff border_ra_13 flex_dir_row ju_co_between al_it_center">
      <div v-for="item,index in iconList" class="w_150 h_140 ju_co_center al_it_center">
        <image class="w_70 h_70 " :src="item.icon"></image>
        <text class="color_666666 p_top_12 font_28">{{item.title}}</text>
      </div>
    </div>
    <div class="user-list w_700 m_left_24 bg_ffffff p_left_24 p_right_24 border_ra_13">
      <div v-for="item,index in settingIcon" class="h_90  flex_dir_row ju_co_between al_it_center" :class="[index+1!==settingIcon.length&&'border_bottom-dash']">
        <div class="w_400 flex_dir_row ju_co_start al_it_center">
          <image :src="item.icon" class="w_50 h_50"></image>
          <text class="color_666666 font_30 p_left_24">{{item.title}}</text>
        </div>
        <text class=" icon iconfont color_999999 font_32">&#xe62e;</text>
      </div>
    </div>
    <div class="share_list w_700 m_left_24 m_top_10 bg_ffffff border_ra_13 p_left_12 p_right_12">
      <text class="w_700 te_center h_70 li_he_70 color_666666 font_30"> -- 分享到 -- </text>
      <div class=" h_140 ju_co_between al_it_center flex_dir_row bg_ffffff">
        <div class="w_120 h_120 al_it_center ju_co_center" v-for="item,index in shareIcon">
          <image class="w_70 h_70 " :src="item.icon"></image>
          <text class="font_26 color_666666 p_top_12">{{item.title}}</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data:()=>({
    iconList:[
      {title:'收藏夹',icon:'bmlocal://assets/icon/stars.png'},
      {title:'优惠券',icon:'bmlocal://assets/icon/ticket.png'},
      {title:'小金库',icon:'bmlocal://assets/icon/card.png'},
      {title:'新发布',icon:'bmlocal://assets/icon/new.png'}
    ],
    settingIcon:[
      {title:'我的订单',icon:'bmlocal://assets/icon/my_order.png'},
      {title:'我租出的',icon:'bmlocal://assets/icon/sell_out.png'},
      {title:'我租入的',icon:'bmlocal://assets/icon/sell_in.png'},
      {title:'消息',icon:'bmlocal://assets/icon/my_message.png'},
      {title:'实名认证',icon:'bmlocal://assets/icon/real_people.png'},

      {title:'设置',icon:'bmlocal://assets/icon/setting.png'}
    ],
    shareIcon:[
      {title:'朋友圈',icon:'bmlocal://assets/icon/friend_zone.png'},
      {title:'微信朋友',icon:'bmlocal://assets/icon/wechat_zone.png'},
      {title:'新浪微博',icon:'bmlocal://assets/icon/weibo_zone.png'},
      {title:'QQ好友',icon:'bmlocal://assets/icon/qq_zone.png'},
      {title:'QQ空间',icon:'bmlocal://assets/icon/zone_zone.png'}
    ]
  })
}
</script>

<style src="../common.css" scoped></style>
<style>
.bottom_avatar_cover{
  position: absolute;
  top:0;
  left:0;
  background-image: linear-gradient(to bottom right, #324fc8, #197fcb);
  opacity: .8;
}
  .avatar_cover{
    width:130px;
    height:130px;
    border-radius: 130px;
  }

  .user-banner{
    position: absolute;
    top:310px;
  }
.user-list{
  margin-top:180px;
}
.border_bottom-dash{
  border-bottom-width:2px;
  border-bottom-color:#d1d1d1;
  border-bottom-style: dashed;
}

</style>