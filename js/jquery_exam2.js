// jQuery 사용 예제 2


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

