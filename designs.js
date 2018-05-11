// Select color input
// Select size input
const color = $("#colorPicker");
const height = $("#inputHeight");
const width = $("#inputWidth");
const canvas = $("#pixelCanvas");
$(document).ready(function() {
  
  function makeGrid() {
    //remove existing grid grid for new grid
    canvas.children().remove();
    //make a grid
    for (let i = 0; i <height.val(); i++) {
      $('table').append('<tr></tr>');
        for (let j = 0; j < width.val(); j++) {
          $('tr').last().append('<td></td>');
        }   
    }
    //background of the pixel changes on click
    canvas.on("click", "td", function() {
        $(this).css("background-color", color.val());
        $("h1").css('color', color.val());
    });  
  } 

  $("#submit").click(function(event) {
    event.preventDefault();
    makeGrid();
  });
  
});
  