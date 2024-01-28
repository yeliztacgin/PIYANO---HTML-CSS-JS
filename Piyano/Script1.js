// JavaScript source code
var context= null;
var o = null;
var g = null;


function play(frekans) {

    o = context.createOscillator();
    g = context.createGain(); 
    o.type = "triangle"
    o.connect(g);
    o.frequency.value = frekans;
    g.connect(context.destination);
    o.start(0);
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1);


}

var tuslar = document.querySelectorAll(".piyano a");
tuslar.forEach(tus => {

    tus.addEventListener("click", ()=> {
        console.log("tus");
        if (context == undefined) {
            context = new (AudioContext);

        }

        play(tus.getAttribute("data-note"));

    });




});