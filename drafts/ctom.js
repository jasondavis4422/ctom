
const participant_set = [];
class Participant {
    constructor() {
        this.name = "";
        this.ID = "";
        this.age = 0;
    }
}
const subject = new Participant();
participant_set.push(subject);

// Stimulus Set Information - need to make StimulusSet an array of Stimuluses
const stimulus_set = [];
class Stimulus {
    constructor(pair_id) {
        this.num_of_pairs = 5;
        this.num_of_trials = 5;
        this.num_of_images = 30;
        this.num_of_videos = 30;
        this.pair_num = pair_id;
        this.trial_arr = [];
        this.image_arr = [];
        this.video_arr = [];

    }
    randomGenerate() {
        for (var trial_number = 0; trial_number < this.num_of_trials; trial_number++) {
            var image_set = Math.floor(Math.random() * this.num_of_images);
            var video_set = Math.floor(Math.random() * this.num_of_videos);
            console.log("Image:" + image_set);
            console.log("Video:" + video_set);
            console.log(" ");
            this.image_arr[trial_number] = image_set;
            this.video_arr[trial_number] = video_set;
            this.trial_arr[trial_number] = trial_number;
        }
    }
}
const Pair = new Stimulus(1);
Pair.randomGenerate();
stimulus_set.push(Pair);
console.log(Pair.image_arr);


//Data Set Information - make Collective_Data an array of Indiv_Data
const data_set = [];
class Individual_Data {
    constructor(person) {
        this.personnum = person;
        this.img_ratings = [];
        this.vid_ratings = [];
        this.collab_vid_ratings = [];
        this.pair_id = 0;
        if (person == 1) {
            this.pair_id = 1;
        }
        if (person % 2 != 0) {
            this.pair_id = (person / 2) + 0.5;
        }
        else {
            this.pair_id = person / 2;
        }
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
// Slider Information
// Need to add a checkifUsed function to determine whether the slider has been used and return the corresponding information.
// I think this is already part of the rangeSlider class as seen in my HTML, but I am not actually sure.
class rangeSlider {
    constructor() {
        this.defaultvalue = 1;
        this.used = false;
    }
    updateValue(input) {
        this.defaultvalue = input;
        this.used = true;
    }
    returnValue() {
        return this.defaultvalue;
    }

}
var page_number = 1;
function nextPage(page_number) {
    if (page_number < 4) {
        page_number += 1;
    }


}
//clock counter, if necessary
function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("clock").innerText = time;
    let t = setTimeout(function () { currentTime() }, 1000);
}
currentTime();
//<div id = "clock" onload="currentTime()"></div>// (HTML Code)

//check if on browser or server
if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }
  
  var message_3 = '[{"name":"Jason","ID":"f005g23"},{"name":"Jason","ID":"f005g23"}]';
  var message_2 = "What is up"
  message_3 = message_3.replace(/{/g, "");
  message_3 = message_3.replace(/}/g, "");
  //message = message.replace(/"["/g, "");
  message_3 = message_3.replace(/"/g, "");
  message_3 = message_3.replace(/:/g, "");
  
  //index = message.indexOf("name")
  const myArray = message_3.split(",");
  console.log(myArray);
  name_array = [];
  ID_array = [];
  for (e = 0; e < myArray.length; e++) {
  str = myArray[e];
  if (str.includes("name") == true) {
    str = str.replace("name", "");
    name_array.push(str);
  }
  if (str.includes("ID") == true) {
    str = str.replace("ID", "")
    ID_array.push(str);
  
  }
  }
  //console.log(name_array);
  //console.log(ID_array);
  
  var message_4 = '[{"img_ratings":["66","37","68","35","70"],"vid_ratings":[],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":["38","71","33","46","60"],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":[],"collab_vid_ratings":["30","70","36","64","46"]},{"img_ratings":["73","43","70","50","52"],"vid_ratings":[],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":["36","47","29","51","51"],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":[],"collab_vid_ratings":["52","72","59","36","15"]},{"img_ratings":["14","19","52","83","59"],"vid_ratings":[],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":["36","61","41","48","50"],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":[],"collab_vid_ratings":["34","65","35","69","59"]}]';
  message_4 = message_4.replace(/{/g, "");
  message_4 = message_4.replace(/}/g, "");
  //message = message.replace(/"["/g, "");
  message_4 = message_4.replace(/"/g, "");
  message_4 = message_4.replace(/:/g, "");
  //console.log(message_4);
  const myArray2 = message_4.split(",");
  //console.log(myArray2);
  for (e = 0; e < myArray2.length; e++) {
     str = myArray2[e];
     if (str.includes('img_ratings') == true)
     {
      str = str.replace("img_ratings", "");
      myArray2[e] = str;
     }
     if (str.includes('vid_ratings') == true)
     {
      str = str.replace("vid_ratings", "");
      myArray2[e] = str;
     }
     if (str.includes('collab_ratings') == true)
     {
      str = str.replace("collab_ratings", "");
      myArray2[e] = str;
     }
    }
  
  console.log(myArray2);
  img_ratings = [];
  vid_ratings = [];
  
  for (array_type = 0; array_type < 2; array_type++) {
    num_of_ratings = 0;
    if (array_type == 0) {
      while (num_of_ratings < 3) {
        img_ratings.push(myArray2[0])
        myArray2.splice(0, 1);
        num_of_ratings++;
      }
    }
    if (array_type == 1) {
      while (num_of_ratings < 3) {
        vid_ratings.push(myArray2[0])
        myArray2.splice(0, 1);
        num_of_ratings++;
      }
    }
  //add array type 2 for collab_ratings, add for loop for number of trials arround the array_type
  }
  console.log(img_ratings);
  console.log(vid_ratings);
  console.log(myArray2);
  
  
  
  //loads next page
  function load_next_page() {
    window.location = "introduction.html";
  }
  //automatically loads next page after 5 mins
  setTimeout(load_next_page, 300000);
  
  //what happens when we click "NEXT"
  var next_button = document.getElementsByClassName("next-end")[0];
  next_button.addEventListener('click', function () {
    remove_trial_numbers();
    var participant_data = localStorage.getItem('participant_set');
    var rating_data = localStorage.getItem('data_set');
   // var stimulus_data = localStorage.getItem('stimulus_set'); haven't made stimulus set
    //grab_and_fix_data(participant_data, rating_data, stimulus_data); haven't finished grab _and_fix_data
    load_next_page();
  })
  
  //clears temporary trial numbers for next participant
  function remove_trial_numbers() {
    localStorage.removeItem('img_trial_number');
    localStorage.removeItem('vid_trial_number');
    localStorage.removeItem('collab_trial_number');
  }
  
  function grab_and_fix_data(participant_data, rating_data, stimulus_data)
  {
   participant_data
   rating_data
   stimulus_data
  }
  //need to make function that grabs the string for the participant_set
  