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
console.log(stimulus_set[3].image_arr);
console.log(stimulus_set[3].trial_arr);
console.log(stimulus_set[3].video_arr);
// This is the paradigm for tracking participant data with their respective images and videos per trial.
// I hard-coded num_of_trials, num_of_pairs, num_of_images, and num_of_videos to get a general idea of the code, but this stimulus set
// will depend on what information is available