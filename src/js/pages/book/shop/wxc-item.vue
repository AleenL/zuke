<!--created by allen on 2018/05/29-->

<template>
  <div class="flex_dir_row ju_co_between al_it_start">
    <div v-if="listType===1" >
      <div  v-for="item,index in goodsList"
           class="w_700 p_left_24 p_right_24 h_220 bg_ffffff border_ra_13 m_bottom_24 flex_dir_row ju_co_start al_it_center">
        <image :src="item.image_src" class="h_200 w_200" resize="contain"></image>
        <div class="m_left_20 h_160">
          <text class="color_333333 font_32 fo_we_500 h_50">{{item.title}}</text>
          <div class="label flex_dir_row h_60 al_it_center ju_co_start flex_row">
            <text v-for="ite,ind in item.label_tag"
                  class=" color_666666 font_24 m_right_12 bg_f0eff5 border_ra_100 label_tag">{{ite}}</text>
          </div>
          <div class="goods-price flex_dir_row h_50 ju_co_start al_it_end">
            <text class="font_32 color_f4a033">¥{{item.price_total}}/</text>
            <text class="font_28 color_666666"> {{item.days}}天</text>
            <text class="font_28 color_666666 m_left_24" v-if="parseInt(item.deposit_total) !== 0">押金: ¥{{item.deposit_total}}</text>
            <text class="font_28 color_0a51a3 m_left_24 no-deposit " v-else>免押金</text>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="w_700 flex_dir_row ju_co_between al_it_start flex_wrap" >
      <div  v-for="item,index in goodsList" @click="goodsInfo"
           class=" h_570 card-item bg_ffffff border_ra_13 m_bottom_24 flex_dir_colunm ju_co_start al_it_center">
        <image :src="item.image_src" class="h_300 w_300" resize="contain"></image>
        <text class="color_333333 font_32 w_300 te_left fo_we_500 h_50 w">{{item.title}}</text>
        <div class="label-list flex_dir_row h_55 al_it_start ju_co_start flex_wrap w_300 m_top_10">
          <text v-for="ite,ind in item.label_tag" class=" color_666666 font_24 m_right_12 ">{{ite}}</text>
        </div>
        <div class="goods-price w_300 flex_dir_row h_50 ju_co_start al_it_end m_top_20">
          <text class="font_34 color_f4a033 fo_we_500">¥{{item.price_total}}/</text>
          <text class="font_30 color_666666"> {{item.days}}天</text>
        </div>
        <text class="m_top_12 w_300 font_28 color_666666 " v-if="parseInt(item.deposit_total) !== 0">押金:¥{{item.deposit_total}}</text>
        <text class="m_top_12 w_300 font_28 color_0a51a3  no-deposit " v-else>免押金</text>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      goodsList: {
        type: Array,
        default: [{a: 1}]
      },
      listType: {
        type: Number,
        default: 0
      }
    },
    data: () => ({}),
    created() {
      console.log(this.goodsList)
    },
    computed: {},
    methods: {
      goodsInfo(){
        this.$router.open({
          name:'goodsInfo'
        })
      }
    }
  };
</script>

<style src="../common.css" scoped></style>
<style scoped>
  .label_tag {
    padding: 4px 13px;
  }

  .card-item {
    width: 340px;
  }

  .label-list {
    border-bottom-color: #f0eff5;
    border-bottom-width: 2px;
  }
</style>
