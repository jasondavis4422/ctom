import { Participant, Stimuli, Individual_Data, Result } from "/Users/jasondavis/Documents/GitHub/ctomdraft/drafts/ctom.js";
import { checkBrowserorServer, save_participant_data, load_next_page_intro, save_rating_data, load_next_page_img, save_stimulus_data_img } from "/Users/jasondavis/Documents/GitHub/ctomdraft/drafts/ctom.js";
import { load_next_page_vid, load_next_trial, load_end_page, load_next_page_end, remove_trial_numbers, access_data, save_stimulus_data_collab, save_stimulus_data_vid } from "/Users/jasondavis/Documents/GitHub/ctomdraft/drafts/ctom.js";

// check if on browser or server
checkBrowserorServer();

var results_set = [];
var stimulus_info = new Stimuli(5); //grab seed from local storage
var named = "Jason";
var ID = "f005g23";
//copy data from localStorage
var data = '[{"img_ratings":["58","36","64","42","86"],"vid_ratings":[],"collab_vid_ratings":["58","36","64","42","86"]},{"img_ratings":["54","81","25","56","41"],"vid_ratings":[],"collab_vid_ratings":["54","81","25","56","41"]},{"img_ratings":["43","41","43","43","35"],"vid_ratings":[],"collab_vid_ratings":["43","41","43","43","35"]},{"img_ratings":["59","98","44","27","51"],"vid_ratings":[],"collab_vid_ratings":["59","98","44","27","51"]},{"img_ratings":["47","38","41","51","64"],"vid_ratings":[],"collab_vid_ratings":["47","38","41","51","64"]},{"img_ratings":["66","29","46","32","18"],"vid_ratings":[],"collab_vid_ratings":["66","29","46","32","18"]},{"img_ratings":["57","33","55","16","38"],"vid_ratings":[],"collab_vid_ratings":["57","33","55","16","38"]},{"img_ratings":["47","47","24","31","35"],"vid_ratings":[],"collab_vid_ratings":["47","47","24","31","35"]},{"img_ratings":["27","48","84","33","41"],"vid_ratings":[],"collab_vid_ratings":["27","48","84","33","41"]}]';
const result = new Result(named, ID, data, stimulus_info.getSeedArray());
results_set.push(result);
console.log(results_set[0].stimuli)