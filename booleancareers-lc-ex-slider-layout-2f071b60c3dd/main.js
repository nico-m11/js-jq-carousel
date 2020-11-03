$(document).ready(function(){


  $('.next').click(function(){  // al CLICK dell'elemento
    var imgActive = $('img.active, i.active') // defisnisco una Variabile
    imgActive.removeClass('active') // impostiamo di togliere l'elemento tra le perentesi ()

    if(imgActive.hasClass('active')) {   // con questo andremo a verificare dove agg o togliere la class active
      $('img.first, i.first').addClass('active')
       // con questo dico di aggiungere la classse ()
    } else {
      imgActive.next().removeClass('active')
       // ritorna a toglierere ()
    }
  })




















})
