// ハンバーガーメニュー
$('.nav-button').on('click', (e) => {
  $('.sp-nav').slideToggle();
});

//バツボタンを押したら閉じる
$('.close').on('click', (e) => {
  $('.sp-nav').slideToggle();
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