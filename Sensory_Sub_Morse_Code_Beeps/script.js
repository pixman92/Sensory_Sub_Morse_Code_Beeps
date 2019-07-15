// file to play sounds

function loadSounds () {
    createjs.Sound.registerSound("morseCode/short.ogg", "short");
    createjs.Sound.registerSound("morseCode/long.ogg", "long");

}

function playShort () {
    createjs.Sound.play("short");
}

function playLong() {
    createjs.Sound.play("long");
}