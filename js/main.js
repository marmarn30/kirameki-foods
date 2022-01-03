// ハンバーガーメニュー
// .nav-buttonがクリックされたら.openクラスを付ける
$('.nav-button').on('click',function() {
  $('.sp-nav').toggleClass('open');
  $('#mask').toggleClass('open');
});

//メニュー等がクリックされたら、openクラスを外して非表示にする
$('.sp-nav-list li, .close, #mask').on('click', function() {
  $('.sp-nav').removeClass('open');
  $('#mask').removeClass('open');
});

// カバー画像をゆっくり表示
const $cover = $('#cover');

$(document).ready(function() {
  $cover.fadeIn(3000);
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