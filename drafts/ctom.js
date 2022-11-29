// Paradigm: 
// Introduction
// Consent Page
// nextPage()
// Fill-in Information - save information to participant_set
// nextPage()
// Trial() - contains image --> nextPart() --> video --> nextPart() --> colloborative video ratings --> nextTrial() * 5
// End Page
// need to add a progress bar for nextTrial + nextPage + (maybe nextPart);
// need to use addEventListener to add in event functions based off clicks, movements, etc. (just like pain sliders)
// need to load in images and videos to be able to use (just like kung Fury)
// need to add in 
// Useful Slider Code: 
// output12.innerHTML = rangeslider12.value;
//rangeslider12.oninput = function()
// output.innerHTML = this.value;
//
//
// Participant Information - need to make ParticipantSet an array of Participants
const participant_set = [];
class Participant
{
    constructor()
    {
        this.name = "";
        this.ID = "";
        this.age = 0;
    }
}
const subject = new Participant();
participant_set.push(subject);

// Stimulus Set Information - need to make StimulusSet an array of Stimuluses
const stimulus_set = [];
class Stimulus
{
constructor(pair_id)
{
    this.num_of_pairs = 5;
    this.num_of_trials = 5;
    this.num_of_images = 30;
    this.num_of_videos = 30;
    this.pair_num = pair_id;
    this.trial_arr = [];
    this.image_arr = [];
    this.video_arr = [];

}
randomGenerate()
{
    for (var trial_number = 0; trial_number < this.num_of_trials; trial_number++)
    {
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
const Pair = new Stimulus (1);
Pair.randomGenerate();
stimulus_set.push(Pair);
console.log(Pair.image_arr);


//Data Set Information - make Collective_Data an array of Indiv_Data
const data_set = [];
class Individual_Data
{
constructor(person)
{
    this.personnum = person;
    this.img_ratings = [];
    this.vid_ratings = [];
    this.collab_vid_ratings = [];
    this.pair_id = 0;
    if (person == 1)
    {
        this.pair_id = 1;
    }
    if (person % 2 != 0)
    {
        this.pair_id = (person/2) + 0.5;
    }
    else
    {
        this.pair_id = person/2;
    }
}
addNewRating(input, which_dataset)
{
   if (which_dataset == 1)
   {
    this.img_ratings.push(input);
   }
   if (which_dataset == 2)
   {
    this.vid_ratings.push(input);
   }
   else
   {
    this.collab_vid_ratings.push(input);
   }
}
}
// Slider Information
// Need to add a checkifUsed function to determine whether the slider has been used and return the corresponding information.
// I think this is already part of the rangeSlider class as seen in my HTML, but I am not actually sure.
class rangeSlider 
{
    constructor ()
    {
        this.defaultvalue = 1;
        this.used = false;
    }
    updateValue (input)
    {
        this.defaultvalue = input;
        this.used = true;
    }
    returnValue ()
    {
        return this.defaultvalue;
    }

}
var page_number = 1;
function nextPage (page_number)
{
    if (page_number < 4)
    {
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
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();
//<div id = "clock" onload="currentTime()"></div>// (HTML Code)
