/*i could also make each answer add to certain characteristics
ie compassion, psychotic, brave 
however that would likely lead to the problem that i had with having one answer only +1'ing one answer */


var userSelections = [];

var currentQuestion = 0;
//var characterList = [{
//  robert : "Robert Baratheon",
//  aemon : "Maester Aemon",
//  sam : "Samwell Tarly",
//  cersei : "Cersei Lannister",
//  joffrey : "Joffrey Baratheon",
//  melisandre : "Melisandre",
//  reek : "Theon Greyjoy",
//  ramsay : "Ramsay Bolton",
//  hodor : "Hodor",
//  gilly : "Gilly",
//  pycelle : "Grand Maseter Pycelle",
//}];

var characterList = [
  ["robert"],
  ["aemon"],
  ["sam"],
  ["cersei"],
  ["joffrey"],
  ["melisandre"],
  ["reek"],
  ["ramsay"],
  ["hodor"],
  ["gilly"],
  ["pycelle"]
];

var tally= [
  
];

var answerBank = document.getElementById("answer-bank");

var questions = [
  ["You are a lord. You are sentencing a low class boy that broke your son's arm in a fight. What do you do?"],
  ["What do you look for in a lover?"],
  ["What do you like to do?"],
  ["Would you fuck a robot?"],
  ["Would you rather wear a wig... or a wire?"]
];

//pick things that interest you (wolves, killing, sailing, drinking, poison, reading/books, swords)
  
var answers = [
   {
    //broken arm
    "Have the boy's arm broken. Eye for an eye." : "robert",
    "Do nothing." : "aemon",
    "Kill the boy. You don't want your people to think you are weak." : "ramsay",
    "Break both the boy's arms. Crimes against a high class person requires a stronger punishment" : "pycelle",
    "Have the boy assist the maester with some unpleasant duties for a week." : "sam",
    "Shoot the boy in the dick" : "joffrey"
  },
  {
    //spouse
    "Someone that can help you achieve your goal": "melisandre",
    "Bad Poosy": "reek",
    "Good girl" : "sam",
    "Great big tits you could bury your face in" : "robert",
    "Someone that can be discrete" : "sam",
    "Famous Cock": "reek"
  },
  {
    //free time
    "Boss people around" : "cersei",
    "Drink" : "robert",
    "Sex" : "pycelle",
    "Kill People" : "ramsay",
    "Plot" : "cersei",
    "Just hang out" : "aemon", 
    "Eat" : "robert", 
    "Read" : "sam",
  }, 
  {
    "If it had tits" : "robert",
    "What's a robot?" : "pycelle",
    "No" : "joffrey",
    "Yes" : "sam"
  },
  {
    "Wig" : "aemon",
    "Wire" : "hodor"
  }  
];
    
function submitQuiz() {  
  //resets the array so that it doesn't continue adding to it if submit is pressed multiple times
  currentQuestion = 0;
  for(var i=0; i < questions.length; i++) {
    userSelections.push($("input[type=radio]:checked")[i].id);
  }
  tallyAnswers(userSelections);  
}

function tallyAnswers(userSelections) {
  //for each answer, go through the character list and see if it matches anything
  //i copy pasted this shit. 
  if(userSelections.length == 0) {
    return null;
  }
  var tally = {};
  var maxTally = userSelections[0], maxCount = 1;
  for(var i = 0; i < userSelections.length; i++) {
    var selection = userSelections[i];
    if(tally[selection] == null) {
        tally[selection] = 1;
    } else {
      tally[selection]++;
    }
    if (tally[selection] > maxCount) {
      maxTally = selection;
      maxCount = tally[selection];
    }
    
  }
    document.getElementById('answer-bank').append(maxTally);

  return maxTally;
  
  
}
 

function askQuestion() {
  var qDiv = document.createElement('div');
  answerBank.append(qDiv);
  var q = document.createTextNode(questions[currentQuestion]);
    qDiv.appendChild(q);
  for(var i = 0; i < questions.length; i ++) {
    //#answer-bank adds a div with a question from the array 
    
//    qDiv.appendChild(questions);
    console.log(questions[i])
    
//    $("#answer-bank").append("<div id='question"+i+"' class='question'>" + questions[i] + "</div>");
    
    for (var j = 0; j < Object.keys(answers[currentQuestion]).length; j++) {
    
      //this is for populating using object
      $("#answer-bank").append("<li class='answer"+i+"'>" + 
                               "<input type='radio' id='" +Object.values(answers[i])[j]+ "' name='selection"+i+"'>" +Object.keys(answers[i])[j]+
                               "</li>");
      
      $('input[name=selection0]:first-child').attr("checked", "checked");
    }
  }
}


    
$(document).ready(function() {
  
  askQuestion();
  
 
});

var currentSlide = currentQuestion;
function nextSlide() {
    if(currentQuestion >= questions.length-1) { //if it's the last question the submit button shows up
      $("#submit").css("display", "block");
      $("#next").css("display", "none");
    }
  
  $(".answer" + currentSlide +"").css("display","none");
  $("#question" + currentSlide +"").css("display","none");

  currentSlide++;
  currentQuestion++;
  
  $(".answer" + currentSlide +"").css("display","block");
  $("#question" + currentSlide +"").css("display","block");
  $("#question" + currentSlide +"").css("checked","checked");
//  console.log(currentSlide);
//  console.log(currentQuestion);
}

$("#submit").css("display", "none");

