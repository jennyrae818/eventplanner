// clock display!

var dateTime = moment().format('MMMM Do, YYYY / h:mm a');
$("#time-display").text(dateTime); 


var $eventInput = $('event-input');

// button! 

var $button = $('button');

$button.click(function() {
    console.log($(this).siblings('textarea').val())
    console.log($(this).siblings('div').text())
    localStorage.setItem($(this).siblings('div').text(),$(this).siblings('textarea').val())
});

//displaying timeblocks 

var timeBlocks = $('.row')


/*for (let i = 0; i < localStorage.length; i++) {
    if ($(timeBlocks).children('div').text() == localStorage.key(i)){
    $(timeBlocks).children('textarea').val(localStorage.getItem(localStorage.key(i))) 
    }
} */

console.log($(timeBlocks).children('textarea'))

var H = moment().format('H')

for (let i = 0; i < timeBlocks.length; i++) {
  console.log(timeBlocks[i])
  console.log(i)
  console.log(moment().format('H'))
  if (H - 9 - i === 0) {
      $(timeBlocks[i]).addClass('present')
  }
  if (H - 9 - i > 0) {
    $(timeBlocks[i]).addClass('past')
}
    if (H - 9 - i < 0) {
    $(timeBlocks[i]).addClass('future')
} 
$(timeBlocks[i]).children('textarea').val(localStorage.getItem($(timeBlocks[i]).children('div').text()))
  
}



// H is equal to military time 
// H-9-i = 0 = now 
// H-9-i = <0 = past
// H-9-i = >0 = future 



/*

to dos 
1. user inputs a value into event-input 
2. the input should save to the box when 'save' button is clicked
3. also - based on what time it is ... 
take the current time ... 
if it is less < than this time then use the .past color
if it is === currently this time then ... .present color
if it is after > this time then .future color 


*/
