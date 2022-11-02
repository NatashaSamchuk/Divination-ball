let predictions = ["Возможно", "Бесспорно", "Предрешено", "Никаких сомнений", "Определенно да", "Будь уверен", "Иди к своей цели", "Хорошие перспективы", "Знаки говорят: да", "Пока не ясно", "Потряси еще раз", "Спроси позже", "Пока нельзя предсказывать", "Еще не все определено", "Даже не думай", "Нет", "Ни в коем случае", "Весьма сомнительно", "Да", "Все получится", "Однозначно"];
let ball = document.querySelector(".ball");
let answer = document.querySelector(".prediction");
ball.addEventListener('click', function(){
    answer.style.backgroundColor = "black";
    setTimeout(function(){
        ball.style.marginLeft = '-150px'
    }, 500);
    setTimeout(function(){
        ball.style.marginLeft = '150px'
    }, 1000);
    setTimeout(function(){
        ball.style.marginLeft = '-100px'
    }, 1500);
    setTimeout(function(){
        ball.style.marginLeft = '100px'
    }, 2000);
    setTimeout(function(){
        ball.style.marginLeft = '0'
    }, 2500);
    setTimeout(function(){
        let rendomIndex = Math.floor(Math.random() * predictions.length);
        answer.innerHTML = predictions[rendomIndex];
        answer.style.backgroundColor = "lightblue";
    }, 3000);
})
let btn = document.querySelector("button");
let btnContainer = document.querySelector(".buttonContainer");
let flex = document.querySelector(".flex");

btn.onclick = function(){
    show(flex, 3000);
}

function show(element, time = 1000){
    element.style.display = 'flex';
    element.style.opacity = 0;
    let fps = 60;
    let steps = time / (1000 / fps);
    let op = 0;
    let d0 = 1 / steps;
    let timer = setInterval(function(){
        op += d0;
        if(op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
    }, 1000 / fps);

    btnContainer.style.display = "none";
}