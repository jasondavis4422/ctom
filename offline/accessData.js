import { Participant, Stimuli, Individual_Data, Result } from "/Users/jasondavis/Documents/GitHub/ctomdraft/drafts/ctom.js";
import { checkBrowserorServer, save_participant_data, load_next_page_intro, save_rating_data, load_next_page_img, save_stimulus_data_img } from "/Users/jasondavis/Documents/GitHub/ctomdraft/drafts/ctom.js";
import { load_next_page_vid, load_next_trial, load_end_page, load_next_page_end, remove_trial_numbers, access_data, save_stimulus_data_collab, save_stimulus_data_vid } from "/Users/jasondavis/Documents/GitHub/ctomdraft/drafts/ctom.js";

// check if on browser or server
checkBrowserorServer();

var results_set = [];
var stimulus_info = new Stimuli(5); //grab seed from local storage
var named = "Jason Davis";
var ID = "f005g23";
//copy data from localStorage
var data = '[{"img_ratings":["50","53","46","65","50"],"vid_ratings":[],"collab_vid_ratings":["50","53","46","65","50"]},{"img_ratings":["50","76","40","63","50"],"vid_ratings":[],"collab_vid_ratings":["50","76","40","63","50"]},{"img_ratings":["43","65","32","54","34"],"vid_ratings":[],"collab_vid_ratings":["43","65","32","54","34"]},{"img_ratings":["51","45","59","21","44"],"vid_ratings":[],"collab_vid_ratings":["51","45","59","21","44"]},{"img_ratings":["50","70","24","67","29"],"vid_ratings":[],"collab_vid_ratings":["50","70","24","67","29"]},{"img_ratings":["79","62","35","41","34"],"vid_ratings":[],"collab_vid_ratings":["79","62","35","41","34"]},{"img_ratings":["60","54","66","52","57"],"vid_ratings":[],"collab_vid_ratings":["60","54","66","52","57"]},{"img_ratings":["55","65","44","53","50"],"vid_ratings":[],"collab_vid_ratings":["55","65","44","53","50"]},{"img_ratings":["59","57","55","60","34"],"vid_ratings":[],"collab_vid_ratings":["59","57","55","60","34"]}]';
const result = new Result(named, ID, data, stimulus_info.getSeedArray());
results_set.push(result);