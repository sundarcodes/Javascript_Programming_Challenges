$(document).ready(function(){
  var game = {
    init: function(domElement){
      this.domElement=domElement;
      $(this.domElement).css('left','20px');
      $(this.domElement).css('top','20px');
    },
    right: function(){
      this.stop();
      $(this.domElement).css('transform','rotateZ(360deg)');
      this.setIntervalId= setInterval(frame,10);
      var pos = parseInt($(this.domElement).css('left'));
      var domElement = this.domElement;
      // console.log(this);      
      // console.log($(this.domElement).css('left'));
      function frame(){
        keepRunning(domElement,'left',true,pos);
      }
    },
     down: function(){
      this.stop();
      $(this.domElement).css('transform','rotateZ(90deg)');
      this.setIntervalId= setInterval(frame,10);      
      var pos = parseInt($(this.domElement).css('top'));
      var domElement = this.domElement;
      function frame(){
        keepRunning(domElement,'top',true,pos);
      }
    },
    left: function(){
      this.stop();
      $(this.domElement).css('transform','rotateZ(360deg)');
      this.setIntervalId= setInterval(frame,10);      
      var pos = parseInt($(this.domElement).css('left'));
      var domElement = this.domElement;
      console.log(this);
      function frame(){
        keepRunning(domElement,'left',false,pos);
      }
    },
    up: function(){
      this.stop();
      $(this.domElement).css('transform','rotateZ(90deg)');
      this.setIntervalId= setInterval(frame,10);
      var pos = parseInt($(this.domElement).css('top'));

      var domElement = this.domElement;
      console.log(this);
      function frame(){
        keepRunning(domElement,'top',false,pos);
      }
    },
    stop: function(){
      if (this.setIntervalId){
      clearInterval(this.setIntervalId);
      }
    }
  };


// Handle the time interval
function keepRunning(domElement,direction,toBeIncremented,pos){
  if (toBeIncremented){
    pos++;
  }else{
    pos--;
  }
  console.log(this);
  $(domElement).css(direction,pos + 'px');
}


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
