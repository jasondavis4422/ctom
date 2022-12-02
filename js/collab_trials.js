//check if on browser or server
if (typeof window !== 'undefined') {
  console.log('You are on the browser')
} else {
  console.log('You are on the server')
}

//constructs data_set to store ratings
var num_of_trials = 3;
const data_set = [];
class Individual_Data {
  constructor() {
    this.img_ratings = [];
    this.vid_ratings = [];
    this.collab_ratings = [];
  }
  addNewRating(input, which_dataset) {
    if (which_dataset == 1) {
      this.img_ratings.push(input);
    }
    if (which_dataset == 2) {
      this.vid_ratings.push(input);
    }
    if (which_dataset == 3) {
      this.collab_ratings.push(input);
    }
  }
}

if (localStorage.getItem('collab_trial_number') == null) {
  localStorage.setItem('collab_trial_number', '0')
}

//grabs each slider and allows for ratings
var recording = new Individual_Data();
var range_slider_list = document.getElementsByClassName("rangeslider");
for (k = 0; k < range_slider_list.length; k++) {
  var rangeslider = document.getElementById("sliderRange" + k.toString());
  var output = document.getElementById("demo" + k.toString());
  output.innerHTML = rangeslider.value;
}
document.getElementById("sliderRange0").addEventListener("input", function () {
  document.getElementById("demo0").innerHTML = this.value;
})
document.getElementById("sliderRange1").addEventListener("input", function () {
  document.getElementById("demo1").innerHTML = this.value;
})
document.getElementById("sliderRange2").addEventListener("input", function () {
  document.getElementById("demo2").innerHTML = this.value;
})
document.getElementById("sliderRange3").addEventListener("input", function () {
  document.getElementById("demo3").innerHTML = this.value;
})
document.getElementById("sliderRange4").addEventListener("input", function () {
  document.getElementById("demo4").innerHTML = this.value;
})

//saves data from the ratings
function save_rating_data() {
  for (i = 0; i < range_slider_list.length; i++) {
    rating = document.getElementById("sliderRange" + i.toString()).value;
    recording.addNewRating(rating, 3);
  }
  data_set.push(recording);
  if (localStorage.getItem('data_set') == null) {
    localStorage.setItem('data_set', '[]');
  }
  var recordings = JSON.parse(localStorage.getItem('data_set'));
  recordings.push(recording);
  localStorage.setItem('data_set', JSON.stringify(recordings));
}

//saves stimulus_set and trial_number information
function save_stimulus_data() {
  if (localStorage.getItem('collab_trial_number') == null) {
    localStorage.setItem('collab_trial_number', '0')
  }
  collab_trial_number = parseInt(localStorage.getItem('collab_trial_number'));
  collab_trial_number++;
  localStorage.setItem('collab_trial_number', collab_trial_number.toString());
}

//loads next trial or next end_page
function load_next_trial() {
  console.log("next trial");
  window.location.href = "/html/img_trials.html"
}
function load_end_page() {
  console.log('end page');
  window.location.href = "/html/endpage.html";
}


var next_button = document.getElementsByClassName("next-page")[0];
next_button.addEventListener('click', function (event) {
  for (i = 0; i < range_slider_list.length; i++) {
    rating = document.getElementById("sliderRange" + i.toString()).value;
    if (rating == 1) {
      alert('Please answer all the questions')
      var button = event.target;
      button.stopPropagation();
    }

  }
  save_rating_data();
  save_stimulus_data();
  var trial = parseInt(localStorage.getItem('collab_trial_number'));
  if (trial < num_of_trials) {
    load_next_trial();
    setTimeout(load_next_trial, 300000);
  }
  if (trial == num_of_trials) {
    load_end_page();
    setTimeout(load_end_page, 300000);
  }
}
)
setTimeout(save_rating_data, 300000);
setTimeout(save_stimulus_data, 300000);
