$(document).ready(function(){

  var game = {
    init: function(domElement){
      this.domElement=domElement;
      $(this.domElement).css('left','20px');
      $(this.domElement).css('top','20px');
    },
    move: function(direction) {
      var args = {
        right: {angle: "360deg", position: "left", increment: true},
        down:  {angle: "90deg",  position: "top", increment: true},
        left:  {angle: "360deg", position: "left", increment: false},
        up:    {angle: "90deg",  position: "top", increment: false}
      };

      var thisArgs = args[direction];

      // return function() {
        this.stop();
        $(this.domElement).css('transform','rotateZ(' + thisArgs.angle + ')');
        this.setIntervalId= setInterval(frame,10);
        var pos = parseInt($(this.domElement).css(thisArgs.position));
        var domElement = this.domElement;
        // console.log(this);      
        // console.log($(this.domElement).css('left'));
        function frame(){
          if (thisArgs.increment){
            pos++;
          }else{
            pos--;
          }
          $(domElement).css(thisArgs.position,pos + 'px');
        }        
      // }
    },
    // right: function(){return this.move("right")}(),
    right: function(){this.move("right")},
    left:  function(){this.move("left")},
    up:    function(){this.move("up")},
    down:  function(){this.move("down")},
    stop: function(){
      if (this.setIntervalId){
      clearInterval(this.setIntervalId);
      }
    }
  };


var car = $('#car');
game.init(car);
$('#right').click(function(){
  
  game.right();
});
$('#stop').click(function(){
  game.stop();
});
$('#down').click(function(){
  game.down();
});
$('#left').click(function(){
  game.left();
});
$('#up').click(function(){
  game.up();
});

});
