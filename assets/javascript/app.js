/*A Yale University study once found that the aroma of Crayola crayons is one of the most recognizable scents for adults. It ranked 18th just ahead of coffee and peanut butter.

The largest crayon in the world, Big Blue, how much does it weigh? 1500 pounds, is 15 feet long and 16 inches in diameter.  It was made from 123,000 old blue crayons that were gathered from kids around the country.  It would color an entire football field.

How many crayons does Crayola make a year, enough to circle the world six times? 3 billion crayons  

How many crayons does the Crayola's Easton manufacturing plant produce per minute?  650 crayons 

What was the realtionship between Binney and Smith? cousins.

How many crayons The average child wears down by their 10th birthday? 720
What color was the 100 billionth crayon made in 1996? blue ribbon

when did Crayola changed the name of flesh to peach? 1962 

*/

$(document).ready(function(){
	printQuestions();

});

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
	}

]




function printQuestions() {
	questions.forEach(function(question, index){
		console.log("Question " + question.askQuestion);
		console.log("index " + index);
		console.log("choice 1: " + question.choice1);
		console.log("choice 2: " + question.choice2);
		console.log("choice 3: " + question.choice3);
		console.log("choice 4: " + question.choice4);
		console.log("answer: " + question.answer);
		$("#questions").append(question.askQuestion);
		$("#answer1").html(question.choice1);
		console.log("choice 1 after printing question: " + question.choice1);

		$("#answer2").html(question.choice2);
		$("#answer3").html(question.choice3);
		$("#answer4").html(question.choice4);

		if ((question.choice1) == (question.answer)){
			console.log(question.choice1, question.answer);
//			$("#answer1.value") = "correct";  set the html value to correct
		}
		// if this works do all the others
	});
}


















