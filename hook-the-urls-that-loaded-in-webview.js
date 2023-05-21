Java.perform(function() {
  var webView = Java.use('android.webkit.WebView');
  webView.loadUrl.overload('java.lang.String').implementation = function(url) {
    console.log('loadUrl intercepted: ' + url);
    this.loadUrl(url);
  }
});
