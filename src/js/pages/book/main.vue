<template>
  <div class="app-wrapper">
    <wxc-tab-bar :tab-titles="tabTitles"
                 :tab-styles="tabStyles"
                 title-type="icon"
                 @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
      <div v-for="item in tabTitles" class="item-container" :style="contentStyle">
        <embed style="width:750;flex:1" :src="item.src"></embed>
      </div>
    </wxc-tab-bar>
  </div>
</template>
<script>

  import util from './utils/utils';
  import {WxcTabBar, Utils} from 'weex-ui';
  import {tabConfigTitle, tabConfigStyle} from './config'

  export default {
    bmRouter: {
      viewWillAppear() {
        console.log('home-index-viewWillAppear');
      },
      viewWillBackAppear(params) {
        console.log('home-index-viewWillBackAppear');
      }
    },
    beforeCreate() {
      const domModule = weex.requireModule('dom');
      this.$navigator.setNavigationInfo({
        title: '',                              // 中间区域标题
        navShow: false,                          // 是否显示导航栏
        statusBarStyle: 'LightContent'               // 状态栏文字颜色：Defautl 黑色， LightContent 白色
      }, () => {
        // 点击回调
        console.log("您点击了导航条中间区域。")
      })
      domModule.addRule('fontFace', {
        'fontFamily': 'iconfont',
        'src': 'url(\'bmlocal://iconfont/iconfont.ttf\')'
      });
    },
    components: {
      WxcTabBar
    },
    created() {
      const tabPageHeight = Utils.env.getPageHeight();
      // 如果页面没有导航栏，可以用下面这个计算高度的方法
      // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
      const {tabStyles} = this;
      this.contentStyle = {height: (tabPageHeight + 30 ) + 'px'};
    },
    data() {
      return {
        tabTitles: tabConfigTitle,
        tabStyles: tabConfigStyle
      }
    },
    methods: {
      onTabTo(_result) {
        let _key = _result.data.key || '';
        this.items.forEach((val) => {
          if (val.key === _key) {
            val.visibility = 'visible'
            return
          }
          val.visibility = 'hidden'
        })
      },
      wxcTabBarCurrentTabSelected (e) {
        const index = e.page;
        let _key = this.tabTitles[index].key || '';
        this.tabTitles.forEach((val) => {
          if (val.key === _key) {
            console.log(this.tabTitles)
            val.visibility = 'visible'
            return
          }

          val.visibility = 'hidden'
        })
      }
    }
  }

</script>
<style>
  body {
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
    box-sizing: border-box;
  }

</style>
<style lang="sass" type="text/css" scoped>
  .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 0;
    /*margin-bottom: 100;*/
  }

  .app-wrapper {
    background-color: #ffffff;
  }

  .item-container {
    width: 750px;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
  }

  .touch-bar {
    height: 68px;
    width: 750px;
  }

</style>
