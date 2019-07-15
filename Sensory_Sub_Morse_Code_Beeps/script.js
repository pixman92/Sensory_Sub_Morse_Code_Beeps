var soundID = "single"

function loadSound () {
    createjs.Sound.registerSound("morseCode/short.ogg", soundID);
}

function playSound () {
    createjs.Sound.play(soundID);
}