import { Participant, Stimuli, Individual_Data, Result } from "/drafts/ctom.js";
import { checkBrowserorServer, save_participant_data, load_next_page_intro, save_rating_data, load_next_page_img, save_stimulus_data_img } from "/drafts/ctom.js"
import { load_next_page_vid, load_next_trial, load_end_page, load_next_page_end, remove_trial_numbers, access_data, save_stimulus_data_vid, save_stimulus_data_collab } from "/drafts/ctom.js"

//check if on browser or server
checkBrowserorServer();

//constructs data_set to store ratings
var num_of_trials = 3;
const data_set = [];

if (localStorage.getItem('collab_trial_number') == null) {
  localStorage.setItem('collab_trial_number', '0')
}

//grabs each slider and allows for ratings
var recording = new Individual_Data();
var range_slider_list = document.getElementsByClassName("rangeslider");
for (var k = 0; k < range_slider_list.length; k++) {
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

var next_button = document.getElementsByClassName("next-page")[0];
next_button.addEventListener('click', function (event) {
  for (var i = 0; i < range_slider_list.length; i++) {
    var rating = document.getElementById("sliderRange" + i.toString()).value;
    if (rating == 1) {
      alert('Please answer all the questions')
      var button = event.target;
      button.stopPropagation();
    }

  }
  save_rating_data();
  save_stimulus_data_collab();
  var trial = parseInt(localStorage.getItem('collab_trial_number'));
  if (trial < num_of_trials) {
    load_next_trial();
    setTimeout(load_next_trial, 600000);
  }
  if (trial == num_of_trials) {
    load_end_page();
    setTimeout(load_end_page, 600000);
  }
}
)
setTimeout(save_rating_data, 600000);
setTimeout(save_stimulus_data_collab, 600000);
