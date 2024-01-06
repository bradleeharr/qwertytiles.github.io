let keyboard = document.querySelector(".keyboard");
let app = document.querySelector(".app-1");
let appstart = document.querySelector(".appstart");
let app2 = document.querySelector(".app-2");
let scorediv = document.querySelector(".scorediv");
let accudiv = document.querySelector(".accudiv");
let gamemode = document.querySelectorAll(".settings input");
let soundCheckbox = document.getElementById("toggleSound");
let isSoundMuted = false;
let letters = "abcdefghijklmnopqrstuvwxyz";
let position = [];
let next = [];
let last;
let score = 0;
let miss = 0;
let f = 0;
let speed = 60;

let fps = 60;
let previousTime = performance.now();

const commonWordsList = [
    "the", "and", "you", "i", "he", "she", "it", "we", "they", "is",
    "are", "have", "do", "can", "was", "were", "not", "that", "this", "here",
    "there", "now", "but", "or", "for", "to", "with", "from", "in", "on",
    "at", "by", "about", "into", "over", "under", "between", "among", "through",
    "before", "after", "during", "above", "below", "next", "last", "first",
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "good", "bad", "happy", "sad", "big", "small", "new", "old",
    "hot", "cold", "high", "low", "day", "night", "sun", "moon", "water",
    "fire", "air", "earth", "food", "love", "hate", "friend", "enemy", "work",
    "play", "study", "learn", "eat", "drink", "sleep", "run", "walk", "talk",
    "listen", "see", "hear", "touch", "feel", "think", "know", "believe",
    "here", "now", "but", "or", "with", "from", "in", "on", "at", "by",
    "about", "into", "over", "under", "before", "after", "above", "below",
    "next", "last", "first", "good", "bad", "happy", "sad", "big", "small",
    "new", "old", "hot", "cold", "high", "low", "day", "night", "sun", "moon",
    "water", "fire", "air", "earth", "food", "love", "hate", "friend", "enemy",
    "work", "play", "study", "learn", "eat", "drink", "sleep", "run", "walk",
    "talk", "listen", "see", "hear", "touch", "feel", "think", "know", "believe"
  ];  
  const rarerWordsList = [
    "aberration", "obfuscate", "perspicacious", "quixotic", "recalcitrant",
    "sycophant", "verisimilitude", "zeitgeist", "abstruse", "capricious",
    "dearth", "ebullient", "facetious", "garrulous", "harangue", "ineffable",
    "juxtapose", "kowtow", "languid", "mellifluous", "nebulous", "ostracize",
    "pernicious", "quotidian", "reticent", "sagacious", "tenuous", "ubiquitous",
    "vacillate", "wistful", "xenophobe", "yuxtaposition", "zephyr",
    "acquiesce", "bombastic", "cacophony", "disparate", "ephemeral", "fecund",
    "garrulity", "harbinger", "ineffable", "juxtaposition", "kleptomaniac",
    "labyrinthine", "mellifluous", "nebulous", "obsequious", "pernicious",
    "quixotry", "rhapsody", "salient", "trepidation", "ubiquity", "verbose",
    "whimsical", "xenophile", "yearn", "zenith",
    "loquacious", "serendipity", "panacea", "ephemeral", "effervescent", "quintessential", "aberrant", "luminous", "ambivalent", "cacophony",
    "serendipitous", "magnanimous", "melancholy", "vicarious", "perfidious", "ineffable", "ephemeral", "resplendent", "ubiquity", "insidious"
  ];
const commonWords = commonWordsList.map(word => word + " ");
const rarerWords = rarerWordsList.map(word => word + " ");


function toggleSound() {
    isSoundMuted = !isSoundMuted;
    if (isSoundMuted) {
        labelSound.classList.add("muted");
    } else {
        labelSound.classList.remove("muted");
    }
}

function update(timeStamp) {
    fps = 1000 / (timeStamp - previousTime);
    previousTime = timeStamp;
    let tiles = document.querySelectorAll(".tile");
    for (let i = 0; i < tiles.length; i++) {
        position[i] += ((speed / fps) * 0.5);
        tiles[i].style.top = position[i] + "%";
        let rect = tiles[i].getBoundingClientRect();
        let rect2 = keyboard.getBoundingClientRect();
        if (rect.bottom > rect2.top) {
            f = 0;
        }
    }

    if (position[position.length - 1] >= 0) {
        createtile();
    }

    if (f != 0) {
        requestAnimationFrame(update);
    } else {
        scorediv.innerHTML = score;
        accudiv.innerHTML = Math.floor(((score == 0 ? 1 : score) * 100) / ((score == 0 ? 1 : score) + miss)) + "%";
        app.style.filter = "blur(7px)";
        keyboard.style.filter = "blur(7px)";
        app2.style.display = "block";
    }
}

