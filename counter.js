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
  let noDoubleSpace = false;
  let doubleSpaceCounter = 0;

  for (let t = 0; t < para.length; t++){
    if(para[t] == "\n") {
      refinedText += `${holder} `;
      holder = "";
    } else if (para[t] == "."){
      refinedText += `${holder} `;
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

  let splitRefinedText = refinedText.split(' ');
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
}