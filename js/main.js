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


function outputLorem(wordArray){
  wordArray = expandArray(wordArray);
  lorem = "";
  totalParagraphs = 3;
  for(i=0;i<totalParagraphs;i++){
    paragraph = "";
    sentencesPerParagraph =  Math.floor(Math.random() * 4) + 3;
    for(j=0;j<sentencesPerParagraph;j++){
      sentence = "";
      sentenceLength = Math.floor(Math.random() * 16) + 7;
      for(k=0;k<sentenceLength;k++){
        word = wordArray[Math.floor(Math.random() * wordArray.length)];
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
  var xmlhttp;
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function() {
    wordArray = JSON.parse(xmlhttp.responseText);
    outputLorem(wordArray);
  }
  xmlhttp.open("GET", "data/filtered.json", true);
  xmlhttp.send();
}

function formatSentence(sentence){
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1,sentence.length - 1) + ". ";
  return sentence;
}
function formatParagraph(paragraph){
  paragraph = "<p>" + paragraph + "</p>";
  return paragraph;
}