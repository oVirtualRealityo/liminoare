const openFilter = document.getElementById('openFilter');
const hiddenFilter = document.getElementById('hiddenFilter');


/* nu een functie voor de filterbox */ 
openFilter.addEventListener("click", function (e) {
    // active class aanbrengen zoals labo18 FAQ
    openFilter.classList.toggle("activeSideButton")
    if (hiddenFilter.style.display === "block") {
        hiddenFilter.style.display = "none";}
    else  {
        hiddenFilter.style.display = "block";}
    }
    );


document.addEventListener("DOMContentLoaded", function() {
    const filterCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const products = document.querySelectorAll('.product');
/* dubbel nakijken of de pagina laadt met wat er gemarkeerd staat in de checkboxes */
    filterCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function() {
            const ingredient = this.value;
            products.forEach(function(product) {
                const ingredients = product.dataset.ingredients.split(', ');
                if (ingredients.includes(ingredient)) {
                    if (checkbox.checked) {
                        product.style.display = "block";
                    } else {
                        product.style.display = "none";
                    }
                }
            });
        });

        /* eerst nakijken in welke status de boxes zich bevinden */
        const ingredient = checkbox.value;
        products.forEach(function(product) {
            const ingredients = product.dataset.ingredients.split(', ');
            if (ingredients.includes(ingredient)) {
                if (checkbox.checked) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            }
        });
    });
});