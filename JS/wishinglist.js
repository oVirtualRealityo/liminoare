/* een array aanmaken om de wishlist items in te storen */
const wishlist= [];

/* de wishlistbuttons verzamelen */
let wishlistButtons = document.querySelectorAll('.addToWishlist');
/* dan gaan we per geklikte button een basisfunctie uitvoeren */
wishlistButtons.forEach(function(button, index){
    button.addEventListener('click', function(e) {
        let parentProduct = e.target.closest('.product');
        let wishlistIMG = parentProduct.querySelector('.wishlistIMG');
        /* als deze al in wishlist staat terug uit de lijst halen */
        if (wishlist.includes(index)) {
            let sauceIndex = wishlist.indexOf(index);
            wishlist.splice(sauceIndex, 1);
            wishlistIMG.classList.remove('active2');
        }
        /* indien de saus niet in de array zit dan voegen we deze toe en zetten we het icon op display block doormiddel van de class toe te voegen. */
        else {
            wishlist.push(index);
            wishlistIMG.classList.add('active2');
        }
        console.log(wishlist[index]);
    }); 
});
