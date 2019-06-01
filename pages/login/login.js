// pages/login/login.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    postion: null,
    passType: "password"
  },

  //查看密码
  eyeClick: function(){
    this.setData({
      passType: this.data.passType === "text" ? "password" : "text"
    })
  },

  //登录
  loginSubmit: function(e){
    console.log(e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.hideTabBar();
    this.setData({
      postion: wx.getMenuButtonBoundingClientRect()
    })
    // app.http({
    //   url: app.httpBase + '/web/getVerify',
    //   method: "get",
    //   data: null
    // }).then(res => {
    //   let result = res;
    //   if (result.code == 200) {
       
    //   } else {
    //     wx.showToast({
    //       icon: 'none',
    //       title: result.msg
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})