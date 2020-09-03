//define functions here
// event handler on paragraphs that alert message when clicked
function getIt() {
  $('p').on('click', function() {
    alert('hey!');
  });
}
//
function frameIt() {
  // gets the images (there is 1) and adds event handler waiting for load
  $('img').on('load', function() {
    // once img is loaded, add class 'tasty' for a boarder
    $('img').addClass('tasty');
  });
}
//
function pressIt() {
  $('#typing').on('keydown', function(keys) {
    if (keys.key === 'g') {
      alert('you just pressed g!');
    }
  });
}
$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
});
