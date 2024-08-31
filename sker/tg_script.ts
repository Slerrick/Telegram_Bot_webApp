document.addEventListener("DOMContentLoaded", ()=>{
    const tg = window.Telegram.WebApp ;
    const Buy_52 = document.getElementById("52") as HTMLElement;
    const Buy_80 = document.getElementById("80") as HTMLElement;
    const Buy_100 = document.getElementById("100") as HTMLElement;
    const Buy_150 = document.getElementById("150") as HTMLElement;

    tg.expand()
    Buy_52.addEventListener("click", () => {send_sk_info(5200)})
    Buy_80.addEventListener("click", () => {send_sk_info(8000)})
    Buy_100.addEventListener("click", () => {send_sk_info(10_000)})
    Buy_150.addEventListener("click", () => {send_sk_info(15_000)})

    const send_sk_info = (amounts: number): void | any =>{
        const data = {
            amount: amounts,
        }
    tg.sendData(JSON.stringify(data))
    }
})