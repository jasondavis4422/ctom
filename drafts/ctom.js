function createFrame() {
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady(vid_id) {
  var player;
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: vid_id,
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
  var done = false;
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 100);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

export { onYouTubeIframeAPIReady, onPlayerReady, onPlayerStateChange, stopVideo, createFrame }

//check if on browser or server
function checkBrowserorServer() {
  if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }
}

function save_participant_data() {
  var input_name = document.getElementById("Name");
  var input_ID = document.getElementById("ID");
  var input_seed = document.getElementById("seed");
  const name = input_name.value;
  const ID = input_ID.value;
  const seed_num = input_seed.value;
  if (name && ID && seed_num) {
    if (localStorage.getItem('name') == null) {
      localStorage.setItem('name', name);
    }
    if (localStorage.getItem('ID') == null) {
      localStorage.setItem('ID', ID);
    }
    if (localStorage.getItem('seed') == null) {
      localStorage.setItem('seed', seed_num);
    }
  }
  else {
    alert("Please enter in your data");
  }

}

function load_next_page_intro() {
  window.location = "/html/img_trials.html";
}

function save_rating_data() {
  var recording = new Individual_Data();
  var range_slider_list = document.getElementsByClassName("rangeslider");
  for (var i = 0; i < range_slider_list.length; i++) {
    var rating = document.getElementById("sliderRange" + i.toString()).value;
    recording.addNewRating(rating, 1);
  }
  data_set.push(recording);
  if (localStorage.getItem('data_set') == null) {
    localStorage.setItem('data_set', '[]');
  }
  var recordings = JSON.parse(localStorage.getItem('data_set'));
  recordings.push(recording);
  localStorage.setItem('data_set', JSON.stringify(recordings));
}

function load_next_page_img() {
  window.location.href = "/html/vid_trials.html";
}

function save_stimulus_data_img() {
  if (localStorage.getItem('img_trial_number') == null) {
    localStorage.setItem('img_trial_number', '0')
  }
  var img_trial_number = parseInt(localStorage.getItem('img_trial_number'));
  img_trial_number++;
  localStorage.setItem('img_trial_number', img_trial_number.toString());
}

function save_stimulus_data_vid() {
  if (localStorage.getItem('vid_trial_number') == null) {
    localStorage.setItem('vid_trial_number', '0')
  }
  var vid_trial_number = parseInt(localStorage.getItem('vid_trial_number'));
  vid_trial_number++;
  localStorage.setItem('vid_trial_number', vid_trial_number.toString());
}

function save_stimulus_data_collab() {
  if (localStorage.getItem('collab_trial_number') == null) {
    localStorage.setItem('collab_trial_number', '0')
  }
  var collab_trial_number = parseInt(localStorage.getItem('collab_trial_number'));
  collab_trial_number++;
  localStorage.setItem('collab_trial_number', collab_trial_number.toString());
}

function load_next_page_vid() {
  window.location.href = "/html/collab_trials.html";
}

function load_next_trial() {
  console.log("next trial");
  window.location.href = "/html/img_trials.html"
}
function load_end_page() {
  console.log('end page');
  window.location.href = "/html/endpage.html";
}

function load_next_page_end() {
  window.location = "introduction.html";
}

function remove_trial_numbers() {
  localStorage.removeItem('img_trial_number');
  localStorage.removeItem('vid_trial_number');
  localStorage.removeItem('collab_trial_number');
}

function access_data() {
  var results_set = [];
  var name = localStorage.getItem('name');
  var ID = localStorage.getItem('ID');
  var data = localStorage.getItem('data_set');
  var stimulus_info = new Stimuli(parseInt(localStorage.getItem('seed')));
  const result = new Result(name, ID, data, stimulus_info.getSeedArray());
  results_set.push(result);
}

export { checkBrowserorServer, save_participant_data, load_next_page_intro, save_rating_data, load_next_page_img, save_stimulus_data_img }
export { load_next_page_vid, load_next_trial, load_end_page, load_next_page_end, remove_trial_numbers, access_data, save_stimulus_data_vid, save_stimulus_data_collab }

// participant information  
const participant_set = [];
class Participant {
  constructor() {
    this.name = "";
    this.ID = "";
  }
}
const subject = new Participant();
participant_set.push(subject);

// Stimulus Set Information - assumes 3 people to be identified & 3 trials 
const stimulus_set = [];
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
    this.image_arr = ["/images/image1.jpeg", "/images/image2.jpeg", "/images/image3.jpeg"];
    this.video_arr = ["pCMFBlAUC0o", "sXDBXVjKbp8", "lBOpnhOTmT8"];
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

