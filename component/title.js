// component/title.js

const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    back: {
      type: Boolean,
      value: false  //默认显示 false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    postion: null
  },
  /**
   * 在组件在视图层布局完成后执行
   */
  ready: function () {
    this.setData({
      postion: wx.getMenuButtonBoundingClientRect()
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    goPageBack: function () {
      if (!this.back) {
        app.pageBack();
      }
    }
  }

})
