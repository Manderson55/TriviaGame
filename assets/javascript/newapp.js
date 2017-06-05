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
        "class":"questionAnswers",
        "id":"questionAnswers"
    });

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unansweredQuestions = 0;


$(document).ready(function(){
  
    $("#instructions").html("<h4>" + "You have 20 seconds to finish this quiz. If you are done before the time is up, click the 'Submit Answers' button and the timer will stop and your questions will be submitted for verification. Good Luck!" + "</h4>" );
    var startButton = $("<button>").attr({"class": "btn btn-warning", //button to start the game and the timer
                                           "id" : "startClock"
                                        }).html("Start Playing!");
    $("#startButton").append(startButton);

    var submitAnswersButton = $("<button>").attr({"class": "btn btn-warning", //button to stop the game and the timer
                                   "id" : "submitAnswers"
                                }).html("Submit Answers");


    $("#startClock").click(function(){
        console.log("game started!"); 
 
        printQuiz();
        number = 21;
        counter = setInterval(timer, 1000);
        function timer(){
            number--;
            $("#timer").html("<h2>" + "Time Remaining "+  number + " seconds" + "</h2>" );
            if (number === 0){
                alert("Time is Up!");
                console.log("time is up");
                stopTimer(); // calls the stop function
            } 
        }
    }); //end startCLock


    $("#submitAnswers").click(function(){
        console.log("clicked submit answers button");
        stopTimer();
        checkAnswers();
        printResults();
     }); //end 


    function stopTimer(){
        console.log("inside stopTimer function");
        clearInterval(counter);
        checkAnswers();
        printResults();
  
    }
   

    function printQuiz() {
        for (var y = 0; y < questionsAnswers.length; y++) { //call the function to print the questions
            printQuestions(y);
        }
       
        $("#quizForm").append(mainContent); //appending the main content area to the html window after loopin through array

 
        mainContent.append(submitAnswersButton);

    } //end printQuiz
    function printQuestions(y) { 
        var choices = [];                                   //this array will contain all the data
        questionsAnswers.forEach(function(question, index){
            choices.push(question);                         // pushing the data to the choices array
        });
        var arrChoices = [choices[y].choice1, choices[y].choice2, choices[y].choice3, choices[y].choice4];
        console.log(choices[y]);
        var correctAnswers = []; 
        correctAnswers.push(choices[y].answer);
        console.log(correctAnswers);       

        var quizQuestion = $("<p>").html(choices[y].askQuestion);
        mainContent.append(quizQuestion); //appending the question to the main content area
        printAnswers(arrChoices, y); //call the printAnswers function to select and print the answers
    }  // end function printQuestions

    function printAnswers(arrChoices, y) { //looping through the answer choices array and creating

       for(var i = 0; i < 4; i++){
            var inputElement = $("<input>").attr({
                "type":"radio",
                "class":"radio-inline",
                "name":"optradio"+ y,
                "id" : "radio" + y + i,
                "value":arrChoices[i]
                 });

            var inputLabel = $("<label>").attr({
                   "id": "answer" + i
                }).html(arrChoices[i]);
        
            mainContent.append(inputElement, inputLabel); // appending the input buttons and labels to the main content area
        }
     } //end printAnswers

    function checkAnswers(){
//I want to go through each question/answer section and if the user 
// selected somenthing , check if the value is correct
        console.log("inside checkAnswers");
        for (var z=0; z < questionsAnswers.length; z++) { 
            console.log("Question # " + z );
            console.log("looping through the questions"); 

        if (!($("input[id = 'radio + z + 1']:checked")) 
         && !($("input[id = 'radio + z + 2']:checked"))
          && !($("input[id = 'radio + z + 3']:checked"))
           && !($("input[id = 'radio + z + 4']:checked"))){

                console.log("user didn't select an answer!")
                unansweredQuestions++;
                console.log("Unanswered Questions = " + unansweredQuestions);

        } else if 
                ($("input[id = 'radio + z + 1']:checked")) {               
                        if ($("input[value]") === correctAnswers[z]) {
                            correctAnswers++;
                            console.log("correct answers  " + correctAnswers);
                        }else {
                             wrongAnswers++
                             console.log("wrong answers   " + wrongAnswers);
                        }              
                }                     

        }  

    }//end check asnwers

    function printResults(){ 
 
       console.log("game over!");
       (mainContent).hide;

    $("#quizForm").html("<h3>" + "Correct Answers: "+  correctAnswers + "</h3>" +
     "<h3>" + "Wrong Answers: "+  wrongAnswers + "</h3>" +
     "<h3>" + "Unanswered Questions: " +  unansweredQuestions + "</h3>");

 
    }


});  //end document on load
