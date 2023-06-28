var SpeechRecognition = window.webkitSpeechRecognition;// API (ser humano) expecie q reconhese a voz
  
var recognition = new SpeechRecognition();// cria um novo API (um novo ser humano) de nome recognition

var Textbox = document.getElementById("textbox"); //pega o texto e guarda na variável

function start()//função
{
    Textbox.innerHTML = ""; //texto vazio
    recognition.start();// começar a conversão de fala para texto 
} 
recognition.onresult = function(event) {//função que mostra o texto

 console.log(event); //mostra no console
 var Content = event.results[0][0].transcript;//guarda oq foi falado na var content
document.getElementById("textbox").innerHTML=Content;// escreve oq foi falado pelo falate reserva (vc)
//Speak();
if (Content=="Oi") {
    Speak();
} 
    
}

function Speak(){
var synth=window.speechSynthesis;//epexie q fala
//SpeechData=document.getElementById("textbox").value;// oq noixxx fala
SpeechData="tirando selfie quando menos esperar"
var falante=new SpeechSynthesisUtterance(SpeechData);// ser q fala
synth.speak(falante);//ser q fala
Webcam.attach(camera);// pede acesso a cam
setTimeout(function(){
    takeselfie();
    savephoto();
},7777);
}
camera=document.getElementById("camera");
Webcam.set({
width:360,
heigth:250,
image_format:"png",
pngQuality:90
});

function takeselfie(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>';// onde e como salva
    });
}
function savephoto(){
link=document.getElementById("link");
image=document.getElementById("selfImage").src;
link.href=image;
link.click();
}