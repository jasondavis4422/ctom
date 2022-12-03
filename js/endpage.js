import { Participant, Stimuli, Individual_Data, Result } from "/drafts/ctom.js";
import { checkBrowserorServer, save_participant_data, load_next_page_intro, save_rating_data, load_next_page_img, save_stimulus_data_img } from "/drafts/ctom.js"
import { load_next_page_vid, load_next_trial, load_end_page, load_next_page_end, remove_trial_numbers, access_data, save_stimulus_data_vid, save_stimulus_data_collab } from "/drafts/ctom.js"

//check if on browser or server
checkBrowserorServer();

//automatically loads next page after 5 min
setTimeout(access_data, 300000);
setTimeout(remove_trial_numbers, 300000);
setTimeout(load_next_page_end, 300000);


//what happens when we click "NEXT"
var next_button = document.getElementsByClassName("next-end")[0];
next_button.addEventListener('click', function () {
  access_data();
  remove_trial_numbers();
  load_next_page_end();
})
