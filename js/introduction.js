// check if on browser or server
if (typeof window !== 'undefined') {
    console.log('You are on the browser')
} else {
    console.log('You are on the server')
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

//set seed order *IMPORTANT --> MUST DO BEFORE EXPERIMENT GOES LIVE
temp_intro = new Stimuli(0);
if (localStorage.getItem('seed') == null) {
    localStorage.setItem('seed', temp_intro.seed);
}

//sets up button, also grabs name and ID from input box
var next_button = document.getElementsByClassName("next-intro")[0];
var input_name = document.getElementById("Name");
var input_ID = document.getElementById("ID");

//loads next page
function load_next_page() {
    window.location = "/html/img_trials.html";
}

//save participant data if valid name and ID are entered, alerts person to do so if not
function save_participant_data() {
    const name = input_name.value;
    const ID = input_ID.value;
    if (name && ID) {
        if (localStorage.getItem('name') == null) {
            localStorage.setItem('name', name);
        }
        if (localStorage.getItem('ID') == null) {
            localStorage.setItem('ID', ID);
        }
    else {
        alert("Please enter in your data");
    }
}
}

//what happens when we click "NEXT"
next_button.addEventListener('click', function () {
    save_participant_data();
    load_next_page();
}
)

//automatically saves data and loads next page after 5 min
setTimeout(save_participant_data, 300000);
setTimeout(load_next_page, 300000);
