

//todo 입력 
//리스트 생성
//확인 가능



const todoForm=document.getElementById("todo-form");
const todoInput=todoForm.querySelector('input');
//document.getElementById("todo-form input");
const todoList=document.getElementById("todo-list");

const TODOS_KEY="todos";


let toDos=[];  //입력하면 여기다 저장

function saveTodo()
{
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    //localStorage는 문자열로 된것만 저장 가능하다!!!
    //JSON.stringfy ==>> JS의 object를 문자열로 바꿔주는 역할..
    //toDos=[1,2,3]  -->>> toDot="[1,2,3]"

    //JSON.parse("[1,2,3]")
    //==>>[1,2,3]  (배열로 변환)
}
//toDos를 localStorage에 반영!!!



function deleteTodo(event)
{
    const li=event.target.parentElement; 
    //event의 target은 우리가 클릭한 "X"버튼
     //이벤트가 발생한 곳의 부모 element ( li )
     console.log(typeof(li.id));
    li.remove();
    toDos=toDos.filter(toDo=>toDo.id!==parseInt(li.id));
    saveTodo();
}


function paintTodo(newTodoObj)
{
    const li=document.createElement('li');  //li태그 생성
    li.id=newTodoObj.id;

    const span=document.createElement('span');//span태그 생성
    const button=document.createElement('button');

    span.innerText=newTodoObj.text;
    
    



    button.innerText="X";
    button.addEventListener("click",deleteTodo);
    
    li.appendChild(span); //li태그 안에 span태그 집어넣음 !!
    li.appendChild(button);

    todoList.appendChild(li); //todoList태그에다가 집어넣음
}



function handleTodoSubmit(event) 
{


    event.preventDefault();
    const newTodo=todoInput.value;  //입력한 값 
    todoInput.value="";

    const newTodoObj=
    {
        text:newTodo,
        id:Date.now(),
    }

    toDos.push(newTodoObj);
    paintTodo(newTodoObj);//리스트 출력
    saveTodo()
}

todoForm.addEventListener("submit",handleTodoSubmit);







const savedTodoDos=localStorage.getItem(TODOS_KEY);

if(savedTodoDos!==null)
{
    const parseToDos=JSON.parse(savedTodoDos);
    toDos=parseToDos;
    parseToDos.forEach(paintTodo);
    //parseToDos.forEach(sayhello(" "));
    //parseToDos=["a","b",...];
    //item은 함수의 실행 정보가 담겨있는 첫번째 매개변수...
    //forEach(say);
    //say("a")
    //say("b")
    //...
}