/*A Yale University study once found that the aroma of Crayola crayons is one of the most recognizable scents for adults. It ranked 18th just ahead of coffee and peanut butter.
The largest crayon in the world, Big Blue, how much does it weigh? 1500 pounds, is 15 feet long and 16 inches in diameter.  It was made from 123,000 old blue crayons that were gathered from kids around the country.  It would color an entire football field.
How many crayons does Crayola make a year, enough to circle the world six times? 3 billion crayons  
How many crayons does the Crayola's Easton manufacturing plant produce per minute?  650 crayons 
What was the realtionship between Binney and Smith? cousins.
How many crayons The average child wears down by their 10th birthday? 720
What color was the 100 billionth crayon made in 1996? blue ribbon
when did Crayola changed the name of flesh to peach? 1962 
*/
var questionsAnswers = [
    {
        askQuestion: "Who came up with the name Crayola?",
        choice1:  "Binney",
        choice2:  "Binney's wife",
        choice3:  "Smith",
        choice4:  "Smith's wife",
        answer:   "Binney's wife"
    },
    {
        askQuestion: "How much was the first crayon sold for?",
        choice1:  "1 cent",
        choice2:  "1 dime",
        choice3:  "1 nickel",
        choice4:  "3 cents",
        answer:   "1 nickel"
    },
    {
        askQuestion: "Where was the first crayola company?",
        choice1:  "Easton, PA",
        choice2:  "Bethlehem, PA",
        choice3:  "Philadelphia, PA",
        choice4:  "Hershey, PA",
        answer:   "Easton, PA"
    },
        {
        askQuestion: "When was the first crayon made?",
        choice1:  "1900",
        choice2:  "1903",
        choice3:  "1905",
        choice4:  "1907",
        answer:   "1903"
    },
        {
        askQuestion: "How many colors do crayons come in?",
        choice1:  "72",
        choice2:  "86",
        choice3:  "120",
        choice4:  "96",
        answer:   "120"
    },
        {
        askQuestion: "Which count box of crayons is the best seller?",
        choice1:  "48",
        choice2:  "36",
        choice3:  "12",
        choice4:  "24",
        answer:   "24"
    }, 
        {
        askQuestion: "What is the favorite crayon color in the US?",
        choice1:  "yellow",
        choice2:  "green",
        choice3:  "blue",
        choice4:  "red",
        answer:   "blue"
    }]
    var mainContent = $("<section>").attr({ // creating the html form dynamically for the answers
        "class":"answers",
        "id":"answers"
    });



$(document).ready(function(){
    

    for (var y = 0; y < questionsAnswers.length; y++) {
        printQuestions();

 //    on key up set timer to 1 minute       
 //       var button = $("<button>").attr("class", "btn btn-default").html("Submit");
 //      mainContent.append(button);
    }
 //   var val = $('input[name=optradio]:checked').val();
 //   console.log(val);
    function printQuestions() { 
        var choices = [];                                   //this array will contain all the data
        questionsAnswers.forEach(function(question, index){
            choices.push(question);                         // pushing the data to the choices array
        });

        var arrChoices = [choices[y].choice1, choices[y].choice2, choices[y].choice3, choices[y].choice4];
        console.log(choices[y]);

        var correctAnswer = choices[y].answer;
        console.log(correctAnswer);
        
        var quizQuestion = $("<p>").html(choices[y].askQuestion);
        mainContent.append(quizQuestion); //appending the question to the main content area

        printAnswers(arrChoices, correctAnswer); //call the printANswers function to select and print the answers
 
    }  // end function printQuestions

    function printAnswers(arrChoices, correctAnswer) { //looping through the answer choices array and creating
                                      // the input labels for the answers dynamically
        for(var i = 0; i < 4; i++){
            var element = $("<input>").attr({
                "type":"radio",
                "class":"radio-inline",
                "name":"optradio",
                "value":arrChoices[i]
            });

        if (arrChoices[i] == correctAnswer) {  //setting the value of the label to right or wrong answer
            var label = $("<label>").attr({
                "id": "answer' + i",
                "value": "rightAnswer"
               }).html(arrChoices[i]);
 
        } else {
            var label = $("<label>").attr({
                "id": "answer' + i",
                "value": "wrongAnswer"
              }).html(arrChoices[i]); 
        }
        mainContent.append( element, label); // appending the input buttons and labels to the main content area
        }
    }

    $("#quizForm").append(mainContent); //appending the main content area to the html window after loopin through array

    var button = $("<button>").attr("class", "btn btn-default").html("Submit Answers");
    var breakBr = $("<br>");
    mainContent.append(breakBr, button);
   

});  //end document on load

