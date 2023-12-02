const openPopupCart = document.getElementById("popupShoppingCart");
const hiddenPopupCart = document.getElementById("shopCartPopup");
const closePopupShop = document.getElementById("closeShopCart");

openPopupCart.addEventListener("click", function (e) {
    if (hiddenPopupCart.style.display === "block") {
        hiddenPopupCart.style.display = "none";}
        else { hiddenPopupCart.style.display = "block";}


});

closePopupShop.addEventListener("click", function (e) {
    hiddenPopupCart.style.display = "none";

});


function totalCountsPopUp(){
    /* de vars voor de counts bij te houden */
    let totalCount = 0;
    let totalAmount = 0;
    /* dan gaan we per item in het karretje kijken */ 
    cart.forEach(function(item) {
        totalCount += item.quantity;
        totalAmount += parseFloat(item.quantity) * parseFloat(item.price);
    let noTaxEvasion = (totalAmount + ((totalAmount/100)*20)).toFixed(2);
    const totalCountEnd = document.getElementById('totalCountPopup');
    const totalPrice = document.getElementById('popupPrice1');
    const totalWithVAT = document.getElementById('totalWithVATPopup');
    totalCountEnd.textContent = '#' + totalCount;
    totalPrice.textContent = '€' + totalAmount;
    totalWithVAT.textContent = '€' + noTaxEvasion;

});
}

function removeSauce(name) {
    for (let i = 0 ; i < cart.length; i++) {
        if (cart[i].name === name)  {cart.splice(i, 1);
            break;
        }
}
    document.getElementById('totalCountPopup').textContent = '';
    document.getElementById('popupPrice1').textContent = '';
    document.getElementById('totalWithVATPopup').textContent = '';
    document.getElementById('totalCartPrice').textContent = "";
    document.getElementById('totalWithVAT').textContent ="";
    showCartPopUp();
    totalCountsPopUp();
    addTotal();
}