// jQuery 사용 예제 2


// event 다루기
function clickHandler(){
    alert('Clicked!');
}

$('#click').on('click', clickHandler);

$('#trigger_event').on('click', function () {
    // #click의 event 중 click이란 이름의 event를 호출함
    $('#click').trigger('click');
});

$('#remove_event').on('click', function () {
    $('#click').off('click', clickHandler)
});

// start of element 제어

// 부모, 형제 추가
$('#intro').append('Junyoung').after('<div>What\'s your name?</div>');
// 부모로 감싸기
$('#wrapping').wrap('<div id="first_wrap"><strong id="second_wrap"></strong></div>');
// 삭제
$('#delete_el').on('click', function () {
    $('#wrapping').remove();
});
// 교체
$('#replace_el').on('click', function () {
    $('<div>replaced</div>').replaceAll('p');
});

// 클래스 제어
$('#first').click(function () {
    $(this).toggleClass('highlight');
});
// 속성 제어
$('input').keyup(function () {
    var value = $(this).val();
    $('#result').text(value);
});

// end of element 제어