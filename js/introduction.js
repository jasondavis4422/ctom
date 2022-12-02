// check if on browser or server
if (typeof window !== 'undefined') {
    console.log('You are on the browser')
} else {
    console.log('You are on the server')
}

//sets up button, also grabs name and ID from input box
var next_button = document.getElementsByClassName("next-intro")[0];
var input_name = document.getElementById("Name");
var input_ID = document.getElementById("ID");

//loads next page
function load_next_page() {
    window.location = "/html/img_trials.html";
}

//save participant data if valid name and ID are entered, alerts person to do so if not
function save_participant_data() {
    const name = input_name.value;
    const ID = input_ID.value;
    if (name && ID) {
        const subject = new Participant();
        subject.updateName(name);
        subject.updateID(ID);
        participant_set.push(subject);
        if (localStorage.getItem('participant_set') == null) {
            localStorage.setItem('participant_set', '[]');
        }
        var participants = JSON.parse(localStorage.getItem('participant_set'));
        participants.push(subject);
        localStorage.setItem('participant_set', JSON.stringify(participants));
    }
    else {
        alert("Please enter in your data");
    }
}

//constructor for participant object to go into participant_set
const participant_set = [];
class Participant {
    constructor() {
        this.name = "";
        this.ID = "";
    }
    updateName(newName) {
        this.name = newName;
    }
    updateID(newID) {
        this.ID = newID;
    }
}

//what happens when we click "NEXT"
next_button.addEventListener('click', function () {
    save_participant_data();
    load_next_page();
}
)

//automatically saves data and loads next page after 5 min
setTimeout(save_participant_data, 300000);
setTimeout(load_next_page, 300000);