const data_set = [];
class Individual_Data {
  constructor(person) {
    this.personnum = person;
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
    else {
      this.collab_vid_ratings.push(input);
    }
  }
}

function modifyString(string) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] == "[") {
      string = string.replace(string[i], "");
    }
  }
  for (var k = 0; k < string.length; k++) {
    if (string[k] == "]") {
      string = string.replace(string[k], "");
    }
  }
  string = string.replace(/:/g, "");
  string = string.replace(/{/g, "");
  string = string.replace(/}/g, "");
  string = string.replace(/"/g, "");
  string = string.replace(/'/g, "");
  return string;
}
var string2 = modifyString(items);
const myArray = string2.split(",");
var name_array = [];
var ID_array = [];
for (var e = 0; e < myArray.length; e++) {
  var str = myArray[e];
  if (str.includes("name") == true) {
    str = str.replace("name", "");
    name_array.push(str);
  }
  if (str.includes("ID") == true) {
    str = str.replace("ID", "")
    ID_array.push(str);
  }
}

class Result {
  constructor(name, ID, data, stimuli) {
    this.name = name;
    this.ID = ID;
    this.stimuli = stimuli;
    var new_message = this.modifyStrings(data);
    const myArray2 = new_message.split(",");
    for (var e = 0; e < myArray2.length; e++) {
      str = myArray2[e];
      if (str.includes('img_ratings') == true) {
        str = str.replace('img_ratings', "");
        myArray2[e] = str;
      }
      if (str.includes('collab_vid_ratings') == true) {
        str = str.replace('collab_vid_ratings', "");
        myArray2[e] = str;
      }
      if (str.includes('collab_ratings') == true) {
        str = str.replace('collab_ratings', "");
        myArray2[e] = str;
      }
      if (str.includes('vid_ratings') == true) {
        str = str.replace('vid_ratings', "");
        myArray2[e] = str;
      }
    }
    for (var i = 0; i < myArray2.length; i++) {
      if (myArray2[i].includes("collab_") == true || myArray2[i].includes('collab_') == true) {
        str = myArray2[i];
        str = str.replace("collab_", "");
        str = str.replace('collab_', "")
        myArray2[i] = str;
      }
      if (myArray2[i] == "" || myArray2[i] == '') {
        myArray2.splice(i, 1);
      }
    }
    for (var p = 0; p < myArray2.length; p++) {
      if (myArray2[p] == "" || myArray2[p] == " ") {
        myArray2.splice(p, 1);
      }
    }
    this.imgRatings = [];
    this.vidRatings = [];
    this.collabRatings = [];
    this.numTrials = 3;
    this.arrayTypes = 3;
    this.numRatings = 5;
    for (var numTrial = 0; numTrial < this.numTrials; numTrial++) { //splits ratings into images, videos, and collabs
      for (var array_type = 0; array_type < this.arrayTypes; array_type++) {
        var num_of_ratings = 0;
        if (array_type == 0) {
          while (num_of_ratings < this.numRatings) {
            this.imgRatings.push(myArray2[0])
            myArray2.splice(0, 1);
            num_of_ratings++;
          }
        }
        if (array_type == 1) {
          while (num_of_ratings < this.numRatings) {
            this.vidRatings.push(myArray2[0])
            myArray2.splice(0, 1);
            num_of_ratings++;
          }
        }
        if (array_type == 2) {
          while (num_of_ratings < this.numRatings) {
            this.collabRatings.push(myArray2[0])
            myArray2.splice(0, 1);
            num_of_ratings++;
          }
        }
      }
    }
    this.trial1_imgRatings = [];
    this.trial2_imgRatings = [];
    this.trial3_imgRatings = [];
    this.trial1_vidRatings = [];
    this.trial2_vidRatings = [];
    this.trial3_vidRatings = [];
    this.trial1_collabRatings = [];
    this.trial2_collabRatings = [];
    this.trial3_collabRatings = [];
    for (var p = 0; p < (this.numTrials * this.arrayTypes); p++) { //splits ratings based on trial_number
      num_of_ratings = 0;
      if (p == 0) {
        while (num_of_ratings < this.numRatings) {
          this.trial1_imgRatings.push(this.imgRatings[0])
          this.imgRatings.splice(0, 1);
          num_of_ratings++;
        }
      }
      if (p == 1) {
        while (num_of_ratings < this.numRatings) {
          this.trial2_imgRatings.push(this.imgRatings[0])
          this.imgRatings.splice(0, 1);
          num_of_ratings++;
        }
      }
      if (p == 2) {
        while (num_of_ratings < this.numRatings) {
          this.trial3_imgRatings.push(this.imgRatings[0])
          this.imgRatings.splice(0, 1);
          num_of_ratings++;
        }
      }
      if (p == 3) {
        while (num_of_ratings < this.numRatings) {
          this.trial1_vidRatings.push(this.vidRatings[0])
          this.vidRatings.splice(0, 1);
          num_of_ratings++;
        }
      }
      if (p == 4) {
        while (num_of_ratings < this.numRatings) {
          this.trial2_vidRatings.push(this.vidRatings[0])
          this.vidRatings.splice(0, 1);
          num_of_ratings++;
        }
      }
      if (p == 5) {
        while (num_of_ratings < this.numRatings) {
          this.trial3_vidRatings.push(this.vidRatings[0])
          this.vidRatings.splice(0, 1);
          num_of_ratings++;
        }
      }
      if (p == 6) {
        while (num_of_ratings < this.numRatings) {
          this.trial1_collabRatings.push(this.collabRatings[0])
          this.collabRatings.splice(0, 1);
          num_of_ratings++;
        }
      }
      if (p == 7) {
        while (num_of_ratings < this.numRatings) {
          this.trial2_collabRatings.push(this.collabRatings[0])
          this.collabRatings.splice(0, 1);
          num_of_ratings++;
        }
      }
      if (p == 8) {
        while (num_of_ratings < this.numRatings) {
          this.trial3_collabRatings.push(this.collabRatings[0])
          this.collabRatings.splice(0, 1);
          num_of_ratings++;
        }
      }
    }
  }

  return_data(p) //0-2 = imgRatings (organized by trial), 3-5 = vidRatings (organized), 6-8 = collabRatings)
  {
    if (p == 0) {
      return this.trial1_imgRatings;
    }
    if (p == 1) {
      return this.trial2_imgRatings;
    }
    if (p == 2) {
      return this.trial3_imgRatings;
    }
    if (p == 3) {
      return this.trial1_vidRatings;
    }
    if (p == 4) {
      return this.trial2_vidRatings;
    }
    if (p == 5) {
      return this.trial3_vidRatings;
    }
    if (p == 6) {
      return this.trial1_collabRatings;
    }
    if (p == 7) {
      return this.trial2_collabRatings;
    }
    if (p == 8) {
      return this.trial3_collabRatings;
    }
  }

  modifyStrings(string) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] == "[") {
        string = string.replace(string[i], "");
      }
    }
    for (var k = 0; k < string.length; k++) {
      if (string[k] == "]") {
        string = string.replace(string[k], "");
      }
    }
    string = string.replace(/:/g, "");
    string = string.replace(/{/g, "");
    string = string.replace(/}/g, "");
    string = string.replace(/"/g, "");
    string = string.replace(/'/g, "");
    return string;
  }
}

