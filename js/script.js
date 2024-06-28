$(function() {
  $('.menu-btn').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.gnavi__sp-style').addClass('active');
      } else {
          $('.gnavi__sp-style').removeClass('active');
      }
  });
});

//スクロールのためのスクリプト　https://mitsutano-oshiro.com/archives/1842　//
//キャッチコピー//
$(function () {
    // ウィンドウをスクロールしたら…
    $(window).scroll(function () {
        // ウィンドウの高さを取得
        const wHeight = $(window).height();
        // スクロールした量を取得
        const wScroll = $(window).scrollTop();
            // それぞれのblockクラスに対して…
            $(".catch-copy").each(function () {
                // それぞれのblockクラスのウィンドウからの高さを取得
                const bPosition = $(this).offset().top;
                // スクロールした量が要素の高さを上回ったら
                // その数値にウィンドウの高さを引き、最後に200pxを足す
            if (wScroll > bPosition - wHeight) {
                $(this).addClass("fadeIn");
            }
        });
    });
});


