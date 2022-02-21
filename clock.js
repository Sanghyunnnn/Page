const clock=document.querySelector("h2#clock");



function getClock()
{
    const date=new Date();

    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");

    
    clock.innerText=`${hours} : ${minutes} : ${seconds}`;
}


getClock();
setInterval(getClock,1000);  //1초 뒤에 최초로 실행되고 이후 1초마다 반복
//주기적으로 매 시간마다 특정 함수를 실행 가능하게 함!!
// (Func, time) 을 파라미터로 가짐 



//padStart
//-->> "string".padStart( 2, "0");
//==>>>>  string을 일정한 크기의 문자열로 만드는 함수
//======>>> 일정한 길이로 만들기 위해 특정 문자 앞에 추가 가능함(padStart)
// "1" -->> "01"  로 변환 가능함 ㅇㅇ 

//padEnd는 뒤에 문자 추가하는것
//string 길이를 2로 만들어야 해서 javascript에 부탁함