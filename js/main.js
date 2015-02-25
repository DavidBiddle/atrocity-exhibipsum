document.addEventListener('DOMContentLoaded', function(){
  ajaxCall();
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


function outputLorem(wordArray){
  wordArray = expandArray(wordArray);
  lorem = "";
  totalParagraphs = 3;
  for(i=0;i<totalParagraphs;i++){
    paragraph = "";
    sentencesPerParagraph =  randPlusMinus(5,2);
    for(j=0;j<sentencesPerParagraph;j++){
      sentence = "";
      sentenceLength = randPlusMinus(15,8);
      for(k=0;k<sentenceLength;k++){
        word = randomWord(wordArray);
        sentence = sentence + word + " ";
      }
      sentence = formatSentence(sentence);
      paragraph = paragraph + sentence;
    }
    paragraph = formatParagraph(paragraph);
    lorem = lorem + paragraph;
  }
  document.getElementById('output-zone').innerHTML = (lorem);
}

function ajaxCall(callback){
  //retrieves data file via AJAX and then calls output function
  var xmlhttp;
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function() {
    wordArray = JSON.parse(xmlhttp.responseText);
    document.getElementById('lorem-form').addEventListener('submit', function(e){
      //on form submit, generate the text
      e.preventDefault();
      outputLorem(wordArray);
    });
  }
  xmlhttp.open("GET", "data/filtered.json", true);
  xmlhttp.send();
}

function formatSentence(sentence){
  //capitalises first letter and adds full stop to end of sentence
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1,sentence.length - 1) + ". ";
  return sentence;
}

function formatParagraph(paragraph){
  paragraph = "<p>" + paragraph + "</p>";
  return paragraph;
}

function randomWord(array){
  //returns random word from an array
  word = array[Math.floor(Math.random() * array.length)];
  return word;
}

function randPlusMinus(centre,margin){
  //returns a number baseline plus or minus margin
  return Math.floor(Math.random() * margin * 2) + centre - margin;
}