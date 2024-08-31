document.addEventListener("DOMContentLoaded", function () {
    var tg = window.Telegram.WebApp;
    var Buy_52 = document.getElementById("52");
    var Buy_80 = document.getElementById("80");
    var Buy_100 = document.getElementById("100");
    var Buy_150 = document.getElementById("150");
    tg.expand();
    Buy_52.addEventListener("click", function () { send_sk_info(5200); });
    Buy_80.addEventListener("click", function () { send_sk_info(8000); });
    Buy_100.addEventListener("click", function () { send_sk_info(10000); });
    Buy_150.addEventListener("click", function () { send_sk_info(15000); });
    var send_sk_info = function (amounts) {
        var data = {
            amount: amounts
        };
        tg.sendData(JSON.stringify(data));
    };
});
