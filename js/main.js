var $container = $("#container")
var width = 6
var height = 4

function createGrid(){
  const gridWidth = $container.width() / width
  const gridHeight= $container.height() / height
  for (var i = 0; i < width; i++){
    for (var j = 0; j < height; j++){
      var $div = $("<div/>")
        .addClass("grid")
        .width(gridWidth)
        .height(gridHeight)
        .appendTo($container)
    }
  }
}

function flip(){
  for(var i = 0; i <=12; i++){
    var src = "../images/" + i +".png"
    images.push(src)
    images.push(src)
  }
}




createGrid()