export { Participant, Stimuli, Individual_Data, Result };

//var message = '[{"img_ratings":["66","37","68","35","70"],"vid_ratings":[],"collab_ratings":[]},{"img_ratings":[],"vid_ratings":["38","71","33","46","60"],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":[],"collab_vid_ratings":["30","70","36","64","46"]},{"img_ratings":["73","43","70","50","52"],"vid_ratings":[],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":["36","47","29","51","51"],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":[],"collab_vid_ratings":["52","72","59","36","15"]},{"img_ratings":["14","19","52","83","59"],"vid_ratings":[],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":["36","61","41","48","50"],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":[],"collab_vid_ratings":["34","65","35","69","59"]}]';
//var random = new Result("Jason", "f005g23", message);


// Data Analysis Notes:
// By Image/Video: search through every participant in results_set (using for loop)
// uncover their stimulus_set and search for image number based on image_arr (image A is 1, image B is 2, image C is 3)
// if stimulus_set contains the image, then find the trial on which that image occured (find using seed array given in function)
//retrieve img, vid, collab ratings for that specific image
//average ratings across type across participants to see any effects on analyzing the person

//By Type: search through every participant in results_set (using for loop)
//access img or vid or collab ratings and average across ratings
//analyze effects across participants

//By Both: similar method to previous two?

//Necessary Notes:
// 1. Load in videos correctly and save videos to the files. I had trouble before because the videos are too big, but we need to add actual videos to the vid_arr.
// 2. Style the page using CSS to make it look better. Once the site looks good, then this should be the main thing.
// 3. (IF NECESSARY) Find different storage other than localStorage. However, it is pretty simple to access data by copying the info, especially the ratings.