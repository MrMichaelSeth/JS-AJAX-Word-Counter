var xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200){
        document.getElementById("ajax").innerHTML = xhr.responseText;
        const textBlock = xhr.responseText;
       
        let splitText = [];
        for ( let i = 0; i < textBlock.length ; i++) {
            splitText += textBlock[i].split(' ');
        };
        console.log(splitText);
      }
    }
    xhr.open("GET", "https://class-demo-files-and-resources.s3.amazonaws.com/Green-Eggs-And-Ham.txt");
    xhr.send();


