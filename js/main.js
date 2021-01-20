//header scroll
var _window = $(window),
    header = $('header'),
    toppageBottom,
    startPos,
    winScrollTop;
  
_window.on('scroll', function() {
  winScrollTop = $(this).scrollTop(); 
  toppageBottom = 700;
  if (winScrollTop >= startPos) {
    if (winScrollTop >= toppageBottom) {
      header.addClass('hide');
    }
  } else {
    header.removeClass('hide');
  }
  //次回のスクロール時、前回のスクロールの値として動く
  startPos = winScrollTop;
});


// header mobile menu
var $menuBtn = $('#menu-btn'),
    $slideMenu = $('#slide-menu');

$menuBtn.on('click', function (e) {
  if ($slideMenu.hasClass('active')) {
    $slideMenu.fadeOut();
    $menuBtn.html('<i class="fas fa-bars"></i>');
    $slideMenu.removeClass('active');
  } else {
    $slideMenu.fadeIn();
    $menuBtn.html('<i class="fas fa-times"></i>');
    $slideMenu.addClass('active');
  }
})

//toppage typewriter
const typewriter = (param) => {

  let el = document.querySelector(param.el);
  let speed = param.speed;
  let string = param.string.split("");

  string.forEach((char, index) => {
      setTimeout(() => {
          el.textContent += char;
      }, speed * index);
  });
};

typewriter({
  el: "#typewriter", //要素
  string: "Shunpei  Kambayashi", //文字列
  speed: 150 //速度
});


//header nav
var _nav1 = $('#nav_1'),
    _nav2 = $('#nav_2'),
    _nav3 = $('#nav_3'),
    title = $('#title'),
    $menuBtn = $('#menu-btn'),
    $slideMenu = $('#slide-menu'),
    ScrollTop;

title.on('click', function() {
    $('html, body').animate({scrollTop: 0}, 700);
})
_nav1.on('click', function() {
    move = $("" +  _nav1.attr("href") + "").offset().top - 150;
    $('html, body').animate({scrollTop: move}, 700);
})
_nav2.on('click', function() {
  move = $("" +  _nav2.attr("href") + "").offset().top;
  $('html, body').animate({scrollTop: move}, 700);
})
_nav3.on('click', function() {
  move = $("" +  _nav3.attr("href") + "").offset().top - 150;
  $('html, body').animate({scrollTop: move}, 700);
})


// mobile side-menu

