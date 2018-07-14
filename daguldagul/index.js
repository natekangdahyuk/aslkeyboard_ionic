//전역변수
var g_input="";
var g_arr = [];//new Array();

$(document).ready(function () {
    //그룹판 클릭
    $(".group_um-j").click(function () {
      var domain = $(this).data("domain");

      $(this).parent().css('z-Index','0');
      $('#'+domain).css('z-Index','1');
    });//그룹판 클릭


    //마지막 캐릭터 클릭
    $(".last_char").click(function () {
      var char = $(this).data("char");
      var um = $(this).data("um");

      g_arr.push(char);
      g_input = g_input + char;


      //$('textarea[id=input]').val(g_input);
      //$('textarea[id=output]').val(Hangul.assemble(g_input));
      //$('txt_input').val(g_input);
      $('#txt_output').val(Hangul.assemble(g_input));

      $(this).parent().css('z-Index','0');

      switch (um) {
        case 'jaum':
          $('#div_group_moum-j').css('z-Index','1');
          break;
        case 'moum':
          $('#div_group_jaum-j').css('z-Index','1');
          break;
      }
    });//마지막 캐릭터 클릭

    //자음판으로
    $(".go_jaum").click(function () {
        init();
    });//-->자음판으로

    //지우기
    $(".go_del").click(function () {
      g_arr.pop();
      var newStr="";
      for(var i=0;i<g_arr.length;i++){
        newStr = newStr + g_arr[i];
      }
      g_input = newStr;
      $('textarea[id=input]').val(g_input);
      $('textarea[id=output]').val(Hangul.assemble(g_input));

    });//-->지우기



});//ready

function init(){
    $('.divBox-j').css('z-Index','0');
    $('#div_group_jaum-j').css('z-Index','1');
}

