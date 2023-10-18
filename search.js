const lyrics = 'Dekha na dile bondhu kotha koiyo naa';
//----------------------------
const searchString = 'bonDhu';   
//----------------------------
const lyricsLowercase = lyrics.toLowerCase()
const searchStringLower = searchString.toLowerCase();
//----------------------------
const doesExits = lyricsLowercase.includes(searchStringLower);
// console.log(doesExits);

//-----------------------------------------------------------
// index off 

console.log('index', lyrics.indexOf('bondhu')); // find index

if(lyrics.indexOf('bondhu') !== -1){
    console.log('Exits inside the string');
}
else{
    console.log('Can not find the string');
}

//--------------------------------------------------------------
// starts with  
console.log(lyrics.startsWith('Dekha'));

// ends with
const fileName = 'mybiodata.pdf';
const otherfile = 'mypic.png';

fileName.endsWith('.pdf')