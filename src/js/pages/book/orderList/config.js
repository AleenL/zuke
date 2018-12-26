/**
 * Created by allen on 2018/11/28.
 */

export const config = {
  
  tabTitles: [
    {title: '待支付'},
    {title: '待收货'},
    {title: '已收货'},
    {title: '退租'}
  ],
  tabStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#999999',
    activeTitleColor: '#0a51a3',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    width: 187.5,
    height: 88,
    fontSize: 31,
    hasActiveBottom: true,
    activeBottomColor: '#0a51a3',
    activeBottomHeight: 6,
    activeBottomWidth: 120,
    textPaddingLeft: 10,
    textPaddingRight: 10
  },
  // 使用 iconfont 模式的tab title配置
  tabIconFontTitles: [
    {
      title: '首页',
      codePoint: '\ue623'
    },
    {
      title: '特别推荐',
      codePoint: '\ue608'
    },
    {
      title: '消息中心',
      codePoint: '\ue752',
      badge: 5
    },
    {
      title: '我的主页',
      codePoint: '\ue601',
      dot: true
    }
  ],
  tabIconFontStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#3D3D3D',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    width: 160,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10,
    iconFontSize: 50,
    iconFontColor: '#333333',
    iconFontMarginBottom: 8,
    activeIconFontColor: 'red',
    iconFontUrl: '//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
  }
}

export const orderList = [
  {type: 1, show: 'all', list: [
    {
      name: 'Allen',
      title: 'xbox one x最新主机天蝎座',
      amount: '2',
      deposit: '0',
      price_total: '260.00',
      days: '30',
      deposit_total: '0.00',
      label_tag: ['xbox主机', '单手柄', '金会员'],
      image_src: 'bmlocal://assets/goods/goods5.jpg',
      type: 1,
      total_price_string: '260.00',
    }
  ]},
  {type: 2, show: 'all', list: [
    {
      name: 'Allen',
      title: 'xbox one x最新主机天蝎座',
      amount: '2',
      deposit: '0',
      price_total: '260.00',
      days: '30',
      deposit_total: '0.00',
      label_tag: ['xbox主机', '单手柄', '金会员'],
      image_src: 'bmlocal://assets/goods/goods5.jpg',
      type: 2,
      total_price_string: '260.00',
    },
    {
      name: '吴克敬',
      title: '战争机器4 xbox one 必玩游戏',
      amount: '4',
      deposit: '120',
      price_total: '2.00',
      days: '10',
      deposit_total: '120.00',
      label_tag: ['xbox游戏', '联机', '射击'],
      image_src: 'bmlocal://assets/goods/goods8.jpg',
      type: 2,
      total_price_string: '140.00',
    }
  ]},
  {type: 3, show: 'all', list: [
    {
      name: '刘旭阳',
      title: 'ps4主机加2个游戏（血源，黑魂3）',
      amount: '1',
      deposit: '1500',
      price_total: '180.00',
      days: '30',
      deposit_total: '1500.00',
      label_tag: ['ps4主机', '限定版', '双手柄'],
      image_src: 'bmlocal://assets/goods/goods1.jpg',
      type: 3,
      total_price_string: '1680.00',
    }
  ]},
  {type: 4, show: 'all', list: [
    {
      name: '孙璋',
      title: '荒野大镖客2 R星新作 必玩',
      amount: '4',
      deposit: '0',
      price_total: '90.00',
      days: '30',
      deposit_total: '0.00',
      label_tag: ['ps4游戏', '单机', '冒险'],
      image_src: 'bmlocal://assets/goods/goods6.jpg',
      type: 4,
      total_price_string: '90.00',
    }
  ]},
]