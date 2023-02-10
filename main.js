var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition(); //  instanciar um objeto
var x =0;
var y=0;
var drawRect ="";
var drawCircle ="";

function preload(){

}
function setup(){
    canvas = createCanvas(900, 600);
}
function draw(){
    if(drawCircle=="set"){
        radius = Math.floor(Math.random()*500);
        stroke(13);
        fill("black");
        circle(x, y, radius);
        drawCircle="";
    }
    if(drawRect=="set"){
        stroke(13);
        fill("black");
        rect(x, y, 100, 700);
        drawRect="";
    }
}
function start(){
    document.querySelector("#status").innerHTML="O sistema esta ouvindo, por favor fale.";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript;
    document.querySelector("#status").innerHTML="a fala foi reconhecida como: "+content;
    if(content == "Circle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.querySelector("#status").innerHTML="Estamos desenhando um circulo";
        drawCircle = "set";
    }
    if(content == "Rectangle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.querySelector("#status").innerHTML="Estamos desenhando um retangulo";
        drawRect = "set";
    }
}