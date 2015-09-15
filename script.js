// Question number#1

function QuestionOne(){		
		var a = [1,2,3,4,5,6,7,8,9,10];
		document.write(a+"<br>");
		var n = prompt("Enter the  number count of items to be removed from the end of array: ");
		lastpos(a,n);
}
function lastpos(a,n){		
		var i=0;
		var reverseArray = a.reverse();
		document.write("The items removed are ");
		for(i=0;i<n;i++){
			if(i==n-1){
				document.write(reverseArray[i]+".");	
			}
			else{
				document.write(reverseArray[i]+", ");	
			}
		}				
}

//Question number#2

function QuestionTwo(){		
		var about=["Nepal","is","a","independent","country"];
		var result = about.join();
		document.write("Resultant Joint string is <b>"+result+"</b>");		
	}
	
//Question 3

function QuestionThree(){		
		var array = [1,6,2,3,4,5,5];
		document.write("<h3> Element in array are: "+array+"</h3>");
		var n = Number(prompt("Enter the element to remove:"));
		
		removing_element(array,n);
	}
	function removing_element(array,n){		
		var index = array.indexOf(n);
		if(index > -1){
			array.splice(index,1);	
		}
		document.write("<h3>Final  resultant elements in array are: "+array+"</h3");
	}
	
	
//Questionnumber#4

function QuestionFour(){
		var emailaddress = prompt("Enter your email: ");
		var length = emailaddress.length;
		var i = 0;
		var j = 0;
		document.write("<br>Your protected email address is <h3>"+emailaddress[0]+emailaddress[1]+emailaddress[2]+emailaddress[3]);
		for(i = 5; i<length;i++){
			if(emailaddress[i] === '@'){
				for(j=i;j<length;j++){
					document.write(emailaddress[j]);
				}
				break;	
			}
			document.write("*");	
		}		
		
	}
	
//Questionnumber#5
function QuestionFive(){
		var repeatString = prompt("Enter any string: ");
		document.write("The string you entered is <h3>"+repeatString+"</h3><br><br>");
		var repeatTime = prompt("Enter number of repeatition: ");
		repeat(repeatString,repeatTime);
	}
	
	function repeat(repeatString,repeatTime){
		document.write("So the string you required is <h3>");
		var i = 0;
		for(i = 0; i<repeatTime;i++){
			document.write(repeatString);
		}
		document.write("</h3>");
	}
	
//Question 6
function QuestionSix(){
		var array = "My country name is ";
		document.write("Given string is <h3>"+array+"</h3>"); 		
		var Stringinsert = prompt("Enter  string to add to the given string: ");
		var Indexinsert = prompt("Enter index at which the string to gets added: ");
		insertingstring(array,Stringinsert,Indexinsert);
	}
	
	function insertingstring(array,Stringinsert,Indexinsert){
		Stringinsert =String insert+" ";
		document.write("<br>Final string is <h3>"+array.substring(0,Indexinsert-1)+Stringinsert+array.substring(Indexinsert-1)+"</h3>");
	}
	
//Question 7
function QuestionSeven(){		
		var input = prompt("Enter date:(mm/dd/yyyy)");
		var date = new Date(input);
		var month = date.getMonth()+1;
		document.write("Month number: "+month+"<br>");
		month_name(month);
	}

	function month_name(month){
		switch(month){
			case 1:
				document.write("Month is January.");
				break;
			case 2:
				document.write("Month is February.");
				break;
			case 3:
				document.write("Month is March.");
				break;
			case 4:
				document.write("Month is April.");
				break;
			case 5:
				document.write("Month is May.");
				break;
			case 6:
				document.write("Month is June");
				break;
			case 7:
				document.write("Month is July.");
				break;
			case 8:
				document.write("Month is August.");
				break;
			case 9:
				document.write("Month is September.");
				break;
			case 10:
				document.write("Month is October.");
				break;
			case 11:
				document.write("Month is November.");
				break;
			case 12:
				document.write("Month is December.");
				break;
		}
		
	}
	
//Question 8
function QuestionEight(){		
		var input = prompt("Enter date:(mm/dd/yyyy)");
		var date = new Date(input);
		document.write("The day is <h3>"+date+"</h3><br>");
		yesterday(date);
	}

	function yesterday(date){
		date.setDate(date.getDate()-1);
		document.write("The day before was <h3>"+date+"</h3>");
	}


//Question 9
function QuestionNine(){
		document.write("Alphanumeric Testing<br>");		
		var input = prompt("Enter a character: ");
		check_alpha(input[0]);
	}

	function check_alpha(input){
		if((input>='a' && input<='z') ||(input>='A' && input<='Z') ||(input>='0' && input<='9')){
			document.write("The entered input character <b>is an</b> alphanumeric character.");
		}
		else{
			document.write("The entered input character <b>is not an</b> alphanumeric character.");
		}
	}


//Question 10
function QuestionTen(){	
		document.write("Uppercase Testing<br>");
		var input = prompt("Enter a character: ");
		check(input[0]);
	}

	function check(input){
		if(input>='A' && input<='Z'){
			document.write("The entered input character <b>is an</b> uppercase character.");
		}
		else{
			document.write("The entered input character <b>is not an</b> uppercase character.");
		}
	}


//Question 11
function QuestionEleven(){		
		var input = prompt("Enter a string: ");
		validate(input);
	}

	function validate(input){
		var i = 0;
		var counter = 0;
		for(i=0;i<input.length;i++){
			if((input[i] === 'a') ||(input[i] === 'e') ||(input[i] === 'i') ||(input[i] === 'o') ||(input[i] === 'u')||(input[i] === 'A') ||(input[i] ==='E') ||(input[i] === 'I') ||(input[i] === 'O') ||(input[i] === 'U')){
				counter++;
			}				
		}
		document.write("The number of vowels in the given string is <b>"+counter+"</b>.");
	}