// jQuery 사용 예제
$('.welcome').html('hello word!').css('background-color','yellow');
$('#navigation li').on('click', function() {
    $('#navigation li').removeClass('selected');
    $(this).addClass('selected');
})