function getRandomCommonWord() {
    const randomIndex = Math.floor(Math.random() * commonWords.length);
    return commonWords[randomIndex];
  }
  
function getRandomRarerWord() {
const randomIndex = Math.floor(Math.random() * rarerWords.length);
return rarerWords[randomIndex];
}
let currentWord = getRandomCommonWord(); 
let letIdx = 0;
function getLetter() {
    console.log(currentWord);
    console.log("Length", currentWord.length)
    console.log(letIdx);
    let letter = currentWord[letIdx++];
    if (letIdx == currentWord.length) {
        Math.floor(Math.random() * 5) != 1 ? currentWord = getRandomCommonWord() : currentWord = getRandomRarerWord();
        letIdx = 0;
    }
    return letter;
    
}

function createtile() {
    let tile = document.createElement("div");
    tile.className = "tile";
    let n = Math.floor(Math.random() * 5);
    while (n == last) {
        n = Math.floor(Math.random() * 5);
    }
    last = n;

    // GetLetter
    let letter;
    if (gamemode[2].checked) {
        letter = getLetter();
    } 
    else {
        letter = letters[Math.floor(Math.random() * 25)];
    }
    next.push(letter);


    tile.innerHTML = '<div class="letter">' + letter + '</div>';

    if (position.length > 0) {
        position.push(position[position.length - 1] - 20);
    } else {
        position.push(-30);
    }
    tile.style.top = position[position.length - 1] + "%";
    tile.style.left = 20 * n + "%";
    app.appendChild(tile);
}

function replay() {
    let tiles = document.querySelectorAll(".tile");
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].remove();
    }
    position = [];
    next = [];
    score = 0;
    miss = 0;
    f = 1;
    if (gamemode[0].checked) {
        speed = 20;
    }
    if (gamemode[1].checked) {
        speed = 60;
    }
    if (gamemode[2].checked) {
        speed = 120;
    }
    app.style.filter = "blur(0px)";
    keyboard.style.filter = "blur(0px)";
    app2.style.display = "none";
    appstart.style.display = "none";
    previousTime = performance.now();
    
    createtile();
    requestAnimationFrame(update);
}

window.addEventListener(
    "keydown",
    (event) => {
        let kp = event.key.toLowerCase();
        presskey(kp);
    }
);

function presskey(kp) {
    if (f == 1) {
        if (kp == next[0]) {
            let tiles = document.querySelectorAll(".tile");
            tiles[0].remove();
            position.splice(0, 1);
            next.splice(0, 1);
            createtile();
            score++;
            if (gamemode[0].checked) {
                speed *= 1;
            }
            if (gamemode[1].checked) {
                speed *= 1.01;
            }
            if (gamemode[2].checked) {
                speed *= 1.001;
            }
            playSound();
        } else {
            miss++;
        }
    } else {
        if (kp == ' ') {
            replay();
        }
    }
}

function opensettings() {
    appstart.style.display = "flex";
}

function playSound() {
    if (!isSoundMuted) {
        arr = notes[(score - 1) % tones.length];
        var buf = new Float32Array(arr.length);
        for (var i = 0; i < arr.length; i++) buf[i] = arr[i]
        var buffer = context.createBuffer(1, buf.length, context.sampleRate)
        buffer.copyToChannel(buf, 0)
        var source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);
        source.start(0);
    }
}

function sineWaveAt(sampleNumber, tone) {
    var sampleFreq = context.sampleRate / tone
    return Math.sin(sampleNumber / (sampleFreq / (Math.PI * 2)))
}

function linearEnvelope(endOfFadeIn, startOfFadeOut, samples) {
    var envelope = new Array(samples).fill(1);
    for (var i = 0; i < samples; i++)
    {
        if (i < endOfFadeIn)
            envelope[i] = i;
        else if (i < startOfFadeOut) 
            envelope[i] = envelope[i-1];
        else 
            envelope[i] = envelope[i-1]-1;   
    }
    return envelope
}

window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

var notes = [];
var volume = 0.5;
var seconds = 0.3;
var tones = [392.00, 311.13, 293.66, 261.63, 261.63, 293.66, 311.13, 261.63, 311.13, 392.00, 415.30, 392.00, 349.23, 349.23, 293.66, 261.63, 246.94, 196.00, 246.94, 293.66, 246.94, 293.66, 349.23, 392.00, 415.30, 369.99, 392.00];

// Load in notes 
for (var t = 0; t < tones.length; t++) {
    var arr = [];
    var samples = context.sampleRate * seconds;
    endOfFadeIn = samples / 8;
    startOfFadeOut = samples * 7 / 8;

    let envelope = linearEnvelope(endOfFadeIn, startOfFadeOut, samples);
    envelopeMax = Math.max.apply(null, envelope)

    for (var i = 0; i < samples; i++) {
        arr[i] = sineWaveAt(i, tones[t]) * envelope[i]/envelopeMax/2;
    }
    notes.push(arr);
}
