//check if on browser or server
if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }

var range_slider_list = document.getElementsByClassName("myslider");
var output_list = document.getElementsByClassName("demo");
for (var i = 0; i < range_slider_list.length; i++) {
    var range_slider = range_slider_list[i];
    var output = output_list[i];
    output.innerHTML = range_slider.value;
    range_slider.addEventListener("input", function () {
        console.log("clicked");
        output.innerHTML = range_slider.value;

    }
    )
}