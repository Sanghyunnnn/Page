const img=
[

    "0.jpg","1.jpg","2.jpg"

];


const todayImg=img[Math.floor(Math.random()*img.length)];



const bgImg=document.createElement('img');
//JS에서 HTML태그 생성함!!


bgImg.src=`img/${todayImg}`;


document.body.appendChild(bgImg);