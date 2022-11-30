function load_next_page() {
  window.location = "introduction.html";
}
setTimeout(load_next_page, 30000);
var next_button = document.getElementsByClassName("next-end")[0];
next_button.addEventListener('click', function () {
  load_next_page();
})
