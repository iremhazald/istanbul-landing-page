const btntoggle = document.getElementById("mynavtoggle");
const linksection = document.querySelector(".links");

btntoggle.addEventListener("click", function () {
  // Menü kapalıysa aç, açıksa kapat
  if (linksection.classList.contains("links")) {
    linksection.classList.remove("links");
    linksection.classList.add("openLinks");
  } else {
    linksection.classList.remove("openLinks");
    linksection.classList.add("links");
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 576) {
    linksection.classList.remove("openLinks");
    linksection.classList.add("links"); // Geniş ekranda menü açık olmasın
  }
});
