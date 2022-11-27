// スムーズスクロール
$(document).ready(function(){
    $('a[href^=#]').click(function() {// #で始まるアンカーをクリックした場合に処理
      var adjust = 90;// 移動先を50px下にずらす
      var speed = 450;// スクロールの速度
      var href= $(this).attr("href");// アンカーの値取得
      var target = $(href == "#" || href == "" ? 'html' : href);// 移動先を取得
      var position = target.offset().top - adjust;;// 移動先を調整
      $('html,body').animate({scrollTop:position}, speed, 'swing');// スムーススクロール
      return false;
    });
});
$(document).ready(function(){
    $('a[href^=#sp]').click(function() {
      var adjust = 50;
      var speed = 450;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - adjust;;
      $('html,body').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
});
// FADE-IN ANIMATION
scroll_effect();

$(window).scroll(function(){
	scroll_effect();
});


function scroll_effect(){
	$('.fade_u, .fade_r, .fade_l').each(function(){
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > elemPos - windowHeight + 60){
			$(this).addClass('effect-scroll');
		}
	});
}