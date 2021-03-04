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
    let holder = ""; 
    for (let i = 0; i < refinedText.length; i++){
      if(para[i] == !""){
        holder += para[i];
      }
    } 
  }
 


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

//Alice In WonderLand

// var xhr2 = new XMLHttpRequest ();
//     xhr2.onreadystatechange = function() {
//       if (xhr2.readyState === 4 && xhr2.status == 200){
//         document.getElementById("alice").innerHTML = xhr2.responseText;
//         wonderLand(xhr2.responseText);
//       }
//     }
//     xhr2.open("GET", "https://class-demo-files-and-resources.s3.amazonaws.com/Alice-In-Wonderland.txt");
//     xhr2.send();

// function wonderLand(para){

//   let refinedText = "";
//   let holder = "";
//   let noDoubleSpace = false;

//   for (let t = 0; t < para.length; t++){
//     if(para[t] == "\n") {
//       refinedText += `${holder} `;
//       holder = "";
//     } else if (para[t] == "."){
//       refinedText += `${holder}`;
//       holder = "";
//     } else if (para[t] == "!"){
//       refinedText += `${holder}`;
//       holder = "";
//     } else if (para[t] == "?"){
//       refinedText += `${holder}`;
//       holder = "";
//     } else if (para[t] == " ") {
//       refinedText += `${holder} `;
//       holder = "";
//     } else if (para[t] == ",") {
//       refinedText += `${holder} `;
//       holder = "";
//     } else if (para[t] == para.length - 1) {
//       refinedText += `${holder}`;
//     } else {
//       holder += para[t];
//     }      
//   }

//   console.log(refinedText);

//   let splitRefinedText = refinedText.split(' ');
//   console.log(splitRefinedText);

//   let textArray = {};
//   for(let j = 0; j < splitRefinedText.length; j++){
//     if (!textArray[splitRefinedText[j]]) {
//       textArray[splitRefinedText[j]] = 1;
//     } else {
//       textArray[splitRefinedText[j]]++;
//     }
//   };
//   console.log(textArray);
// }