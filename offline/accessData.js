var results_set = [];

class Result {
    constructor(name, ID, data, stimuli) {
      this.name = name;
      this.ID = ID;
      this.stimuli = stimuli;
      var new_message = this.modifyStrings(data);
      const myArray2 = new_message.split(",");
      for (var e = 0; e < myArray2.length; e++) {
        var str = myArray2[e];
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
var stimulus_info = new Stimuli(0);
var named = "Jason";
var ID = "f005g23";
var data = '[{"img_ratings":["19","67","38","58","35"],"vid_ratings":[],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":["57","38","64","39","56"],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":[],"collab_ratings":["55","64","54","41","63"]},{"img_ratings":["21","69","93","38","50"],"vid_ratings":[],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":["51","57","50","31","40"],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":[],"collab_ratings":["28","66","50","32","31"]},{"img_ratings":["57","59","66","50","67"],"vid_ratings":[],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":["27","42","64","70","35"],"collab_vid_ratings":[]},{"img_ratings":[],"vid_ratings":[],"collab_ratings":["48","53","27","43","42"]}]';
const result = new Result (named, ID, data, stimulus_info.getSeedArray());
console.log(result.name)
results_set.push(result);
console.log(results_set[0].trial1_imgRatings);
