document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('lorem-form').addEventListener('submit', function(e){
    //on form submit, generate the text
    e.preventDefault();
    ajaxCall();
  });
});

function expandArray(wordArray){
//expands a weighted array
  expandedArray = [];

  for(i=0;i<wordArray.length;i++){
    for(j=0;j<wordArray[i].weight;j++){
      expandedArray.push(wordArray[i].word);
    }
  }
  return expandedArray;
}

function randomiseWords(wordArray){
//randomizes the contents of an array
  var i = wordArray.length, j, tempi, tempj;
  if ( i == 0 ) return false;
  while ( --i ) {
    j = Math.floor( Math.random() * ( i + 1 ) );
    tempi = wordArray[i];
    tempj = wordArray[j];
    wordArray[i] = tempj;
    wordArray[j] = tempi;
  }
  return wordArray;
}

function outputLorem(wordArray){
  event.preventDefault();
  wordArray = expandArray(wordArray);
  wordArray = randomiseWords(wordArray);
  lorem = "";
  for(i=0;i<900;i++){
    lorem = lorem + " " + wordArray[i];
  }
  document.getElementById('output-zone').innerHTML = (lorem);
}

function ajaxCall(callback){
  var xmlhttp;
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function() {
    wordArray = JSON.parse(xmlhttp.responseText);
    outputLorem(wordArray);
  }
  xmlhttp.open("GET", "data/filtered.json", true);
  xmlhttp.send();
}

