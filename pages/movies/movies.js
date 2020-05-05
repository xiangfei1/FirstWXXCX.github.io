// pages/movies/movies.js
const MOVIE_URL = 'http://t.yushu.im/v2/movie/top250';
let appData = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [], //电影数据数组
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: MOVIE_URL,
      success: (resp) => {
        this.setData({
          movies: resp.data.subjects
        })
        //更新app中的数据
        appData.data.movies = resp.data.subjects;
      }
    })
  },

})