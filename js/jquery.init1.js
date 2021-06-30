//Click event to scroll to top
  $('.scrolltop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
  });

   //Click to scroll to top
  $('.section').click(function(){
      document.querySelector('#situation').scrollIntoView({ behavior: 'smooth' });
      return false;
  });

  var sections = [];
  var id = false;
  var $navbar = $('.index1');
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