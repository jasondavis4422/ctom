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
// Participant Information
const participant_set = [];
class Participant_Set
{
    constructor()
    {
        this.name = "";
        this.ID = "";
        this.age = 0;
    }
    updateName (newName)
    {
        this.name = newName;
    }
    updateID (newID)
    {
        this.ID = newID;
    }
    updateAge (newAge)
    {
        this.age = newAge;
    }
}
const subject = new Participant_Set()
participant_set.push(subject);
participant_set[0].updateName("Jason");


// Stimulus Set Information
var num_of_pairs = 5;
var num_of_trials = 5;
var num_of_images = 30;
var num_of_videos = 30;
const image_array = [];
const video_array = [];
const trial_array = [];
const stimulus_set = [];
class Stimulus_Set 
{
constructor(pair_id, trial_array, image_array, video_array)
{
    this.pair_num = pair_id;
    this.trial_arr = trial_array;
    this.image_arr = image_array;
    this.video_arr = video_array;

}
}
for (var pair_id = 1; pair_id < num_of_pairs; pair_id++)
{
    for (var trial_number = 1; trial_number < num_of_trials; trial_number++)
    {
   var image_set = getRandomInt(num_of_images);
   var video_set = getRandomInt(num_of_videos);
   console.log("Image:" + image_set);
   console.log("Video:" + video_set);
   console.log(" ");
   image_array[trial_number] = image_set;
   video_array[trial_number] = video_set;
   trial_array[trial_number] = trial_number;
    }
 const Pair = new Stimulus_Set (pair_id, trial_array, image_array, video_array);
 stimulus_set.push(Pair);
}
function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}


//Data Set Information
const data_set = [];
class Data_By_Person 
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
const data_person = new Data_By_Person (7);
data_set.push(data_person);
console.log(data_set[0].pair_id);
data_set[0].addNewRating(29, 1);
data_set[0].addNewRating(22, 2);
console.log(data_set[0].img_ratings, data_set[0].vid_ratings);

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


