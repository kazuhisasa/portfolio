$(function(){

/*
  //hover
  $('a').hover(
    function(){$(this).fadeTo(170, 0.7);},
    function(){$(this).fadeTo(170, 1.0);}
  );
*/
  //slider
  $('#bxslider, #bxslider2').bxSlider({
  });

  /* ---ここから3D回転の記述--- */
　
  //現在の表面を記録
  var now = 'front';
  //var rotate180 =



  $('#create').click(
    function(){
      $('.hgroup').children().fadeOut('fast');
      //現在表面がfrontの時
      if(now == 'front'){
        //自分が表面にいなければ実行
        if(!$('.createbox').hasClass('front')){
          //自分がbackになるので重複しないよう他のbackをnoneに変更
          $('.back').removeClass('back').addClass('none');
          $('.createbox').removeClass('none').addClass('back');
          $('.cube').css({
            '-webkit-transform': 'rotateY(180deg)',
            '-moz-transform': 'rotateY(180deg)',
            '-ms-transform': 'rotateY(180deg)',
            '-o-transform': 'rotateY(180deg)',
            'transform': 'rotateY(180deg)',
            '-webkit-transform': 'rotateX(180deg)',
            '-moz-transform': 'rotateX(180deg)',
            '-ms-transform': 'rotateX(180deg)',
            '-o-transform': 'rotateX(180deg)',
            'transform': 'rotateX(180deg)'
          });
          now = 'back';
        }
      } else if(now == 'back'){
        if(!$('.createbox').hasClass('back')){
          $('.front').removeClass('front').addClass('none');
          $('.createbox').removeClass('none').addClass('front');
          $('.cube').css({
            '-webkit-transform': '',
            '-moz-transform': '',
            '-ms-transform': '',
            '-o-transform': '',
            'transform': '',
            '-webkit-transform': '',
            '-moz-transform': '',
            '-ms-transform': '',
            '-o-transform': '',
            'transform': ''
          });
          now = 'front';
        }
      }
      $('.hgroup').children('.h_cr').fadeIn('slow');
    }
  );

  $('#repair').click(
    function(){
      $('.hgroup').children().fadeOut('fast');
      //現在表面がfrontの時
      if(now == 'front'){
        //自分が表面にいなければ実行
        if(!$('.repairbox').hasClass('front')){
          //自分がbackになるので重複しないよう他のbackをnoneに変更
          $('.back').removeClass('back').addClass('none');
          $('.repairbox').removeClass('none').addClass('back');
          $('.cube').css({
            '-webkit-transform': 'rotateY(180deg)',
            '-moz-transform': 'rotateY(180deg)',
            '-ms-transform': 'rotateY(180deg)',
            '-o-transform': 'rotateY(180deg)',
            'transform': 'rotateY(180deg)',
            '-webkit-transform': 'rotateX(180deg)',
            '-moz-transform': 'rotateX(180deg)',
            '-ms-transform': 'rotateX(180deg)',
            '-o-transform': 'rotateX(180deg)',
            'transform': 'rotateX(180deg)'
          });
          now = 'back';
        }
      } else if(now == 'back'){
        if(!$('.repairbox').hasClass('back')){
          $('.front').removeClass('front').addClass('none');
          $('.repairbox').removeClass('none').addClass('front');
          $('.cube').css({
            '-webkit-transform': '',
            '-moz-transform': '',
            '-ms-transform': '',
            '-o-transform': '',
            'transform': '',
            '-webkit-transform': '',
            '-moz-transform': '',
            '-ms-transform': '',
            '-o-transform': '',
            'transform': ''
          });
          now = 'front';
        }
      }
      $('.hgroup').children('.h_re').fadeIn('slow');
    }
  );

  $('#pj').click(
    function(){
      $('.hgroup').children().fadeOut('fast');
      //現在表面がfrontの時
      if(now == 'front'){
        //自分が表面にいなければ実行
        if(!$('.pjbox').hasClass('front')){
          //自分がbackになるので重複しないよう他のbackをnoneに変更
          $('.back').removeClass('back').addClass('none');
          $('.pjbox').removeClass('none').addClass('back');
          $('.cube').css({
            '-webkit-transform': 'rotateY(180deg)',
            '-moz-transform': 'rotateY(180deg)',
            '-ms-transform': 'rotateY(180deg)',
            '-o-transform': 'rotateY(180deg)',
            'transform': 'rotateY(180deg)',
            '-webkit-transform': 'rotateX(180deg)',
            '-moz-transform': 'rotateX(180deg)',
            '-ms-transform': 'rotateX(180deg)',
            '-o-transform': 'rotateX(180deg)',
            'transform': 'rotateX(180deg)'
          });
          now = 'back';
        }
      } else if(now == 'back'){
        if(!$('.pjbox').hasClass('back')){
          $('.front').removeClass('front').addClass('none');
          $('.pjbox').removeClass('none').addClass('front');
          $('.cube').css({
            '-webkit-transform': '',
            '-moz-transform': '',
            '-ms-transform': '',
            '-o-transform': '',
            'transform': '',
            '-webkit-transform': '',
            '-moz-transform': '',
            '-ms-transform': '',
            '-o-transform': '',
            'transform': ''
          });
          now = 'front';
        }
      }
      $('.hgroup').children('.h_pj').fadeIn('slow');
    }
  );

  $('#ho').click(
    function(){
      $('.hgroup').children().fadeOut('fast');
      //現在表面がfrontの時
      if(now == 'front'){
        //自分が表面にいなければ実行
        if(!$('.hobox').hasClass('front')){
          //自分がbackになるので重複しないよう他のbackをnoneに変更
          $('.back').removeClass('back').addClass('none');
          $('.hobox').removeClass('none');
          $('.hobox').addClass('back');
          $('.cube').css({
            '-webkit-transform': 'rotateY(180deg)',
            '-moz-transform': 'rotateY(180deg)',
            '-ms-transform': 'rotateY(180deg)',
            '-o-transform': 'rotateY(180deg)',
            'transform': 'rotateY(180deg)',
            '-webkit-transform': 'rotateX(180deg)',
            '-moz-transform': 'rotateX(180deg)',
            '-ms-transform': 'rotateX(180deg)',
            '-o-transform': 'rotateX(180deg)',
            'transform': 'rotateX(180deg)'
          });
          now = 'back';
        }
      } else if(now == 'back'){
        if(!$('.hobox').hasClass('back')){
          $('.front').removeClass('front').addClass('none');
          $('.hobox').removeClass('none');
          $('.hobox').addClass('front');
          $('.cube').css({
            '-webkit-transform': '',
            '-moz-transform': '',
            '-ms-transform': '',
            '-o-transform': '',
            'transform': '',
            '-webkit-transform': '',
            '-moz-transform': '',
            '-ms-transform': '',
            '-o-transform': '',
            'transform': ''
          });
          now = 'front';
        }
      }
      $('.hgroup').children('.h_ho').fadeIn('slow');
    }
  );

  /* ---ここまで3D回転の記述--- */

});

$(window).load(function(){
    $(".loading").fadeOut();
});