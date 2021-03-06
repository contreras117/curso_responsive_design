	//Uso de media quiery con java script
  var condicion = window.matchMedia('(max-width: 500px)');
  var $burguerButton = document.getElementById("burguer-button");
  var $menu = document.getElementById("menu");
  var $body = document.body;
  condicion.addListener(mediaQuery);
  mediaQuery();
  

  function mediaQuery()
  {
    if (condicion.matches)
    {
      $burguerButton.addEventListener("touchstart", togleMenu, {passive: true});
      $burguerButton.style.display = 'inline-block';
    }
    else
    {
      $burguerButton.removeEventListener("touchstart", togleMenu, {passive: true});
      $burguerButton.style.display = 'none';
    }
  }

  function togleMenu()
  {
    $menu.classList.toggle("active");
    $burguerButton.classList.toggle("icon-close");
    $body.classList.toggle("menu_opened");
  }
  function showMenu()
  {
    $menu.classList.add("active");
    $burguerButton.classList.add("icon-close");
    $body.classList.add("menu_opened");
  }
  function hideMenu()
  {
    $menu.classList.remove("active");
    $burguerButton.classList.remove("icon-close");
    $body.classList.remove("menu_opened");
  }

  //lazy loading
  //Importante poner atributo 'alt' en las imagenes
  var bLazy = new Blazy({
      selector: 'img'
  });


  //Gestos touch con hammer.js
  var gestos = new Hammer($body);
  gestos.on('swipeleft', hideMenu);
  gestos.on('swiperight', showMenu);


  //Cargar las fuentes de google fonts de manera asincrona
  WebFont.load({
    google: {
      families: ['Montserrat:400,700', 'Allerta']
    }
  });
