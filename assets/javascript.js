function submitOrder(){
    const customerName=document.getElementById("nameInput").value;
    const drink=document.getElementById("drinkSelect").value;
    const orderList=document.getElementById("orderUl");
    orderList.innerText = `🧑 ${customerName} .... 🥤 ${drink}`
}