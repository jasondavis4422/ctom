//check if on browser or server
if (typeof window !== 'undefined') {
  console.log('You are on the browser')
} else {
  console.log('You are on the server')
}

//loads next page
function load_next_page() {
  window.location = "introduction.html";
}

//clears temporary trial numbers for next participant
function remove_trial_numbers() {
  localStorage.removeItem('img_trial_number');
  localStorage.removeItem('vid_trial_number');
  localStorage.removeItem('collab_trial_number');
}

//automatically loads next page after 5 min
setTimeout(remove_trial_numbers, 300000);
setTimeout(load_next_page, 300000);

//what happens when we click "NEXT"
var next_button = document.getElementsByClassName("next-end")[0];
next_button.addEventListener('click', function () {
  remove_trial_numbers();
  load_next_page();
})
