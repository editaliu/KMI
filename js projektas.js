//FUNKCIJA KUNO MASES INDEKSUI APSKAICIUOTI
function skaiciuoti() {
    var mase = Number(document.getElementById("mase").value);
    var ugis = Number(document.getElementById("ugis").value);

    var kmi = mase / Math.pow(ugis, 2);
    var kmi2 = Math.round(kmi * 1000000) / 100;

    document.getElementById("viso").innerHTML = kmi2;

    //VALDYMO SAKINIAI IF'AI
    if (kmi2 < 18.5)
        document.getElementById("reiksme").innerHTML = " 👎kad sveri per mažai. Eik Hesburger'į ir užsisakyk porą didelių mėsainio kompleksų.";

    if (kmi2 >= 18.5 && kmi2 <= 25)
        document.getElementById("reiksme").innerHTML = "kad viskas gerai 👍👌 ";

    if (kmi2 >= 25 && kmi2 <= 30)
        document.getElementById("reiksme").innerHTML = "☝ 🛑 🍔 🍕 kad ir kaip skaudu būtų tai skaityti, bet mesk mėsainius ir šokoladukus, tu nutukusi/ęs, geriau pasidaryk salotų... ";

    if (kmi2 > 30)
        document.getElementById("reiksme").innerHTML = "🥗 🥒 kad turi viršsvorio. Pagalvok, kas tavo gyvenime negerai. Jei nieko nesugalvoji, pradėk valgyt salotas ir eik sportuoti.";

    if (mase < 5) {
        document.getElementById("viso").innerHTML = "svoris negali buti maziau nei 5 kg";
        alert("KLAIDA! Įvedei per mažą svorį!");
    }

    if (mase > 700) {
        document.getElementById("viso").innerHTML = "svoris negali buti daugiau nei 700 kg";
        alert("KLAIDA! Įvedei per didelį svorį!");
    }

    if (ugis < 20) {
        document.getElementById("viso").innerHTML = " ugis negali buti maziau nei 20 cm";
        alert("KLAIDA! Įvedei per mažą ūgį!");
    }

    if (ugis > 300) {
        document.getElementById("viso").innerHTML = " ugis negali buti daugiau nei 300 cm";
        alert("KLAIDA! Įvedei per didelį ūgį!");
    }

    if (isNaN(ugis) || isNaN(mase)){
        document.getElementById("reiksme").innerHTML = "... kad į laukelius reikia įvesti skaičius :) ";
        alert ("KLAIDA! Į svorio ir ūgio laukelius reikia įvesti skaičius");
}

}

//ĮVYKIS HEADER ONCLICK
var header = document.getElementById("header");
header.onclick = function () {
    alert("Čia spausti nereikia :)");
};

//ĮVYKIS BODY ONLOAD
function krauna() {
    alert("Kantrybė - dorybė");
}
//ĮVYKIS SVORIS ONMOUSEOVER &
//ONMOUSEOUT (PASIRINKTAS)
function didinti(s) {
    s.style.height = "70px";
    s.style.width = "270px";
}

function normaliai(s) {
    s.style.height = "50px";
    s.style.width = "250px";
}

//ĮVYKIS MYGTUKAS SETTIMEOUT
function myfunkcion() {
    alert(":))))");
}

//ĮVYKIS SETINTERVAL
var laikas = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demolaikas").innerHTML = d.toLocaleTimeString();
}

//ĮVYKIS SVORIS ONFOCUS (kai parasytas 0, tada padejus zymekli, jis dingsta) Nelabai funkcionalu

//var svorisfield = document.getElementById("mase");
//svorisfield.onfocus = function () {
//    if (svorisfield.value == "0") {
//        svorisfield.value = "";
//    }
//};

//ĮVYKIS SVORIS ONBLUR
var svorisfield = document.getElementById("mase");
svorisfield.onblur = function () {
    if (svorisfield.value == "") {
        svorisfield.value = "Tai kiek sveri?";
    }
}

//PASIRINKTAS ĮVYKIS UGIS ONINPUT
function inputas() {
    var x = document.getElementById("ugis").value;
    document.getElementById("ivestassvoris").innerHTML = "Jūsų įvestas ūgis: " + x;
}

//PASIRINKTAS ĮVYKIS SVORIS ONSELECT
function juodinti() {
    alert("Trinsi pažymėtą tekstą? o.O")
}

//MASYVAI 
function zaidimas() {
    var kas = ["Tavo šuo sveria ", "Tu sveri ", "Tavo kaimynė/as sveria "];
    var sveria = ["tiek pat, kiek ir tavo kuprinė.", "kaip bačkutė alaus.", "tiek, kiek Kalėdinės lemputės.", "kaip dramblys.", "kaip gerai įmitusi skruzdėlė.", "tiek pat, kiek sveria tavo sofa.", "kaip pagalvės užvalkalas.", "beveik nieko!"];
    var rand = kas[Math.floor(Math.random() * kas.length)];
    var rand2 = sveria[Math.floor(Math.random() * sveria.length)];
    document.getElementById("gameresult").innerHTML = rand + rand2;
}

//VEIKSMAI SU DATA/LAIKU    
function data() {
    document.getElementById("rodytidata").innerHTML = Date();
}

function data2() {
    var d = new Date("2017,11,17")
    document.getElementById("rodytidata2").innerHTML = d;
}


//MODAL

var modal = document.getElementById('myModal1');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImage1');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption1");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
