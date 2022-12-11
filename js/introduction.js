import { Participant, Stimuli, Individual_Data, Result } from "/drafts/ctom.js"
import { checkBrowserorServer, save_participant_data, load_next_page_intro, save_rating_data, load_next_page_img, save_stimulus_data_img } from "/drafts/ctom.js"
import { load_next_page_vid, load_next_trial, load_end_page, load_next_page_end, remove_trial_numbers, access_data, save_stimulus_data_vid, save_stimulus_data_collab } from "/drafts/ctom.js"

// check if on browser or server
checkBrowserorServer();

//sets up button, also grabs name and ID from input box
var next_button = document.getElementsByClassName("next-intro")[0];

//what happens when we click "NEXT"
next_button.addEventListener('click', function () {
    save_participant_data();
    load_next_page_intro();
}
)

//automatically saves data and loads next page after 5 min
setTimeout(save_participant_data, 300000);
setTimeout(load_next_page_intro, 300000);
