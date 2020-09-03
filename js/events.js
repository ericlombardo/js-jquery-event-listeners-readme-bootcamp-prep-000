//define functions here
// event handler on paragraphs that alert message when clicked
function getIt() {
  $('p').on('click', function() {
    alert('hey!');
  });
}
//
function frameIt() {
  $('img').on('load', function() {
    img.style.border += 'tasty';
  });
}
$(document).ready(function(){

// call functions here
getIt();
});
