'use strict'
const app = {
  initialize() {
    document.addEventListener(
      'deviceready',
      this.onDeviceReady.bind(this),
      false
    )
  },



  onDeviceReady() {
    this.receivedEvent('deviceready')
    this.onesignalNotification();
    this.showAds()
  },



  showAds() {

document.addEventListener('admob.banner.load', () => {
  // handle event
  alert('banner Load');
  })
document.addEventListener('admob.banner.load_fail', () => {
  // handle event
  alert('banner fail load');
})

document.addEventListener('admob.banner.close', () => {
  alert('banner close');
  // handle event
})

document.addEventListener('admob.interstitial.load', () => {
  // handle event
  alert('interstitial Load');
})
document.addEventListener('admob.interstitial.load_fail', () => {
  // handle event
  alert('interstitial fail load');
})
document.addEventListener('admob.interstitial.close', () => {
  alert('interstitial close');
})


/*    admob.banner.show({ 
      id: {
      android: 'ca-app-pub-3756352465808334/4233988827',
      ios: 'ca-app-pub-3756352465808334/4233988827',
    }, 

     }).catch(console.log)*/
   /* admob.interstitial
      .load({
       id: {
      android: 'ca-app-pub-3756352465808334/3144452216',
      ios: 'ca-app-pub-3756352465808334/3144452216',
    },
   })
      .then(() => admob.interstitial.show())
      .catch(console.log)
    admob.rewardVideo
      .load({ 
      id: {
      // replace with your ad unit IDs
      android: 'ca-app-pub-3756352465808334/2373383295',
      ios: 'ca-app-pub-3756352465808334/2373383295',
    },

       })
      .then(() => admob.rewardVideo.show())
      .catch(console.log)
 */ },
  onesignalNotification()
  {
    var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("4e466e0e-4389-4c50-974f-40a0d634fd6b")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
  },

  receivedEvent(id) {
   

    console.log(`Received Event: ${id}`)
  },
}

app.initialize()
