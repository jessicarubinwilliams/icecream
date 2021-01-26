$(document).ready(function() {
  const flavorsArray = ["Toasted Coconut Fudge", "Sea Salt with Caramel Ribbons", "Black Raspberry Chocolate Chip"];

  // const content = "<h1>My favorite ice cream flavors:</h1><ul><li><span id="flavorsArray[0]"></span></li><li><span id="flavorsArray[1]"></span></li><li><span id="flavorsArray[2]"></span></li></ul>"

  const content = "<h1>My favorite ice cream flavors:</h1><ul><li><span></span></li><li><span></span></li><li><span></span></li></ul>"

  $("div#output").append(content);
  flavorsArray.forEach(function(element) {
    $("span").attr("id", element);
    console.log("here");
    $("span#" + element).text(element);
    console.log("also");
  });
})