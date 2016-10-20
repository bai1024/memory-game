var $container = $("#container")
var width = 6
var height = 4
var images = []
var $click1
var duration = 1000
var noClick = false

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
    for(var i = 1; i <=12; i++){
    var src = "images/" + i +".png"
    images.push(src)
    images.push(src)
  }
  var bgSrc = "images/" + "bg" +".jpg"
  images = _.shuffle(images)

  images.forEach((src,index) =>{
    var $frontImage = $("<img/>").attr("src", src).addClass("front-image")
    var $backImage = $("<img/>").attr("src",bgSrc).addClass("back-image")
    $('.grid').eq(index).append($frontImage, $backImage)
  })

  $container.on("click", function(evt){
    if (noClick) return
    var $target = $(evt.target)
    if($target.hasClass("back-image")){
      $target.hide()
      var $frontImage = $target.siblings()
      if($click1){
        if($click1.attr("src")=== $frontImage.attr("src")){
          $click1 = null
        } else {
          noClick = true
          setTimeout(() => {
            $click1.siblings().show()
            $target.show()
            $click1 = null
            noClick = false
          }, duration)
        }
      } else {
        $click1 = $target.siblings()
      }
    }
  })
}

createGrid()
flip()