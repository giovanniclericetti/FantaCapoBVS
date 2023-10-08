// dichiara la variabile locale slideIndex e assegna 1
let slideIndex = 1;
showSlides(slideIndex);

// aggiunge funzionalità ai controlli di avanzamento con il valore passato dall'HTML
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Funzione che richiama la slide
function currentSlide(n) {
    slideIndex = n;
    showSlides(n);
}

// Funzione che fa scorrere slide e punti di avanzamento
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
