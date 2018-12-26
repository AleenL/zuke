<template>
  <scroller @scroll="recylerScroll" class="flex_ite_1 bg_f0eff5">
    <div class="wrapper  flex_ite_1 w_750">
      <div class="header w_750  ">
        <div class="p_left_30 p_right_30 m_top_30 h_120 flex_dir_row ju_co_between al_it_center">
          <text class="color_ffffff icon iconfont font_38">&#xe7f7;</text>
          <div class="input_bar w_500  ju_co_between al_it_center flex_dir_row">
            <input type="text" placeholder="搜索一下"
                   class="m_right_30 input color_ffffff w_400 h_60 p_left_24 font_28 " :autofocus=false
                   :value="searchText" @change="onchange"
                   @input="oninput"/>
            <text v-if="searchText" @click="clearText" class="color_ffffff icon iconfont p_right_12 ">&#xe80d;</text>
          </div>
          <text class="color_ffffff icon iconfont font_50" @click="changeType">{{listType === 0 ? '&#xe73f;' : '&#xe742;'}}</text>
        </div>
        <div class="nav_bar w_750 h_88 bg_ffffff  ju_co_around al_it_center flex_dir_row">
          <div @click="chooseStyle(0)" class="m_top_10 w_90 h_80 nav_bar_item al_it_center ju_co_between flex_dir_row" :class="[chooseItem.chooseIndex === 0 ? 'active' : 'unactive']">
            <text class="color_666666 font_30">综合</text>
            <div class="al_it_center ju_co_start">
              <text class="icon iconfont font_20 icon-up " :class="[chooseItem.chooseIndex === 0&&chooseItem.chooseSort === 0 ? 'color_1C1C20' : 'color_666666']">&#xe65d;</text>
              <text class="icon iconfont font_20 icon-down" :class="[chooseItem.chooseIndex === 0&&chooseItem.chooseSort === 1 ? 'color_1C1C20' : 'color_666666']">&#xe65e;</text>
            </div>
          </div>
          <div @click="chooseStyle(1)" class="m_top_10 w_100 nav_bar_item h_80 al_it_center ju_co_between flex_dir_row" :class="[chooseItem.chooseIndex === 1 ? 'active' : 'unactive']">
            <text class="color_666666 font_30" >销量</text>
            <div class="al_it_center ju_co_start">
              <text class="icon iconfont font_20 icon-up" :class="[chooseItem.chooseIndex === 1&&chooseItem.chooseSort === 0 ? 'color_1C1C20' : 'color_666666']">&#xe65d;</text>
              <text class="icon iconfont font_20 icon-down" :class="[chooseItem.chooseIndex === 1&&chooseItem.chooseSort === 1 ? 'color_1C1C20' : 'color_666666']">&#xe65e;</text>
            </div>
          </div>
          <div @click="chooseStyle(2)" class="m_top_10 w_100 nav_bar_item h_80 al_it_center ju_co_between flex_dir_row" :class="[chooseItem.chooseIndex === 2 ? 'active' : 'unactive']">
            <text class="color_666666 font_30">价格</text>
            <div class="al_it_center ju_co_start">
              <text class="icon iconfont font_20 icon-up" :class="[chooseItem.chooseIndex === 2&&chooseItem.chooseSort === 0 ? 'color_1C1C20' : 'color_666666']">&#xe65d;</text>
              <text class="icon iconfont font_20 icon-down" :class="[chooseItem.chooseIndex === 2&&chooseItem.chooseSort === 1 ? 'color_1C1C20' : 'color_666666']">&#xe65e;</text>
            </div>
          </div>
        </div>
      </div>

      <div class="item-list w_750 p_left_24 p_right_24 m_top_20">
        <wxc-item :listType="listType" :goodsList="goodsList"></wxc-item>
      </div>
    </div>
  </scroller>
</template>

<script>
  import {goodsList} from './config'

  export default{
    components:{WxcItem:require('./wxc-item.vue')},
    data:()=>({
      goodsList:goodsList,
      listType:0,
      searchText:'',
      chooseItem:{
        chooseIndex:0,
        chooseSort:0
      }
    }),
    methods:{
      chooseStyle(index){
        let tempChooseIndex = this.chooseItem.chooseIndex
        this.chooseItem.chooseIndex = index
        if(this.chooseItem.chooseIndex !== tempChooseIndex){
          this.chooseItem.chooseSort = 0
        }else{
          this.chooseItem.chooseSort = this.chooseItem.chooseSort === 0 ? 1 : 0
        }
      },
      changeType(){
        this.listType = this.listType === 0 ? 1 : 0
      },
      onchange(e){
        this.searchText = e.value
      },
      oninput(e){
        this.searchText = e.value
      },
      clearText(){
        this.searchText = ''
      }
    }
  }
</script>

<style src="../common.css" scoped></style>
<style>
  .header {
    background-image: linear-gradient(to top right, #3049cb, #197fcb);
    position:sticky;
  }

  .input_bar {
    border-bottom-color: rgba(255, 255, 255, 0.6);
    border-bottom-width: 1px;
    border-bottom-style: solid;
    padding-bottom: 2px;
  }

  .input {
    placeholder-color: rgba(255,255,255,0.5);
  }

  .active{
    border-bottom-width: 5px;
    border-bottom-color: #0a51a3;
  }

  .unactive{
    border-bottom-width: 5px;
    border-bottom-color: #ffffff;
  }

  .icon-up{
    font-weight: 900;
    position: relative;
    top:3;
  }

  .icon-down{
    font-weight: 900;
    position: relative;
    bottom:3;
  }


</style>