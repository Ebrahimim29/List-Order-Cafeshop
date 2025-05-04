// function submitOrder(){
//     const customerName=document.getElementById("nameInput").value;
//     const drink=document.getElementById("drinkSelect").value;
//     const orderList=document.getElementById("orderUl");
    // orderList.innerText = `🧑 ${customerName} .... 🥤 ${drink}`

    // const newOrder=document.createElement("li"); //اضافه کردن یک تگ جدید
    // newOrder.innerText= `🧑 ${customerName} .... 🥤 ${drink}`;
    // orderList.appendChild(newOrder); // تفاوت استفاده با روشهای قبلی این است که می شود تگهای اچ تی ام ال را به هر تعداد که لازم است اضافه کنیم. 
    // برای اضافه کردن انواع المان(حتی یک المان دیگر که در یک متغییر دیگر ذخیره شده)کامنت و محتوای متنی به عنوان فرزند
// }

// حالت 2:
const orderList=document.getElementById("ordersUl");
const drinkText=document.getElementById("drinkText");
const errorBox=document.getElementById("errorMsg");
const customerName=document.getElementById("nameInput");
const drink=document.getElementById("drinkSelect");

function submitOrder() {
    const customerNameValue=customerName.value.trim();//حذف فاصله های اضافی که کاربر در اینپورت وارد می کند
    const drinkValue=drink.value;
    if(customerNameValue ==="" || !drinkValue){
        errorBox.innerText= "لطفا نام و نوشیدنی را وارد کنید!";
        return;//بعد از این دستور هیچ یک از دستورات تا بلاک فانکشن اجرا نمی شود
    }
    // else{
        errorBox.textContent=""; //نسبت به اینر تکست سرعت اجرای بهتری دارد
        drinkText.innerText=`انتخاب شما: ${drinkValue}`;
        //ایجاد یک آیتم لیست جدید
        const newOrder=document.createElement("li");
        newOrder.innerText=`🤷‍♀️ ${customerNameValue} - 🥂 ${drinkValue}`;
        orderList.appendChild(newOrder);

        // روش دوم:
        // orderList.innerHTML=`<li>🤷‍♀️ ${customerNameValue} - 🥂 ${drinkValue}</li>`
        
        // پاک کردن ورودی ها
        customerName.value="";
        drinkValue="";
    // } 
}
function toggleTheme() {
    const card=document.getElementById("drinkCard");
    card.classList.toggle("dark");
}
function reset() {
    // orderList.innerHTML="";//پراپرتی شبیه به اینر تکسک که توسط آن می توان المانهای اچ تی ام ال داخل تگ را تغییر یا نمایش داد
    orderList.replaceChildren(); //متدی برای جایگزین کردن المان و محتوا به جای المان های قبلی و امنیت و سرعت بالاتری نسبت به دستور بالا دارد
}