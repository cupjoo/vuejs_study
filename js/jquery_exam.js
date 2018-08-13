// jQuery 사용 예제


// $(element|selector).method1().method2()
$('.welcome').html('hello word!').css('background-color','yellow');

$('#navigation li').on('click', function() {
    $('#navigation li').removeClass('selected');
    $(this).addClass('selected');
})

// chain - jQuery 메소드는 자기 자신을 반환한다.
$('#my_link').attr('href', 'https://naver.com').attr('target', '_black').css('color', 'red');

// traverse - chain의 대상을 바꿔 체인을 연장시키는 방법
$('#family').find('#father').css('background-color', 'green').end().find('#brother').css('background-color', 'gray');
 