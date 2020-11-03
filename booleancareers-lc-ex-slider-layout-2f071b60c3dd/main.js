$(document).ready(function(){


  $('.next').click(function(){ 
    var imgActive = $('img.active, i.active')
    imgActive.removeClass('active')


    if (imgActive.hasClass('last')){
      $('img.first, i.first').addClass('active')
    } else {
      imgActive.next().addClass('active')
    }
  })



  $('.prev').click(function(){
    var imgActive = $('img.active, i.active')
    imgActive.removeClass('active')



    if(imgActive.hasClass('first')){
      $('img.last, i.last').addClass('active')
    } else {
      imgActive.prev().addClass('active')
    }
  })













})
