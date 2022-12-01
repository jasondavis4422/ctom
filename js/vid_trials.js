//check if on browser or server
if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }
  
  const data_set = [];
  class Individual_Data {
    constructor() {
      this.img_ratings = [];
      this.vid_ratings = [];
      this.collab_vid_ratings = [];
    }
    addNewRating(input, which_dataset) {
      if (which_dataset == 1) {
        this.img_ratings.push(input);
      }
      if (which_dataset == 2) {
        this.vid_ratings.push(input);
      }
      if (which_dataset == 3) {
        this.collab_vid_ratings.push(input);
      }
    }
  }
  
  var recording = new Individual_Data();
  var range_slider_list = document.getElementsByClassName("rangeslider");
  for (k = 0; k < range_slider_list.length; k++) {
    var rangeslider = document.getElementById("sliderRange" + k.toString());
    var output = document.getElementById("demo" + k.toString());
    output.innerHTML = rangeslider.value;
  }
  document.getElementById("sliderRange0").addEventListener("input", function () {
    document.getElementById("demo0").innerHTML = this.value;
    var used = true;
  })
  document.getElementById("sliderRange1").addEventListener("input", function () {
    document.getElementById("demo1").innerHTML = this.value;
    var used = true;
  })
  document.getElementById("sliderRange2").addEventListener("input", function () {
    document.getElementById("demo2").innerHTML = this.value;
    var used = true;
  })
  document.getElementById("sliderRange3").addEventListener("input", function () {
    document.getElementById("demo3").innerHTML = this.value;
    var used = true;
  })
  document.getElementById("sliderRange4").addEventListener("input", function () {
    document.getElementById("demo4").innerHTML = this.value;
    var used = true;
  })
  
  function save_rating_data() {
    for (i = 0; i < range_slider_list.length; i++) {
      rating = document.getElementById("sliderRange" + i.toString()).value;
      recording.addNewRating(rating, 2);
  
    }
    data_set.push(recording);
    if (localStorage.getItem('data_set') == null) {
      localStorage.setItem('data_set', '[]');
    }
    var recordings = JSON.parse(localStorage.getItem('data_set'));
    recordings.push(recording);
    localStorage.setItem('data_set', JSON.stringify(recordings));
  }
  
  function load_next_page() {
    window.location.href = "/html/collab_trials.html";
  }
 
  var next_button = document.getElementsByClassName("next-page")[0];
  next_button.addEventListener('click', function (event) {
    for (i = 0; i < range_slider_list.length; i++) {
      rating = document.getElementById("sliderRange" + i.toString()).value;
      if (rating == 1){ 
        alert('Please answer all the questions')
        var button = event.target;
        button.stopPropagation();
      }
    }
    save_rating_data();
    load_next_page();
  }
  )
  setTimeout(save_rating_data, 300000);
  setTimeout(load_next_page, 300000);