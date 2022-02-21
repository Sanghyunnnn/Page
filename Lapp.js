// const loginForm=document.getElementById("login-form");

// const loginInput=loginForm.querySelector('input')  <input>태그 element 가져옴
// //querySelector은  class , id , element를 검색어로 가능
// //제대로 명시해 주기만 하면 됨 ㅇㅇ


// //loginForm은 HTML의 element이기 때문에
// // loginForm.querySelector, loginForm.getElemetnBy~ 사용 가능하다!!



// const loginInput=loginForm.querySelector('button')




const loginForm=document.querySelector('#login-form');
const loginInput=document.querySelector('#login-form input');
const greeting=document.querySelector('#greeting');


//loginForm은 HTML의 element이기 때문에
// querySelector, getElemetnBy~ 사용 가능하다!!


const HIDDEN_CLASSNAME="hidden"; //String을 저장하는 변수의 이름을  all대문자로 한다 

function onLoginSubmitEvent(event)
{
    event.preventDefault();
    //해당 이벤트의 기본적인 동작을 막는다!!!
    //ex) form에서 submit하면 기본적으로 웹페이지가 새로고침 된다..
    //이런것들을 막을 수 있음 !!!!!!!!!!!

    const username=loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);

   
    localStorage.setItem("username",username); 
    //localStorage에 저장!!!!! 키:값 형태로 !!
    //브라우저가 가지고 있는 작은 DB API라고 보면 된다..


    paintGreeting(username);
}



//이벤트 실행할때 파라미터로 넘겨주는 함수 실행 절차
// 1. 이벤트 발생
// 2. 파라미터로 넘겨준 함수가 실행됨
//     - 함수가 Func() 의 형태로 실행되지 않고..F
//     - Func(event)) 의 형태로 실행됨...
//     - 여기서 event 해당 이벤트 발생에 대한 모든 정보를 브라우저가
//     event 넣어서 함수를 실행함!!!
    
//     - event 첫번째 매개변수임 




//submit 이벤트 :
//form태그 내에서 Enter키누르거나 form태그내에 있는 버튼 click할때
//자동적으로 발생하는 event!!


const USER_NAME_KEY="username";


const saveUsername=localStorage.getItem(USER_NAME_KEY);




function paintGreeting(username)
{
    greeting.innerText=`hello ${username}`;

    greeting.classList.remove(HIDDEN_CLASSNAME);

}




if(saveUsername===null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //특정 태그의 "hidden"이라는 클래스를 제거함
    loginForm.addEventListener("submit",onLoginSubmitEvent);

    //show Form
}
else{
    //show the greeting

    paintGreeting(saveUsername);


}

