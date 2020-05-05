// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isShow: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //判断用户是否已经授权
    wx.getSetting({
      success: (res)=>{
        if(res.authSetting['scope.userInfo']) {
          this.setData({
            isShow: false
          })
        } else {
          this.setData({
            isShow: true
          })
        }
      }
    })
    // 获取用户授权信息
    wx.getUserInfo({
      success: res =>{
        // console.log(res)
        this.setData({
          userInfo: res.userInfo
        })
      },
      fial: res=> {
        console.log('获取用户信息失败')
      }
    })
  },
  //处理用户授权事件
  handleGetUserInfo: function(data){
    if(data.detail.rawData) {
      this.onLoad()
    }
  },
  // 处理首页跳转事件
  handleClick: function(data) {
    wx.switchTab({
      url: '/pages/list/list',
    })
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