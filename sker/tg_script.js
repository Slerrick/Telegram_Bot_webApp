document.addEventListener("DOMContentLoaded", ()=>{
    let amount = 0;
    const tg = window.Telegram.WebApp ;
    const Buy_52 = document.getElementById("52");
    const Buy_80 = document.getElementById("80");
    const Buy_100 = document.getElementById("100");
    const Buy_150 = document.getElementById("150");

    tg.expand()
    Buy_52.addEventListener("click", () => {send_sk_info(5200)})
    Buy_80.addEventListener("click", () => {send_sk_info(8000)})
    Buy_100.addEventListener("click", () => {send_sk_info(10_000)})
    Buy_150.addEventListener("click", () => {send_sk_info(15_000)})

    const send_sk_info = (amounts) =>{
        const data = {
            amount: amounts,
        }
    tg.sendData(JSON.stringify(data))
    }
})