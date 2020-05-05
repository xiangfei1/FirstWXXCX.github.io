// pages/movieDetail/movieDetail.js
let appData = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {},  //电影详情
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(appData.data.movies[options.id])
    this.setData({
      movie: appData.data.movies[options.id]
    })
  },

})