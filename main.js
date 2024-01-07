var toggleButtons = document.querySelectorAll('.searchflight');

// Her bir toggle düğmesi için olay dinleyicisi ekle
toggleButtons.forEach(function (div) {
  div.addEventListener('click', function () {
    // Tıklandığında çağrılacak fonksiyon
    toggleDivVisibility();
  });
});

// Div'lerin görünürlüğünü değiştiren fonksiyon
function toggleDivVisibility() {
  // Tüm toggle div'lerini seç
  var toggleDivs = document.querySelectorAll('.ld-1');

  // Her bir toggle div'i için
  toggleDivs.forEach(function (div) {
    // "d-none" sınıfını kaldır, "d-block" sınıfını ekle
    div.classList.remove('d-none');
    div.classList.add('d-flex');
  });
}