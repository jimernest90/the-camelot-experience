document.querySelector('.tickets').onclick = function() {
    document.querySelector('.ticketing').style.display ='block'
    document.querySelector('.oranges').style.display= 'none'
    document.querySelector('.castle-text').style.display ='none'
    document.querySelector('.back').style.display ='block'
    document.querySelector('.tickets').style.display ='none'
}
document.querySelector('.back').onclick = function(){
    document.querySelector('.ticketing').style.display = 'none'
    document.querySelector('.oranges').style.display ='block'
    document.querySelector('.castle-text').style.display ='block'
    document.querySelector('.back').style.display ='none'
    document.querySelector('.tickets').style.display ='block'
}



