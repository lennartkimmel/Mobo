
$( document ).ready(function() {

});

function changeImage(number){
    for(var i=1; i<6; i++){
        document.getElementById('img-'+i).parentNode.classList.remove("active");
    }
    document.getElementById('img-'+number).parentNode.classList.add("active");
}

function imageCarrousel(){
    for(var i=1; i<5; i++){
        document.getElementById('link-'+i).parentNode.classList.remove("active");
    }
}

window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY - 120, 0);
}


