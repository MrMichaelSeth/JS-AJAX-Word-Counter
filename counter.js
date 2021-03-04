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

  function noEmptyStrings (para) {
    let newArray = []
    for (let i = 0; i < para.length; i++){
      if(para[i] !== ""){
        newArray.push(para[i]);
      }
    } 
    return newArray;
  }
 


  let splitRefinedText = refinedText.split(' ');

  splitRefinedText = noEmptyStrings(splitRefinedText);
  console.log(splitRefinedText);

  

  let textArray = {};
  for(let j = 0; j < splitRefinedText.length; j++){
    if (!textArray[splitRefinedText[j]]) {
      textArray[splitRefinedText[j]] = 1;
    } else {
      textArray[splitRefinedText[j]]++;
    }
  };
  console.log(textArray);

  

      function uniqueWords (){
      let uniqueStatus = '<ul>';
      for(const property in textArray) {
          if(textArray[property] == 1){
          uniqueStatus += '<li>';
          uniqueStatus += property;
          uniqueStatus += '</li>';
          }
        }
        uniqueStatus += '</ul>';
        document.getElementById("unique").innerHTML = uniqueStatus;
    }

    uniqueWords();
  
    function mostUsed (){ 
      let lowest;
      let highest = 0;
      let mostUsedStatus = '<ul>';
      for(const property in textArray) {
          if(textArray[property] > highest){
          highest = property;
          } else {
          lowest = property;
          }
        }
          mostUsedStatus += '<li>';
          mostUsedStatus += highest;
          mostUsedStatus += '</li>';
          mostUsedStatus += '</ul>';
          document.getElementById("mostUsed").innerHTML = mostUsedStatus;
        }

        mostUsed();

}
