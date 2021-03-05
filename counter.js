//Create a new XML object to send requests to the server and recieve a response 
var xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200){
        document.getElementById("ajax").innerHTML = xhr.responseText;
        greenEggs(xhr.responseText);
      }
    }
    xhr.open("GET", "https://class-demo-files-and-resources.s3.amazonaws.com/Green-Eggs-And-Ham.txt");
    xhr.send();

function greenEggs(para){

  let refinedText = "";
  let holder = "";

  //This for loop iterates over the xhr.response and replaces punctation and other special characters with spaces to be parsed out later
  for (let t = 0; t < para.length; t++){
    if(para[t] == "\n") {
      refinedText += `${holder} `;
      holder = "";
    } else if (para[t] == "."){
      refinedText += `${holder}`;
      holder = "";
    } else if (para[t] == "!"){
      refinedText += `${holder}`;
      holder = "";
    } else if (para[t] == "?"){
      refinedText += `${holder}`;
      holder = "";
    } else if (para[t] == " ") {
      refinedText += `${holder} `;
      holder = "";
    } else if (para[t] == ",") {
      refinedText += `${holder} `;
      holder = "";
    } else if (para[t] == para.length - 1) {
      refinedText += `${holder}`;
    } else {
      holder += para[t];
    }      
  }
  console.log(refinedText);

  //This function interates over the array, removes empty strings, and pushes values into new array
  function noEmptyStrings (para) {
    let newArray = []
    for (let i = 0; i < para.length; i++){
      if(para[i] !== ""){
        newArray.push(para[i]);
      }
    } 
    return newArray;
  }
 
//This is where we split the the array up by the spaces which gives us an array of comma-seperated values
  let splitRefinedText = refinedText.split(' ');

  splitRefinedText = noEmptyStrings(splitRefinedText);
  console.log(splitRefinedText);

//Begins constructing the counter feature
//This is where we iterate over the new split array and check if the property already exsists in the object 
//If it doesn't it gets added and incremented by 1, and if it does, it just gets incremented by 1
  let textArray = {};
  for(let j = 0; j < splitRefinedText.length; j++){
    if (!textArray[splitRefinedText[j]]) {
      textArray[splitRefinedText[j]] = 1;
    } else {
      textArray[splitRefinedText[j]]++;
    }
  };
  console.log(textArray);

  
//This function finds the unique words by checking for any word only used once 
      function uniqueWords (){
      let uniqueStatus = '<ul>';
      for(const property in textArray) {
          if(textArray[property] == 1){
          uniqueStatus += '<li>';
          uniqueStatus += property;
          uniqueStatus += '</li>';
          }
        }
        
    //Finish building the HTML with opening and closing tags, then targeting the element to insert
        uniqueStatus += '</ul>';
        document.getElementById("unique").innerHTML = uniqueStatus;
    }
    //function call
    uniqueWords();
  
    //This function iterates through the object and compares the the amount of times a number has been counted
    //It compares each property to last and only the one with largest counter is left at the end
    function mostUsed (){ 

      //Set highest at 0 to comapre number values of each property value
      let highest = 0;
     
      //Begin building the html elements to be inserted 
      let mostUsedStatus = '<ul>';
      for(const property in textArray) {
          if(textArray[property] > highest){
          highest = property;
          } 
        }
        //Finish building the HTML with opening and closing tags, then targeting the element to insert
          mostUsedStatus += '<li>';
          mostUsedStatus += highest;
          mostUsedStatus += '</li>';
          mostUsedStatus += '</ul>';
          document.getElementById("mostUsed").innerHTML = mostUsedStatus;
        }

        //function call
        mostUsed();

        function longestWord (){ 
          
          //assigned random word in order to work with length property
          let longest = "to"; 
          let longestWordStatus = '<ul>';
          for(const property in textArray) {
              if(property.length > longest.length){
                longest = property
              } 
            }
            longestWordStatus += '<li>';
            longestWordStatus += longest;
            longestWordStatus += '</li>';
            longestWordStatus += '</ul>';
              document.getElementById("longestWord").innerHTML = longestWordStatus;
            }

            //function call
          longestWord();
}
