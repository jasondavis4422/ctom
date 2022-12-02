//check if on browser or server
if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }
  
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
            //console.log("Image:" + image_set);
            //console.log("Video:" + video_set);
            //console.log(" ");
            this.image_arr[trial_number] = image_set;
            this.video_arr[trial_number] = video_set;
            this.trial_arr[trial_number] = trial_number;
        }
    }
}
const Pair = new Stimulus(1);
Pair.randomGenerate();
stimulus_set.push(Pair);
//console.log(Pair.image_arr);


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

    //document.getElementById("clock").innerText = time;
    let t = setTimeout(function () { currentTime() }, 1000);
}
currentTime();
//<div id = "clock" onload="currentTime()"></div>// (HTML Code)


items = '[{"name":"Jason","ID":"f005g23"},{"name":"Jason","ID":"f005g23"}]';
function modifyString(string) {
    for (var i = 0; i < string.length;i++) {
        if (string[i] == "[") {
            string = string.replace(string[i], "");
        }
    }
    for (var k = 0; k < string.length;k++) {
        if(string[k] == "]") {
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
    string2 = modifyString(items);
    const myArray = string2.split(",");
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

//need to set ID_array and name_array as part of participant constrcuctor

  var message_4 = '[{"img_ratings":["66","37","68","35","70"],"vid_ratings":[],"collab_ratings":[]},{"img_ratings":[],"vid_ratings":["38","71","33","46","60"],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":[],"collab_vid_ratings":["30","70","36","64","46"]},{"img_ratings":["73","43","70","50","52"],"vid_ratings":[],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":["36","47","29","51","51"],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":[],"collab_vid_ratings":["52","72","59","36","15"]},{"img_ratings":["14","19","52","83","59"],"vid_ratings":[],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":["36","61","41","48","50"],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":[],"collab_vid_ratings":["34","65","35","69","59"]}]';
  new_message = modifyString(message_4);
  const myArray2 = new_message.split(",");
  console.log(myArray2);

  for (e = 0; e < myArray2.length; e++) {
     str = myArray2[e];
     if (str.includes('img_ratings') == true)
     {
      str = str.replace('img_ratings', "");
      myArray2[e] = str;
     }
     if (str.includes('collab_vid_ratings') == true)
     {
      str = str.replace('collab_vid_ratings', "");
      myArray2[e] = str;
     }
     if (str.includes('collab_ratings') == true)
     {
      str = str.replace('collab_ratings', "");
      myArray2[e] = str;
     }
     if (str.includes('vid_ratings') == true)
     {
        str = str.replace('vid_ratings', "");
        myArray2[e] = str;
     }
    }
  console.log(myArray2);
  for (var i = 0; i < myArray2.length;i++)
  {
    if(myArray2[i].includes("collab_") == true || myArray2[i].includes('collab_') == true){
        str = myArray2[i];
        str = str.replace("collab_", "");
        str = str.replace('collab_', "")
        myArray2[i] = str;
    }
    if (myArray2[i] == "" || myArray2[i] == '')  {
        myArray2.splice(i, 1);
    }
}
for (var p = 0; p < myArray2.length;p++){
    if (myArray2[p] == "" || myArray2[p] == " ") {
        myArray2.splice(p, 1);
    }
}

  console.log(myArray2);
  imgRatings = [];
  vidRatings = [];
  collabRatings = [];
  var numTrials = 3;
  var arrayTypes = 3;
  var numRatings = 5;
for (numTrial = 0; numTrial < numTrials; numTrial++)
{
  for (array_type = 0; array_type < arrayTypes; array_type++) {
    num_of_ratings = 0;
    if (array_type == 0) {
      while (num_of_ratings < numRatings) {
        imgRatings.push(myArray2[0])
        myArray2.splice(0, 1);
        num_of_ratings++;
      }
    }
    if (array_type == 1) {
      while (num_of_ratings < numRatings) {
        vidRatings.push(myArray2[0])
        myArray2.splice(0, 1);
        num_of_ratings++;
      }
    }
    if (array_type == 2) {
        while (num_of_ratings < numRatings) {
          collabRatings.push(myArray2[0])
          myArray2.splice(0, 1);
          num_of_ratings++;
        }
      }
  }
}
  console.log(imgRatings);
  console.log(vidRatings);
  console.log(collabRatings);
  
var results_set = [];
  class Results 
  {
    constructor(name, ID, image_ratings, video_ratings, collab_ratings2)
    {
       this.name = name;
       this.ID = ID;
       this.image_ratings = image_ratings;
       this.video_ratings = video_ratings;
       this.collab_ratings = collab_ratings2;
    }
  }

const result = new Results(name_array[0], ID_array[0], imgRatings, vidRatings, collabRatings);
results_set.push(result);
console.log(results_set[0].name);



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
   //var stimulus_data = localStorage.getItem('stimulus_set'); haven't made stimulus set
    grab_and_fix_data(participant_data, rating_data);
    load_next_page();
  })
  
  //function grab_and_fix_data(participant_data, rating_data)
  