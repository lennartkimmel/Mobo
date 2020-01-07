
$( document ).ready(function() {
    var test = "testing this";
});

function changeImage(number){
    for(var i=1; i<5; i++){
        document.getElementById('img-'+i).parentNode.classList.remove("active");
    }
    document.getElementById('img-'+number).parentNode.classList.add("active");
}

function imageCarrousel(){
    for(var i=1; i<5; i++){
        document.getElementById('link-'+i).parentNode.classList.remove("active");
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("navigation")[0].style.height = "100px";
    document.getElementsByClassName("brand-image")[0].style.height = "80px";
  } else {
    document.getElementsByClassName("navigation")[0].style.height = "140px";
    document.getElementsByClassName("brand-image")[0].style.height = "100px";
  }
}


