export const tabConfigTitle = [{
  icon: 'bmlocal://assets/icon/home_icon.png',
  activeIcon: 'bmlocal://assets/icon/home_active.png',
  title: "首页",
  key: 'home',
  src: `${weex.config.eros.jsServer}/dist/js/pages/book/home/index.js`,
  visibility: 'visible'
}, {
  icon: 'bmlocal://assets/icon/buys_icon.png',
  activeIcon: 'bmlocal://assets/icon/buys_active.png',
  title: "商品",
  key: 'zone',
  src: `${weex.config.eros.jsServer}/dist/js/pages/book/shop/index.js`,
  visibility: 'hidden'
}, {
  icon: 'bmlocal://assets/icon/message_icon.png',
  activeIcon: 'bmlocal://assets/icon/message_active.png',
  title: "消息",
  key: 'update',
  src: `${weex.config.eros.jsServer}/dist/js/pages/book/home/index.js`,
  visibility: 'hidden'
}, {
  icon: 'bmlocal://assets/icon/mine_icon.png',
  activeIcon: 'bmlocal://assets/icon/mine_active.png',
  title: "我的",
  key: 'shop',
  src: `${weex.config.eros.jsServer}/dist/js/pages/book/user/index.js`,
  visibility: 'hidden'
}]

export const tabConfigStyle = {
  bgColor: '#FFFFFF',
  titleColor: '#666666',
  activeTitleColor: '#3D3D3D',
  activeBgColor: '#FFFFFF',
  isActiveTitleBold: true,
  iconWidth: 60,
  iconHeight: 60,
  width: 160,
  height: 100,
  fontSize: 22,
  textPaddingLeft: 10,
  textPaddingRight: 10,
  textPaddingTop: 10
}
