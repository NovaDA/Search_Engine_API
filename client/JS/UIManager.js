var el = document.getElementById("specific-design");


 var elHeight = el.clientHeight;
 var elWidth = el.clientWidth;
 console.log(elHeight);
var wrapper = document.querySelector("#scaleable-wrapper");

// wrapper.
// wrapper.resizable({
//   resize: doResize
// });


function doResize(event, ui) {
    
  var scale, origin;
    
  scale = Math.min(
    ui.size.width / elWidth,    
    ui.size.height / elHeight
  );
  
  //console.log(elWidth);
  
  el.style.transform = "scale(" + scale + ")";
  
//   el.css({
//     transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
//   });
  
}

var starterData = { 
  size: {
    width: wrapper.clientWidth,
    height: wrapper.clientHeight
  }
}

doResize(null, starterData);