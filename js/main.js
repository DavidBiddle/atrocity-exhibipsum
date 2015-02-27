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


function outputLorem(wordArray,paragraphs,sentenceMin,sentenceMax,wordMin,wordMax){
  wordArray = expandArray(wordArray);
  lorem = "";
  totalParagraphs = paragraphs;
  for(i=0;i<totalParagraphs;i++){
    paragraph = "";
    sentencesPerParagraph =  randRange(sentenceMin,sentenceMax);
    for(j=0;j<sentencesPerParagraph;j++){
      sentence = "";
      sentenceLength = randRange(wordMin,wordMax);
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
      var paragraphs = parseInt(this.elements['paragraphs'].value);
      var sentenceMin = parseInt(this.elements['sentenceMin'].value);
      var sentenceMax = parseInt(this.elements['sentenceMax'].value);
      var wordMin = parseInt(this.elements['wordMin'].value);
      var wordMax = parseInt(this.elements['wordMax'].value);
      outputLorem(wordArray,paragraphs,sentenceMin,sentenceMax,wordMin,wordMax);
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

function randRange(min,max){
  //returns an integer in a range
  return Math.floor(min + Math.random() * (max - min));
}