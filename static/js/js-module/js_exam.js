// 출력 관련 예제
function print_exam(){
    var a =5, b='5';

    document.write((a==b)+'<br>');   // 값 비교
    document.write((a===b)+'<br>');  // 데이터형도 비교 (부정형은 !==)
    console.log('로그 출력 테스트');
}

// 배열 관련 예제
function arr_exam(){
    var arr = [1,2,3];
    arr.pop();
    arr.push(4);
    for(i in arr){
        document.write(arr[i]+'<br>');
    }
}