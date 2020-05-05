// pages/detail/detail.js
let datas = require('../../datas/list-data')
let appData = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObject: {},  //获取单页面数据
    isPlay: false,  //播放flag
    index: 0, //页码
    isCollected: false,  //收藏flag
  },

  // 处理收藏文章的方法
  handleCollection() {
    let isCollected = !this.data.isCollected;
    // 1. 用户没有收藏
    //   1）存储到Storage
    // 2. 用户已经收藏
  
  // 存储之前获取数据
    let obj = wx.getStorageSync('isCollected')
    obj = isCollected
    // 提示用户信息
    let title = isCollected?'收藏成功':'取消收藏'
    wx.showToast({
      title,
      icon: 'success'
    });
    wx.setStorage({
      key: 'isCollected',
      data: obj,
    });

    this.setData({isCollected})
  },
  // 处理分享
  handleShare() {
    wx.showActionSheet({
      itemList: ['分享到朋友圈', '分享到qq空间', '分享到微信好友'],
      itemColor: '#666'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({dataObject: datas.list_data[options.id], index: options.id});

    // 判断音乐是否播放
    if (appData.data.isMusicPlay && appData.data.playPageIndex == this.data.index) {
      // console.log(1)
      this.setData({
        isPlay: true
      })
    }
      // console.log(this.data.isPlay)
    // 监听背景音乐的播放
    wx.onBackgroundAudioPlay(() => {
      console.log("音乐播放"); 
      this.setData({
        isPlay: true
      })
      appData.data.isMusicPlay = true;
      appData.data.playPageIndex = this.data.index;
    })

    // 监听背景音乐的暂停
    wx.onBackgroundAudioPause(() => {
      console.log("音乐暂停");
      this.setData({
        isPlay: false
      })
    })

  },

  // 音乐播放事件
  musicControl() {
    let isPlay = !this.data.isPlay; 
    let { dataUrl, title, coverImgUrl} = this.data.dataObject.music;
    if(isPlay) {
    // console.log(dataUrl)  
      wx.playBackgroundAudio({
        dataUrl, title, coverImgUrl
      });
    } else {
      wx.pauseBackgroundAudio();
    }
    // 更新isPlay的状态 
    this.setData({isPlay})
  }
})