var link = document.querySelector(".homepage-booking-btn");

var popup = document.querySelector(".homepage-booking-form");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("homepage-booking-form-hide");

});