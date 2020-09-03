//define functions here
// event handler on paragraphs that alert message when clicked
function getIt() {
  $('p').on('click', function() {
    alert('hey!');
  });
}
//
function frameIt() {
  console.log('hello');
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}
$(document).ready(function(){

// call functions here
getIt();
frameIt();
});
