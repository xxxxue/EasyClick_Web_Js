// importClass(android.webkit.WebView);
// importClass(android.webkit.ValueCallback);
// importClass(android.webkit.WebChromeClient);
// importClass(android.webkit.WebResourceResponse);
// importClass(android.webkit.WebViewClient);
//
// importClass(android.widget.LinearLayout)
// importClass(com.just.agentweb.AgentWeb)
// importClass(com.just.agentweb.DefaultWebClient)

importClass(com.just.agentweb.WebChromeClient)
importClass(com.just.agentweb.WebViewClient)

ui.layout("参数设置", "main.xml");
let uiWebView = ui["mWebView"]
let webViewCore = uiWebView.getWebView();
let set = webViewCore.getSettings()

set.setAllowFileAccess(true);
set.setAllowFileAccessFromFileURLs(true);
set.setAllowUniversalAccessFromFileURLs(true);

set.setDisplayZoomControls(true);
set.setSupportZoom(true);
set.setJavaScriptEnabled(true);

set.setTextZoom(100);
set.setUseWideViewPort(true);
set.setLoadWithOverviewMode(true);

/**
 * 拦截 Prompt
 */
webViewCore.setWebChromeClient(new JavaAdapter(WebChromeClient, {
    onJsPrompt: function (view, url, fnName, defaultValue, jsPromptResult) {
        let result = undefined;
        console.log("接收到promtp: ", fnName, defaultValue);
        try {
            result = eval(fnName + "(" + defaultValue + ")");
        } catch (error) {
            console.error(error);
        }
        jsPromptResult.confirm(result);
        return true
    }
}));

/**
 * 执行js的方法
 *
 * 小提示 :  ec提供的 uiWebView.quickCallJs('') 只能在 main.js 中使用
 *
 * @param {string} fnName 方法名
 * @param {*} arr 参数
 */
function callJsFunction(fnName, arr) {
    let data = JSON.stringify(arr)
    webViewCore.loadUrl("javascript:" + fnName + "(..." + data + ")") //使用 展开语法  '...'  展开数组
}

/**
 * 提供给web调用的log
 * @param {*} msg
 */
function ecLog(msg) {
    console.log(msg);
}

/**
 * 提供给web调用的log
 * @param {*} msg
 */
function ecToast(msg) {
    toast(msg);
}


//-------------
//-------------
//-------------
//-------------
//-------------
//-------------
//-------------
//-------------

/**
 * 用来测试 web 调用 ec
 */
function ecFunc([index, name, age]) {
    console.log("方法参数: ", index, name, age);

    let filePath = "/sdcard/EcTest/数据.json";

    //初始化数据
    if (!file.exists(filePath)) {
        let jsonData = [
            {id: 1, name: "小明1", address: "北京1"},
            {id: 2, name: "小明2", address: "北京2"},
            {id: 3, name: "小明3", address: "北京3"}
        ]
        file.mkdirs(filePath)
        file.writeFile(JSON.stringify(jsonData, null, 2), filePath)
    }

    //测试 aj调用web
    callJsFunction("pushLog", [["返回值1", "返回值2", "返回值3"], "ecFuncCallback"]);

    return file.readFile(filePath)
}

/**
 * 测试 web 回调ec
 * @param data
 */
function ecFuncCallback(data) {
    console.log("接收到web的回调 :", data)
}

//
function startAutoEnv() {
    ui.startEnvAsync(function (r) {
        ui.logd("启动环境结果: " + r);
        ui.auto_env.setChecked(r);
    });
}

function main() {


}

main();

