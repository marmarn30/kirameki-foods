// ecarchive.html
// 検索バー
$('.e-search').on('click',function() {
  $('.e-sp-search-container').slideToggle();
  $('.e-mask').toggleClass('open');
});

$('.e-search-left').on('click',function() {
  $('.e-sp-search-container').slideToggle();
  $('.e-mask').removeClass('open');
});


//ハンバーガーメニュー
$('.e-hbg-open').on('click',function() {
  $('.e-nav').toggleClass('slide');
  $('.e-hbg-open').hide();
  $('.e-hbg-close').show();
});

$('.e-hbg-close').on('click', function() {
  $('.e-nav').removeClass('slide');
  $('.e-hbg-close').hide();
  $('.e-hbg-open').show();
});


// アコーディオン
$('.e-category-title').on('click', function() {
  $(this).next().slideToggle();
});
// バツ押したら閉じる＆上下矢印を変更
$('.e-nav-close').on('click', function() {
  $('.e-organic-wrap').slideToggle();
  $('.e-category-title').removeClass('active');
});


// クリックされたら上下矢印を変更
$('.e-category-title').on('click', function() {
  $(this).toggleClass('active');
});


// スクロール時に画像を左からフェードイン
$('.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeInLeft');
      this.destroy();
    }
  },
  offset: '70%',
});


// レスポンシブ（画面幅768px~1283pxのときはクラスを外す）
if (window.matchMedia('(min-width: 768px) and (max-width: 1283px)').matches) {
$('.e-pc-header, .e-bread, #e-main').removeClass('e-container');
}

if (window.matchMedia('(min-width: 768px) and (max-width: 1283px)').matches) {
  $('#e-container').removeClass('e-container-pc-only');
  }