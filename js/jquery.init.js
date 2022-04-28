jQuery(document).ready(function() {
 //Jvector init
    var markers = [
      {latLng: [36.2, 37.15], name: 'Alep', para:'Je descendis quelques marches, traversai la route. Je tournai la tête une dernière fois : à droite se trouvait le rond-point avec l’Horloge d’Alep et, plus loin derrière, un grand hôtel de renommée internationale. A ma gauche la rue menait au souk et, par prolongement, à la Citadelle. Les marchands de savon sortaient leur marchandise sur la voie publique. Deux gamins couraient avec leur cartable sur le dos. Ça sentait bon le café. Je souris. Brièvement. Simplement. Et je dis au revoir à Alep.', photo:'img/carte/alep/7.JPG'},
      {latLng: [33.51, 36.29], name: 'Damas', para:'Damas s’étendait sous mon regard. Une armada de petites lumières, des artères au trafic dense, des enseignes lumineuses, les lumières vertes des mosquées s’élevant telles des phares dans la nuit. Une ville animée, vivante, presque insouciante que j’admirais, silencieusement, en buvant mon thé. Une multitude de sentiments se bousculèrent alors: l’appréhension de mon futur voyage en moto, mon année passée à Damas qui fut jalonnée à la fois de deuils et de rencontres heureuses, ainsi que la dégradation de la situation politique.', photo:'img/carte/damas/6.JPG'},
      {latLng: [35.95, 39.01], name: 'Ar-Raqqa', para:'Arrivée à Ar-Raqqa, je réitérai ma demande auprès du propriétaire de l’établissement: «Où puis-je acheter une moto ?» Pour toute réponse, j’eus un éclat de rire ! «Il n’y a pas de moto ici.» Il me considéra une nouvelle fois, de la tête aux pieds, rigola à nouveau et ajouta: «Dans toute la Syrie, on ne peut plus acheter de moto! Rupture de stock nationale!». Le message était clair. Les femmes ne conduisent pas de moto, un point c’est tout.', photo:'img/carte/racca/1.JPG'},
      {latLng: [35.33, 40.15], name: 'Deir ez-Zor', para:'«Pas de problème, la roue va tenir.» me répétaient mes amis, comme pour me rassurer alors que je fixais, sceptiquement, l’objet en caoutchouc de mes malheurs. «Allons faire un tour d’essai dans la ville!» me proposèrent-ils. Les cheveux au vent, nous fîmes un tour d’honneur dans Deir ez-Zor, klaxonnant dans toutes les ruelles afin que tout le monde puisse nous voir. Ultime arrêt pour un thé au bord de l’Euphrate avant de repartir en direction de Damas', photo:'img/carte/deirez/3.JPG'},
      {latLng: [34.33, 38.16], name: 'Palmyre', para:'En fin d’après-midi, j’atteignis finalement la splendide Palmyre. Je passai sous l’un des imposants arcs de triomphe. Le théâtre, l’agora et les colonnes des temples étaient baignés dans la lumière orangée du soir. L’oasis syrienne, autrefois cité gréco-romaine de renom, tenait toutes ses pro-messes. Je me rendis ensuite sur la montagne qui dominait la ville à l’ouest, au sommet de laquelle se trouvait l’imposant château ottoman Qalat Ibn Maan, pour y admirer le coucher du soleil.', photo:'img/carte/palmyre/5.JPG'},
      {latLng: [40.63, 22.95], name: 'Thessalonique', para:'En sortant de l’eau, je m’endormis sur la plage et ne me réveillai qu’en fin d’après-midi, constatant que ma journée était terminée et que j’allais passer la nuit ici, face à la mer. Ce soir là, je ne me retrouvais pas seulement face à cette immensité bleue, mais également face à moi-même. Et nous trinquâmes, la lune et moi, aux possibles non explorés, à la hardiesse malheureusement trop souvent dévalorisée et à l’aventure retrouvée. A cette formidable chance que nous, nanties, nous avions de pouvoir courir le monde, alors que tant d’autres étaient contraints de le fuir.', photo:'img/carte/thessalonique/10.JPG'},
      {latLng: [39.50, 20.26], name: 'Igoumenitsa', para:'Un vent violent se leva vers les deux heures du matin et je compris alors pourquoi le pont avait été déserté par mes compagnons de voyage. Mais, suivant mon entêtement habituel, j’y étais, donc j’y restais! Les vagues se fracassaient violemment contre la coque du bateau mais je n’en accordais que très peu d’importance. En réalité, je m’en fichais totalement. Je remontais la capuche de mon sac de couchage sur ma tête. L’air iodé de la mer pénétrait mes narines et mes yeux contemplaient la voûte étoilée. Cette fois, pensais-je, j’étais bel et bien seule et prête à conquérir «mon» nouveau monde italien.', photo:'img/carte/irgoumenitsa/11.JPG'},
      {latLng: [41.68, 15.38], name: 'San Severo', para:'Nous décidâmes de poursuivre cette discussion dans le plus bel endroit du monde: la pizzeria du quartier. L’univers olfactif était magique. L’atmosphère qui y régnait tout autant. Les gens parlaient fort, le pizzaiolo était à son four, sa femme pétrissait la pâte, les verres de vin rouge s’entrechoquaient avec fracas... C’était l’Italie. Celle de mon enfance. Celle de mes vacances. Celle de mes souvenirs. La nostalgie est décidément un opium bien accommodant. Elle donne à nos souvenirs la couleur orangée des couchers de soleil sur la mer. Elle adoucit les querelles, étanche les douloureuses réminiscences, panse nos actes manqués.', photo:'img/carte/sansevero/12.JPG'},
      {latLng: [44.00, 12.65], name: 'Riccione', para:'«Et tu veux aller faire quoi à Rimini? C’est moche! Il y a que des touristes hamburgers!» La formule me plut. C’est exactement pour cela que je voulais voir Rimini. Les touristes hamburgers étaient hautement exotiques pour la sauvage que j’étais devenue. J’y allais par pur intérêt anthropologique. «Suis moi, on va y aller par la montagne comme ça tu pourras voir la vue.» C’est ainsi que je me retrouvai à suivre une petite Vespa sur des chemins tertiaires et des cols de montagnes.', photo:'img/carte/ricione/13.jpg'},
      {latLng: [45.43, 12.33], name: 'Venise', para:'«Mais c’est interdit!» répondit fermement le policier qui réglementait l’accès à la navette fluviale qui devait m’emmener sur la Place St-Marc. «Mais je peux juste la pousser, laissez-moi juste la pousser comme un vélo ! Je fais une photo avec sur la Place St-Marc et je repars.» J’essayai de le convaincre. J’avais fait le détour par Venise uniquement pour pouvoir faire une photo avec ma moto sur la Place St-Marc.', photo:'img/carte/venise/14.JPG'},
      {latLng: [45.93, 11.71], name: 'Enego', para:'Les antipasti se composaient, presque toujours, d’une assiette de pâtes dont on se serait parfaitement contenté comme plat unique et principal mais qui était, immanquablement, suivi d’une polenta ou d’un risotto aux champignons accompagné de lapin. Un tiramisù ou autre panettone ou torta della nonna venait habituellement nous achever au dessert. Les grandes personnes, prétextant que cela les aidait à digérer, finissaient habituellement le repas avec de la Grappa dans leur café. Soutenue par mon grand-père dans cette démarche, je persistais à faire miens les arguments des adultes vantant les mérites d’un verre de rouge pour la santé et, à force de persévérances et suivant l’humeur de la tablée, j’avais le droit de boire un verre de vin coupé avec de l’eau. Enego, c’était l’Italie de mon enfance.', photo:'img/carte/enego/15.jpg'},
      {latLng: [45.73, 10.1], name: 'Marone', para:'Je me remis donc en route et, après avoir suivi les rives du lac jusqu’à Marone, je trouvai un très joli petit camping tenu par des propriétaires accueillants. «Aucun problème, tu peux même dormir sous l’avant-toit de la remise où sont entreposées les chaises longues et les parasols, si tu veux.» m’offrit chaleureusement le propriétaire avant de continuer: «Mais avant toute chose, tu dois absolument m’expliquer ton voyage.»', photo:'img/carte/marone/16.JPG'},
      {latLng: [45.7, 9.66], name: 'Bergame', para:'La pluie recommença à tomber. Je m’acharnais, à mon habitude, sur le kick de démarrage mais, ce dernier étant mouillé, ma cheville droite glissa et je tombai misérablement. Une fois encore, je me retrouvais à terre sur le parking d’un supermarché. Etant trop fatiguée pour m’énerver, je me relevai calmement et considérai stoïquement mon véhicule. La pluie s’était accentuée et il tombait maintenant des trombes d’eau. Je ne pensais à rien, ne faisais rien, je regardais simplement ma moto sous la pluie, comme absente, comme ailleurs. «On peut t’aider?». Deux ouvriers en bâtiment s’étaient arrêtés à ma hauteur dans leur camionnette utilitaire.', photo:'img/carte/bergame/17.JPG'},
      {latLng: [41.01224, 28.976018], name: 'Istanbul', para:'Mon travail actuel m’amène à survoler régulièrement Istanbul. A travers le hublot de l’avion, je ne peux m’empêcher de chercher des yeux le pont Atatürk. Une fois trouvé, je le retraverse visuellement, me remémorant ces deux minutes où je hurlais mon bonheur de relier l’Orient à l’Occident. Un trajet que des milliers de gens font des dizaines de fois par jour. Un trajet unique à mes yeux. Et qui le restera à jamais.', photo:'img/carte/istanbul/9.JPG'},
      {latLng: [36.64, 33.43], name: 'Mut', para:'Plus question non plus de prolonger mon trajet jusqu’à Adana. Mes conditions de voyage étant, décidément, bien trop incertaines, et voulant rejoindre Istanbul sans détour, je décidai de remonter directement par la terre et pris la direction de Konya. Une route montagneuse, totalement déserte, me mena jusqu’à Mut, un petit village alpin.', photo:'img/carte/mut/8.JPG'},
      {latLng: [34.49, 39.2], name: 'Désert', para:'Il m’indiquait un trou noir. Je ne voyais strictement rien. «Si la tente est là-bas, la tente est là-bas.», répétais-je à voix basse pour m’en convaincre. Je conduisais maintenant sur du sable. J’entendais le chargement des peaux de mouton bouger à l’arrière et mon passager me faisait la discussion, comme si nous étions assis à notre café préféré un samedi après-midi. Je riais, complètement hallucinée par la tournure que prenaient les évènements.', photo:'img/carte/desert/4.jpg'},
      {latLng: [35.41, 39.36], name: 'Euphrate', para:'C’était merveilleux. J’étais enfin libre de suivre l’Euphrate à ma guise, et j’aurais adoré le faire jusqu’à Bagdad. J’avais alors vingt-cinq ans et le ciel était mon unique limite. En écrivant ces lignes aujourd’hui, après avoir brièvement vécu à Bagdad et passé vingt-et-un mois au Kurdistan irakien, je me rends compte de l’impossibilité d’une telle traversée. Mais à cette époque, j’aurais donné mon âme pour marcher sur les traces d’Ibn Battuta et rejoindre l’ancienne capitale des Abbassides depuis celle des Omeyyades.', photo:'img/carte/euphrate/2.JPG'},
      {latLng: [45.87, 7.171945], name: 'Col du Grand-Saint-Bernard', para:'A mesure de notre ascension, le moteur devenait de plus en plus brûlant et mes pieds de plus en plus glacés. En sandalettes, les orteils à l’air libre, avec un malheureux pull et une veste légère, je gelais. J’en étais presque venue à souhaiter la panne qui m’aurait permis de pousser la moto afin de me réchauffer. Quand soudain, au détour d’un virage, je tombai nez à nez avec la neige. Je m’arrêtai, brusquement: «Tu vois, dis-je à ma moto, après l’aridité et la chaleur étouffante des déserts aux vertes vallées irriguées par l’Euphrate, en passant par les pluies torrentielles, les routes glissantes, caillouteuses et ensablées, tu te retrouves maintenant les roues dans la neige!».', photo:'img/carte/saintbernard/18.jpg' }
    ];
	var markerStyle = {initial: {fill: '#f8f8f8',stroke: '#383f47'}};
	var regionStyling = {initial: {fill: '#75513b'},hover: {fill: "#f8f8f8"}};
	//GLOBAL VARIABLES
	var countryList = "", continentList = "";
	var resultsDup = {};
	var continentCodes = {};
	//GLOBAL VARIABLES
	//INIT MAP PLUGIN
	jQuery('#map').vectorMap({
    	map: 'europe_mill_en',
    	normalizeFunction: 'polynomial',
    	markerStyle:markerStyle,
   		regionStyle:regionStyling,
    	backgroundColor: '#f0b975',
    	series: {regions: [{values: {},attribute: 'fill'}]},
    	markers: markers,
    	focusOn: {x: 0.6,y:0.7,scale: 1},
    	onRegionClick:function (event, code){
        	jQuery('#map').vectorMap('set', 'focus', code);
    	},    	
    	onMarkerClick: function(events, index){
        	jQuery('#infobox').html('<h3>'+markers[index].name+'</h3><p>'+markers[index].para+'</p><p><a class="fancybox" data-fancybox-group="gallery" href='+markers[index].photo+' title="">image</a></p>');
    	}
	});
	
	
	//INIT MAP PLUGIN
	var mapObject  = jQuery('#map').vectorMap('get', 'mapObject');
	//Scroll to the top function
  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('.scrolltop').fadeIn();
      } else {
          $('.scrolltop').fadeOut();
      }
  }); 
 
  //Click event to scroll to top
  $('.scrolltop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
  });

  //fancybox init
  $('.fancybox').fancybox({
  	  prevEffect : 'none',
	  nextEffect : 'none',
	  closeBtn  : false,
	  arrows    : false,
	  nextClick : false,
	  openEffect : 'elastic',
	  openSpeed  : 150,
	  closeEffect : 'elastic',
	  closeSpeed  : 150,
	  helpers : {
		 thumbs : {width  : 50,height : 50},
		 title : {type : 'inside'}
		},
	});

  $('#popup').fancybox({
    prevEffect : 'none',
    nextEffect : 'none',
    closeBtn  : true,
    arrows    : false,
    nextClick : false,
    openEffect : 'elastic',
    openSpeed  : 150,
    closeEffect : 'elastic',
    closeSpeed  : 150
  });
  
  $("#popup").trigger('click');

  //nav init
  var sections = [];
  var id = false;
  var $navbar = $('.index');
  var $navbara = $('a', $navbar);
  $navbara.click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - $navbar.height()
    });
    hash($(this).attr('href'));
  });
  $navbara.each(function(){
    sections.push($($(this).attr('href')));
  });
  $(window).scroll(function(e){
    var scrollTop = $(this).scrollTop() + ($(window).height()/2)
    for(var i in sections){
      var section = sections[i];
      if (scrollTop > section.offset().top) {
        scrolled_id = section.attr('id');
      }
    }
    if (scrolled_id !== id) {
      id = scrolled_id
      $navbara.removeClass('current');
      $('a[href="#' + id + '"]', $navbar).addClass('current').css("background","#333");
      $('a[class="nav-link"]').css("background","none");
    }
  });
  hash = function(h) {
    if (history.pushState) {
      history.pushState(null, null, h);
    }else{
      location.hash = h;
    }
  }

//MediaElementPlayer init
  $('audio').mediaelementplayer({success: function(mediaElement, originalNode) {
  }});
  
  $(".texteres").css("display","none");
  $("#textefr").css("display","block");
  // fonction showViaLink
  function showViaLink(array)
  {
    array.each(function(i)
    {   
      $(this).click(function()
      {
        var target = $(this).attr("href");
        $("#sel li a").removeClass("selected");
        $(this).addClass("selected");
        $(".texteres").css("display","none");
        $(target).fadeIn('100','linear');
        return true;
      });
    });
  }
  //fonction video
  var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("button");

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
});

var xmlhttp = new XMLHttpRequest();
var url = "Lod.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    	JSON.parse(xmlhttp.responseText);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
document.getElementById("#Lod").innerHTML = out;
});
 //Click to scroll to top
  $('.section').click(function(){
      document.querySelector('#livre').scrollIntoView({ behavior: 'smooth' });
      return false;
  });
