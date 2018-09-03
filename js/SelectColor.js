curColor = "green";
lastColor = "";
ls = localStorage;

HexColor = {
  "red": "#f44336",
  "pink": "#e91e63",
  "purple": "#9c27b0",
  "deep-purple": "#673ab7",
  "indigo": "#3f51b5",
  "blue": "#2196f3",
  "light-blue": "#03a9f4",
  "cyan": "#00bcd4",
  "teal": "#009688",
  "green": "#4caf50",
  "light-green": "#8bc34a",
  "lime": "#cddc39",
  "yellow": "#ffeb3b",
  "amber": "#ffc107",
  "orange": "#ff9800",
  "deep-orange": "#ff5722",
  "brown": "#795548",
  "grey": "#9e9e9e",
  "blue-grey": "#607d8b"
};


$(document).ready(function() {
  curColor = ls.getItem('color') !== null? ls.getItem('color') : curColor;
  ReplaceColor();
});

$('.clr-btn').click(
  function () {
    dataclr = $(this).attr('data-color');
    if(curColor !== dataclr) {
      lastColor = curColor;
      curColor = dataclr;
      $('*[data-color="' + lastColor + '"]').addClass("waves-effect").removeClass("pulse");
      $(this).addClass("pulse").removeClass("waves-effect");
      ls.setItem('color', curColor);
      ReplaceColor();
    }
  });

function ReplaceColor(){
  $('*[data-color="' + curColor + '"]').addClass("pulse").removeClass("waves-effect");
  $('*[data-color="color"]').addClass(curColor).removeClass(lastColor);
  $('*[data-color="waves-color"]').removeClass("waves-" + lastColor).addClass("waves-" + curColor);
  $('*[name="theme-color"]').attr('content', HexColor[curColor]);
}

