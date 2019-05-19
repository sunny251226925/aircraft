//app.js
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框

          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  http: function (params) {
    wx.showLoading({
      title: ''
    });
    return new Promise((resolve, reject) => {
      wx.request({
        header: params.header,
        method: params.method,
        url: params.url,
        data: params.data,
        complete: (res) => {
          wx.hideLoading();
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(res.data)
          } else {
            if (res.statusCode == 401) {
              wx.navigateTo({
                url: '../login/login',
              })
              wx.setStorageSync("loginTips", res.data.message)
            } else {
              reject(res)
            }
          }
        }
      })
    })
  },
  onHide: function () {

  },
  pageBack: function(current){
    console.log("1111")
    if (!current){
      current = 1;
    }
    wx.navigateBack({
      delta: current
    })
  },
  isData: function (data) {
    const types = typeof data;
    if (types == 'string' || types == 'object') {
      if (data.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  getToken: function () {
    return wx.getStorageSync("access_token");
  },
  globalData: {
    userInfo: null,
    tips1: "没有更多数据了",
    viewUrlHost: '..'
  },
  regexp: {
    phone: /^1[3|4|5|6|7|8|9][0-9]{9}$/,
    email: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  },
  httpBase: "http://2d461091z7.zicp.vip"
  //httpBase: "https://www.yiqunkejiwang.com"

})