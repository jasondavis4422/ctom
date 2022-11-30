if (typeof window !== 'undefined') {
    console.log('You are on the browser')
} else {
    console.log('You are on the server')
}

var next_button = document.getElementsByClassName("next-intro")[0];
var input_name = document.getElementById("Name");
var input_ID = document.getElementById("ID");
function load_next_page() {
    window.location = "/html/trials.html";
}
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
        load_next_page();
    }
    else {
        alert("Please enter in your data");
    }
}
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
    getName() {
        return this.name;
    }
    getID() {
        return this.ID;
    }
}
next_button.addEventListener('click', function () {
    save_participant_data();
    load_next_page();
}
)
setTimeout(save_participant_data, 300000);
setTimeout(load_next_page, 300000);