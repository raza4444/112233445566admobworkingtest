class AMSInterstitial: AMSAdBase, GADInterstitialDelegate {
    var interstitial: GADInterstitial?

    deinit {
        interstitial = nil
    }

    func load(request: GADRequest) {
        let interstitial = GADInterstitial(adUnitID: adUnitID)
        self.interstitial = interstitial

        interstitial.load(request)
        interstitial.delegate = self
    }

    func show() {
        if (interstitial?.isReady)! {
            interstitial?.present(fromRootViewController: plugin.viewController)
        }
    }

    @objc
    func interstitialDidReceiveAd(_ adInterstitial: GADInterstitial) {
        plugin.emit(eventType: AMSEvents.interstitialLoad)
    }

    @objc
    func interstitialDidFail(toPresentScreen adInterstitial: GADInterstitial) {
        plugin.emit(eventType: AMSEvents.interstitialLoadFail)
    }

    @objc
    func interstitialDidDismissScreen(_ adInterstitial: GADInterstitial) {
        plugin.emit(eventType: AMSEvents.interstitialClose)
        fitAds()
    }

    @objc
    func interstitialWillPresentScreen(_ adInterstitial: GADInterstitial) {
        plugin.emit(eventType: AMSEvents.interstitialOpen)
    }

    @objc
    func interstitialWillLeaveApplication(_ adInterstitial: GADInterstitial) {
        plugin.emit(eventType: AMSEvents.interstitialExitApp)
    }
}
