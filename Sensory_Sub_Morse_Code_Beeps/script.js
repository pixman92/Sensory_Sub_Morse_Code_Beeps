
//=============================================
// morse code break down

var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var morsecode =[
    '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
    '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
    '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..'
  ];
//=============================================

function makeWord(letter){
    console.log('function that takes a letter and returns morse code', );
    var pos = abc.indexOf(letter.toUpperCase());


    return morsecode[pos];
}


var code = "";
async function makeBeepBasedOnLetter(letter){
    console.log('changes box based on 1 letter of morse code');
    code = makeWord(letter);
    
    for(var i in code){
        if(code[i]=='.'){
            playShort();
        }
        if(code[i]=='-'){
            playLong();
        }
    
    }
}


//================================================
//function for guessing words
//NEXT? - work on 3 words and guessing and choosing correctly
function getWord(){
    return word = words[Math.floor(Math.random() * words.length)];
}

var wordsArray = []; var correctPos = -1;
function createWords(){
    wordsArray=[];
    for(var i=0; i<2; i++){
        wordsArray.push(getWord());
    }

    correctPos = Math.floor(Math.random()*wordsArray.length);
    console.log('correctPos', correctPos);

    return wordsArray;
}
//=============================================
//function for taking in a string
// this is the BIG kahuna,
// main function for making flashing colors
function splitString(stringMe){
    var splited = stringMe.split('');

    for(var i in splited){
        makeBeepBasedOnLetter(splited[i]);
    }
    
}