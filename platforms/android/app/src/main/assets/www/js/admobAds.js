function ShowBanner() {
	console.log('show Banner');

    admob.banner.show({ 
      id: {
      android: 'ca-app-pub-3756352465808334/4233988827',
      ios: 'ca-app-pub-3756352465808334/4233988827',
    }, 

     }).catch(console.log);

}

function hideBanner()
{
	    admob.banner.hide({ 
      id: {
      android: 'ca-app-pub-3756352465808334/4233988827',
      ios: 'ca-app-pub-3756352465808334/4233988827',
    }, 

     }).catch(console.log);

	}

function prepareIndustrial() {
admob.interstitial
      .load({
       id: {
      android: 'ca-app-pub-3756352465808334/3144452216',
      ios: 'ca-app-pub-3756352465808334/3144452216',
    },
   }).catch(console.log);


}

function showIndustrial() {
	// body...
	admob.interstitial.show();
}

function prepareAndShowIndustrial() {

admob.interstitial
      .load({
       id: {
      android: 'ca-app-pub-3756352465808334/3144452216',
      ios: 'ca-app-pub-3756352465808334/3144452216',
    },
   })
      .then(() => admob.interstitial.show())
      .catch(console.log);

}