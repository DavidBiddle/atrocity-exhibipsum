document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('lorem-form').addEventListener('submit', function(e){
    //on form submit, generate the text
    e.preventDefault();
    var output = displayLorem(wordArray);
    document.getElementById('output-zone').innerHTML = output;
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

function displayLorem(wordArray){
  event.preventDefault();
  wordArray = expandArray(wordArray);
  wordArray = randomiseWords(wordArray);
  lorem = "";
  for(i=0;i<900;i++){
    lorem = lorem + " " + wordArray[i];
  }
  return lorem;
}