/*A Yale University study once found that the aroma of Crayola crayons is one of the most recognizable scents for adults. It ranked 18th just ahead of coffee and peanut butter.
The largest crayon in the world, Big Blue, how much does it weigh? 1500 pounds, is 15 feet long and 16 inches in diameter.  It was made from 123,000 old blue crayons that were gathered from kids around the country.  It would color an entire football field.
How many crayons does Crayola make a year, enough to circle the world six times? 3 billion crayons  
How many crayons does the Crayola's Easton manufacturing plant produce per minute?  650 crayons 
What was the realtionship between Binney and Smith? cousins.
How many crayons The average child wears down by their 10th birthday? 720
What color was the 100 billionth crayon made in 1996? blue ribbon
when did Crayola changed the name of flesh to peach? 1962 
*/
var questions = [
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
		choice3:  "Philadelphoa, PA",
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
	
	printQuestions();


	function printQuestions() { //printing the question on the page and calling the function to print the answers
		var choices = [];
		questions.forEach(function(question, index){
			choices.push(question);
		});

		var arr = [choices[0].choice1, choices[0].choice2, choices[0].choice3, choices[0].choice4];

		console.log(choices[0]);
		createInput(arr);
		
	}  // end function printQuestions


	function createInput(arr) { //looping through the questions array and creating
									  // the input labels for the answers dynamically
		for(var i = 0; i < 4; i++){
			var element = $("<input>").attr({
				"type":"radio",
				"class":"radio-inline",
				"name":"optradio",
				"value":arr[i]
			});

			var label = $("<label>").attr('id', 'answer' + i).html(arr[i]);

			var breakBr = $("<br>"); 

			mainContent.append(element, label, breakBr);
		}
	}


	$("#quizForm").append(mainContent);


//$("#button").on('click', submitAnswers);
//create a function that will check for the correct answers after
//the user clicks the button or if time ran out

});  //end document on load