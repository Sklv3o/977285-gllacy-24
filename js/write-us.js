var link = document.querySelector(".adress-btn");

var popup = document.querySelector(".write-us-popup");

var close = popup.querySelector(".close-btn");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});
