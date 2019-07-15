
//=============================================
var sound;
function makeSound(letter){
    sound = new Howl({
        src: ["beepFiles/"+letter+"_morse_code.ogg"],
        onend: word(splited),
      });

}

function playThis(){
    sound.play();
}

function stopThis(){
    sound.stop();
}


//=============================================
// var splited;

function word(splited){
    // splited = meString.split('');
    
    console.log(splited);
    for(var i in splited){
        console.log("i", i);
        

        console.log("before", splited);
        splited.shift();
        console.log("after", splited);

        
        makeSound(splited[i]);
        // sound.onend(playThis);
        stopThis();
        playThis();
    }
}