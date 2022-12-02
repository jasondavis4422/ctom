//check if on browser or server
if (typeof window !== 'undefined') {
  console.log('You are on the browser')
} else {
  console.log('You are on the server')
}

//constructs data_set to store ratings
const data_set = [];
class Individual_Data {
  constructor() {
    this.img_ratings = [];
    this.vid_ratings = [];
    this.collab_vid_ratings = [];
  }
  addNewRating(input, which_dataset) {
    if (which_dataset == 1) {
      this.img_ratings.push(input);
    }
    if (which_dataset == 2) {
      this.vid_ratings.push(input);
    }
    if (which_dataset == 3) {
      this.collab_vid_ratings.push(input);
    }
  }
}

class Stimuli {
  constructor(seed) {
    if (typeof seed == 'string') {
      this.seed = parseInt(seed);
    }
    if (typeof seed == 'undefined') {
      this.seed = 0;
    }
    if (typeof seed == 'boolean') {
      this.seed = 0;
    }
    if (typeof seed == 'number') {
      this.seed = seed;
    }
    this.num_of_trials = 3;
    this.image_arr = ["A", "B", "C"];
    this.video_arr = ["D", "E", "F"];
    this.seed_arr = ["012", "021", "120", "102", "210", "201"];
  }
  randomGenerate() {
    for (var trial_num = 0; trial_num < this.num_of_trials; trial_num++) {
      var image_set = Math.floor(Math.random() * 5);
      var video_set = Math.floor(Math.random() * 5);
      this.image_arr[trial_num] = image_set;
      this.video_arr[trial_num] = video_set;
    }
  }
  generateNextImage(trial_number) {
    this.str = this.seed_arr[this.seed];
    var myArray = [];
    myArray = this.str.split("");
    return this.image_arr[[myArray[trial_number]]];

  }
  generateNextVideo(trial_number) {
    this.str2 = this.seed_arr[this.seed];
    var myArray2 = [];
    myArray2 = this.str2.split("");
    return this.video_arr[[myArray2[trial_number]]];
  }
  getSeedArray() {
    this.str3 = this.seed_arr[this.seed];
    var myArray3 = [];
    myArray3 = this.str3.split("");
    for (var p = 0; p < myArray3; p++) {
      myArray3[p] = parseInt(myArray[p]);
    }
    return myArray3;
  }
}


if (localStorage.getItem('vid_trial_number') == null) {
  localStorage.setItem('vid_trial_number', '0')
}

var temp_vid_info = new Stimuli(parseInt(localStorage.getItem('seed')));
video_trial_number = parseInt(localStorage.getItem('vid_trial_number'));
console.log(temp_vid_info.generateNextVideo(video_trial_number));

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
    recording.addNewRating(rating, 2);
  }
  data_set.push(recording);
  if (localStorage.getItem('data_set') == null) {
    localStorage.setItem('data_set', '[]');
  }
  var recordings = JSON.parse(localStorage.getItem('data_set'));
  recordings.push(recording);
  localStorage.setItem('data_set', JSON.stringify(recordings));
}

function save_stimulus_data() {
  if (localStorage.getItem('vid_trial_number') == null) {
    localStorage.setItem('vid_trial_number', '0')
  }
  vid_trial_number = parseInt(localStorage.getItem('vid_trial_number'));
  vid_trial_number++;
  localStorage.setItem('vid_trial_number', vid_trial_number.toString());
}

function load_next_page() {
  window.location.href = "/html/collab_trials.html";
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
  load_next_page();
}
)
setTimeout(save_rating_data, 300000);
setTimeout(load_next_page, 300000);