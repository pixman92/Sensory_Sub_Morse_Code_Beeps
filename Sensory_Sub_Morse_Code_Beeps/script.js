//=============================================
function playSound(letter){
    letter=letter.toUpperCase();
    if(letter=="A"){
        playA();
    }
    if(letter=="B"){
        playB();
    }
    if(letter=="C"){
        playC();
    }
    if(letter=="D"){
        playD();
    }
    if(letter=="E"){
        playE();
    }
    if(letter=="F"){
        playF();
    }
    if(letter=="G"){
        playG();
    }
    if(letter=="H"){
        playH();
    }
    if(letter=="I"){
        playI();
    }
    if(letter=="J"){
        playJ();
    }
    if(letter=="K"){
        playK();
    }
    if(letter=="L"){
        playL();
    }
    if(letter=="M"){
        playM();
    }
    if(letter=="N"){
        playN();
    }
    if(letter=="O"){
        playO();
    }
    if(letter=="P"){
        playP();
    }
    if(letter=="Q"){
        playQ();
    }
    if(letter=="R"){
        playR();
    }
    if(letter=="S"){
        playS();
    }
    if(letter=="T"){
        playT();
    }
    if(letter=="U"){
        playU();
    }
    if(letter=="V"){
        playV();
    }
    if(letter=="W"){
        playW();
    }
    if(letter=="X"){
        playX();
    }
    if(letter=="Y"){
        playY();
    }
    if(letter=="Z"){
        playZ();
    }

}



//=============================================

// function makeWord(letter){
//     console.log('function that takes a letter and returns morse code', );
//     var pos = abc.indexOf(letter.toUpperCase());


//     return morsecode[pos];
// }


// var code = "";
// async function makeBeepBasedOnLetter(letter){
//     console.log('changes box based on 1 letter of morse code');
//     // code = makeWord(letter);
    
//     for(var i in code){
//         playSound(code[i]);
    
//     }
// }


//================================================
//function for guessing words
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
var splited = "";
function splitString(stringMe){
    splited = stringMe.split('');

    console.log(splited);

    // var time = 1400; i = 0;

    for(var i in splited){
    // while(i<splited.length){
        // makeBeepBasedOnLetter(splited[i]);
        console.log("i", i);
        // time+=1850;
        // wait(time).then(()=>{
            playLetter(splited[i]);
        // });
        // i++;
    }
    // return splited;   
}

function makingSoundsFromLetters(){
    createWords();
    splitString(wordsArray[correctPos]);

    console.log("correct:", wordsArray[correctPos]);

}

//=============================================
function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}