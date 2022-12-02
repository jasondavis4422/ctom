//check if on browser or server
if (typeof window !== 'undefined') {
  console.log('You are on the browser')
} else {
  console.log('You are on the server')
}

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
const stim = new Stimuli(1);
console.log(stim.generateNextImage(2))
console.log(stim.generateNextVideo(2))
console.log(stim.getSeedArray())

//Data Set Information - make Collective_Data an array of Indiv_Data
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

var message = '[{"img_ratings":["66","37","68","35","70"],"vid_ratings":[],"collab_ratings":[]},{"img_ratings":[],"vid_ratings":["38","71","33","46","60"],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":[],"collab_vid_ratings":["30","70","36","64","46"]},{"img_ratings":["73","43","70","50","52"],"vid_ratings":[],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":["36","47","29","51","51"],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":[],"collab_vid_ratings":["52","72","59","36","15"]},{"img_ratings":["14","19","52","83","59"],"vid_ratings":[],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":["36","61","41","48","50"],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":[],"collab_vid_ratings":["34","65","35","69","59"]}]';
var random = new Result("Jason", "f005g23", message);
console.log(random.return_data(3));

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
