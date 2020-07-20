chrome.omnibox.onInputEntered.addListener(
  function(text) {
    var trash = [
      'trthaber.com',
      'memurlar.net',
      'yeniasir.com.tr',
      't24.com.tr',
      'haber7.com',
      'sondakika.com',
      'yenisafak.com',
      'posta.com.tr',
      'milligazete.com.tr',
      'birgun.net',
      'yeniakit.com.tr',
      'internethaber.com',
      'ensonhaber.com',
      'mynet.com',
      'star.com.tr',
      'takvim.com.tr',
      'gazeteduvar.com.tr',
      'haberturk.com',
      'sozcu.com.tr',
      'haberler.com',
      'odatv.com',
      'hurriyet.com.tr',
      'milliyet.com.tr',
      'sabah.com.tr',
      'cumhuriyet.com.tr',
      'cnnturk.com',
    ].map(function(site) {
      return '-site:' + site;
    });

    var q = text +  " " + trash.join(' ');
    var newURL = 'https://www.google.com/search?q=' + encodeURIComponent(q);
    chrome.tabs.create({ url: newURL });
  });
