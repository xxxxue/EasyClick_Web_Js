function main() {
    //开始再这里编写代码了！！
    toast("Hello World");
    var name = readConfigString("name");
    logd("姓名: " + name);
    logd("年龄: " + readConfigString("age"));
    logd("听音乐: " + readConfigString("music"));
    logd("是不是一年级: " + readConfigString("one"));
    logd("备注: " + readConfigString("mark"));
    logd("开始 " + isServiceOk());

    //如果自动化服务正常
    if (!autoServiceStart(3)) {
        logd("自动化服务启动失败，无法执行脚本")
        exit();
        return;
    }
    logd("开始执行脚本...")
    home();
}

function autoServiceStart(time) {
    for (var i = 0; i < time; i++) {
        if (isServiceOk()) {
            return true;
        }
        var started = startEnv();
        logd("第" + (i + 1) + "次启动服务结果: " + started);
        if (isServiceOk()) {
            return true;
        }
    }
    return isServiceOk();
}

main();
