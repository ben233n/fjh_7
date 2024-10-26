let loading=document.getElementById('loading');
var work=document.getElementsByClassName('work');


window.onload = function(){
    loading.classList.add("loading_animation");
    setInterval(function(){
        loading.style.display="none";
    },500);

    setInterval(function(){
        work[0].classList.add("appear_left");
    },800);
}


