// pages/register/register.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    passType: "text",
    getQrCode: "",
    phone: ""
  },
  //返回上一页
  goPageBack: function () {
    app.pageBack();
  },
  //查看密码
  eyeClick: function () {
    this.setData({
      passType: this.data.passType === "text" ? "password" : "text"
    })
  },
  setPhone: function(e){
    this.setData({
      phone: e.detail.value
    })
  },
  getQrCode: function(){
    app.http({
      url: app.httpBase + '/common/app/getVerify/' + this.data.phone+'/register',
      method: "post"
    }).then(res => {
      console.log(res);
    })
  },
  formSubmit: function(e){
    console.log(e);
    const valiateCode = e.detail.value.qrcode;
    delete e.detail.value.qrcode;
    delete e.detail.value.password1;
    app.http({
      url: app.httpBase + '/common/app/register/' + valiateCode,
      method: "post",
      data: e.detail.value
    }).then(res => {
      console.log(res);
    })
    // wx.showToast({
    //   title: '提交成功',
    //   icon: 'success',
    //   success: res => {
    //     console.log('form发生了submit事件，携带数据为：', e.detail.value)
    //   }
    // })
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