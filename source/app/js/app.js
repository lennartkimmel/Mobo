
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


