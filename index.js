document.querySelector('.tickets').onclick = function() {
    document.querySelector('.ticketing').style.display ='block' 
    document.querySelector('.castle-text').style.display ='none'
    document.querySelector('.back').style.display ='block'
    document.querySelector('.tickets').style.display ='none'
}
document.querySelector('.back').onclick = function(){
    document.querySelector('.ticketing').style.display = 'none'
    document.querySelector('.castle-text').style.display ='block'
    document.querySelector('.back').style.display ='none'
    document.querySelector('.tickets').style.display ='block'
}

let dragons = document.querySelector('.dragons')
let info = document.querySelector('.info')
let information = document.querySelector('.information')
let dragonPic = document.querySelector('.dragon')
let goBack = document.querySelector('.go-back')

info.onclick = function(){

    info.style.display ='none'
    dragons.style.display ='none'
    information.style.display ='block'
    goBack.style.display = 'block'
}
goBack.onclick= function(){

    info.style.display ='block'
    dragons.style.display ='block'
    information.style.display ='none'
    goBack.style.display ='none'

}


let modal = document.getElementById("myModal")
let store = document.querySelector('.store')
let span = document.getElementsByClassName("close")[0]

store.onclick = function(){
    modal.style.display='block'
}
span.onclick = function(){
    modal.style.display ='none'
}
window.onclick = function(e) {
    if(e.target === modal){
        modal.style.display ='none'
    }
}



