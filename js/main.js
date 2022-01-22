//index.html
// ハンバーガーメニュー
// .nav-buttonがクリックされたら.openクラスを付ける
$('.nav-button').on('click',function() {
  $('.sp-nav, #mask').toggleClass('open');
});

//メニュー等がクリックされたら、openクラスを外して非表示にする
$('.sp-nav-list li, .close, #mask').on('click', function() {
  $('.sp-nav, #mask').removeClass('open');
});

// カバー画像をゆっくり表示
const $cover = $('#cover');

$(document).ready(function() {
  $cover.addClass('fadeIn animated');
});

// スクロール時に画像をフワッと表示
$('.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
      this.destroy();
    }
  },
  offset: '70%',
});

// Swiper
new Swiper('.swiper', {
    speed: 3000,
    slidesPerView: 'auto',
    loop: true,
    freeMode: true,
    freeModeMomentum: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
});


// recruitment.html
//ハンバーガーメニュー
$('.r-hbg-open').on('click',function() {
  $('.r-nav').slideToggle();
  $('.r-hbg-open').hide();
  $('.r-hbg-close').show();
});

$('.r-hbg-close, .r-sp-nav-list, .r-pc-nav-list, #r-nav-mask').on('click', function () {
  $('.r-nav').slideToggle();
  $('.r-hbg-close').hide();
  $('.r-hbg-open').show();
});