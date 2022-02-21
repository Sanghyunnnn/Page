const API_KEY="65c86dcfe64b499b6f1a1c62bf9fb3aa"


function onGeoOK(position)//position은 user의 위치!!
{
    const lat=position.coords.latitude;
    const lng=position.coords.longitude;

    console.log(position);
    console.log(`You live in ${lat} ${lng}`)


    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    
    console.log(url);
    fetch(url)
    .then(response=>response.json())
    .then(data=>{

        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");
        

        city.innerText=data.name;
        weather.innerText=`${data.weather[0].main} / ${data.main.temp}C`;
    }
    );

    // JS가 url로 request함...
    //실제로 url로 접속할 필요 없이 JS가 대신 url을 부름 
}
function onGeoError()
{

    alert("Cannot Find you!!");


}





navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);
//사용자의 현재 위치 좌표 Get!
//위치 불러오는데 success, error일때 실행할 함수!!!
//success일때 불러오는 함수에다가 JS는 위치 정보에 관한 object를 전달함