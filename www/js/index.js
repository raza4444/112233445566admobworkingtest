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
    admob.banner.show({ id: 'test' }).catch(console.log)
    admob.interstitial
      .load({ id: 'test' })
      .then(() => admob.interstitial.show())
      .catch(console.log)
    admob.rewardVideo
      .load({ id: 'test' })
      .then(() => admob.rewardVideo.show())
      .catch(console.log)
  },
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
    const parentElement = document.getElementById(id)
    const listeningElement = parentElement.querySelector('.listening')
    const receivedElement = parentElement.querySelector('.received')

    listeningElement.setAttribute('style', 'display:none;')
    receivedElement.setAttribute('style', 'display:block;')

    console.log(`Received Event: ${id}`)
  },
}

app.initialize()
