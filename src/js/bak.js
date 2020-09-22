// let mLinear = ui["mLinear"]
//
//  let webView = AgentWeb.with(context)
//      .setAgentWebParent(mLinear, new LinearLayout.LayoutParams(-1, -1))
//      .useDefaultIndicator()
//      //.setWebChromeClient(chromeClient)
//      //.setWebViewClient(mWebViewClient)
//      //.setMainFrameErrorView(R.layout.agentweb_error_page, -1)
//      .setSecurityType(AgentWeb.SecurityType.STRICT_CHECK)
//      //.setWebLayout(new WebLayout(this))
//      .setOpenOtherPageWays(DefaultWebClient.OpenOtherPageWays.ASK)//打开其他应用时，弹窗咨询用户是否前往其他应用
//      .interceptUnkownUrl() //拦截找不到相关页面的Scheme
//      .createAgentWeb()
//      .ready()
//      .go(null)
//      .getWebCreator()
//      .getWebView();
//
// let set = webView.getSettings()
// set.setAllowFileAccess(true);
// set.setAllowFileAccessFromFileURLs(true);
// set.setAllowUniversalAccessFromFileURLs(true);
//
// set.setDisplayZoomControls(true);
// set.setSupportZoom(true);
// set.setJavaScriptEnabled(true);
//
// set.setTextZoom(100);
// set.setUseWideViewPort(true);
// set.setLoadWithOverviewMode(true);

//
// webView.loadUrl("https://easyclick.gitee.io/docs/#/");
// webView.loadUrl("index.html");

// logd(i++)
// logd(webView)



// let cc=new org.mozilla.javascript.JavaAdapter.createAdapterWrapper({
//     onJsPrompt: function (view, url, fnName, defaultValue, jsPromptResult) {
//         var param = defaultValue && JSON.parse(defaultValue);
//         jsPromptResult.confirm(param);
//         return true;
//     },
//     onReceivedHttpError: function (view, request, error) {
//         log('webview http error', error);
//     },
//     onReceivedError: function (view, errorCode, desc, failingUrl) {
//         log('webview error', desc);
//     },
//     onConsoleMessage: function (msg) {
//         log(msg.message());
//     }
// }, android.webkit.WebChromeClient)
// logd(cc.onJsTimeout())



// webView.loadUrl("http://www.baidu.com")