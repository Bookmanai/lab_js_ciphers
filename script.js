window.addEventListener('DOMContentLoaded', function() {

    document.body.style.backgroundColor = '#89ABE3FF';
    let mod = function (n, m) {
        var remain = n % m;
        return Math.floor(remain >= 0 ? remain : remain + m);
    };
     
    const userText = document.getElementById('text-to-work');
    const userSelectStap = document.getElementById('encrypt-step');
    const result = document.getElementById('output');
    const encrypt = document.getElementById('encrypt-btn');
    const decrypt = document.getElementById('decrypt-btn');
    const reset = document.getElementById('btn-reset');
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    reset.addEventListener('click', () => {
        userText.value = '';
        userSelectStap.value = '';
        result.value = '';
    });
    decrypt.addEventListener('click', () =>{
        let text = '';

        const value = userText.value;
        
        const amount = + userSelectStap.value;

        for(let i = 0; i<value.length; i++){
            let c = value[i];
            let code = value.charCodeAt(i);
             if (code >= 65 && code <= 90) {
                c = String.fromCharCode(mod((code - 65 - amount),26) + 65);
              }
              // Lowercase letters
              else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(mod((code - 97 - amount),26) + 97);
                
                                    }
              text += c;
        }
        result.value = text;
    });
    encrypt.addEventListener('click', () => {
        let text = '';

        const value = userText.value;
        
        const amount = + userSelectStap.value;

        for(let i = 0; i<value.length; i++){
            let c = value[i];
            let code = value.charCodeAt(i);
             if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
              }
              // Lowercase letters
              else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
                                    }
              text += c;
        }
        result.value = text;
    });
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();
    tabsParent.addEventListener('click', (e) => {
        if(e.target && e.target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if(e.target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    const userTextVig = document.getElementById('text-to-work-vig');
    const keyWord = document.getElementById('encrypt-step-vig');
    const resultVig = document.getElementById('output-vig');
    const encryptVig = document.getElementById('encrypt-btn-vig');
    const decryptVig = document.getElementById('decrypt-btn-vig');

    const resetVig = document.getElementById('btn-reset-vig');


    

    
    
    encryptVig.addEventListener('click', () => {
        const tableVig = document.createElement('table');

        tableVig.style.width = '400px';
        tableVig.style.margin = '0 auto';

        let key = keyWord.value.toLowerCase();
        let text = userTextVig.value.toLowerCase();
        let index = 0;
        let str1 = '';
        let str = `<tr>`;
        for(let i = 97; i<=122; i++){
            str +=`<td>${String.fromCharCode(i)}</td>`;
        }
        str+=`</tr>`;
        for(let i = 0; i<key.length; i++){
            if(key.charCodeAt(i)>=97 && key.charCodeAt(i)<=122){
            str+=`<tr>`;
            let c = '';
            for(let j=0; j<=25; j++){
             c = String.fromCharCode((((key[i]).charCodeAt(0)- 97 + j) % 26)+97);
                 str+=`<td>${c}</td>`;
                }
                str+=`</tr>`;   
            }
        }
        
        tableVig.innerHTML = str;
        document.querySelector('.veg').append(tableVig);
        while(text.length > key.length){
            key+=key[index++];
        }
        for(let i = 0; i<text.length; i++){
            if(text.charCodeAt(i)>=97 && text.charCodeAt(i)<=122 && key.charCodeAt(i)>=97 && key.charCodeAt(i)<=122){
            str1+= String.fromCharCode((((text.charCodeAt(i)-97) + (key.charCodeAt(i)-97))%26)+97);
            } else{
                str1+=text[i];
            }
        }
        resultVig.value = str1;
    });
    resetVig.addEventListener('click', () => {
        userTextVig.value = '';
        keyWord.value = '';
        resultVig.value = '';
        document.querySelector('.veg').innerHTML = '';
    });

    decryptVig.addEventListener('click', () => {
      
        let key = keyWord.value.toLowerCase();
        let text = userTextVig.value.toLowerCase();
        let index = 0;
        let str1 = '';
        while(text.length > key.length){
            key+=key[index++];
        }
        for(let i = 0; i<text.length; i++){
            if(text.charCodeAt(i)>=97 && text.charCodeAt(i)<=122){
            str1+= String.fromCharCode((mod(((text.charCodeAt(i)-97) - (key.charCodeAt(i)-97)),26))+97);
            } else{
                str1+=text[i];
            }
        }
        resultVig.value = str1;
    });

    function strip(aString) {

        var splitString = "";
      
        for (var item in aString) {
      
          var letter = aString.charAt(item);
      
          // ignore whitespace and append to string
          if (letter.search(/\s|\W|\d/igm) == -1) {
            splitString += letter;
          }
        }
        return splitString;
      }
      
      function fillMatrix() {
        var userInput = document.getElementById('encrypt-step-plf').value;
        var matrix = new Array(25);
        var matrixIndex = 0;
        var keyIndex = 0;
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
      
        
        userInput = strip(userInput);
        userInput = userInput.toLowerCase();
      
        
        while ( keyIndex < userInput.length ) {
          var letter = userInput.charAt(keyIndex);
          if ( matrix.indexOf(letter) == -1 ) {
            matrix[matrixIndex] = letter;
            matrixIndex++;
          }
          keyIndex++;
        }
            for (var item in alphabet) {
              var literal = alphabet.charAt(item);
      
              var letterNotInMatrix = (matrix.indexOf(literal) +
                matrix.indexOf(literal.toUpperCase()) == -2);
      
              if ( letterNotInMatrix   ) {
                if ( (literal == "i" || literal == "I") && (matrix.indexOf("j") == -1 &&
                      matrix.indexOf("J") == -1 ) ) {
                        matrix[matrixIndex] = literal;
                        matrixIndex++;
                      }
                else if ( literal == "j" || literal == "J" &&
                    (matrix.indexOf("i") == -1 && matrix.indexOf("I") == -1 ) ) {}
                else {
                  matrix[matrixIndex] = literal;
                  matrixIndex++;
                }
              }
            }
        return matrix;
      }
      function getDigrams(aString) {

        var count = 0;
        var input = aString.toLowerCase();
        var tempDigram = "";
        var textLength = input.length;
        var digramLength;
        var letter;
        var array = [];
      
        while (count < input.length) {
      
          digramLength = tempDigram.length;
          letter = input.charAt(count);
      
          if ( digramLength == 0 ) {
            tempDigram += letter;
          }
          else if ( digramLength == 1 ) {
            var str = tempDigram.charAt(0);
            if (  str == letter ) {
              tempDigram += "x";
              count--; 
            }
            else {
              tempDigram += letter;
              array.push(tempDigram);
              tempDigram = "";
            }
          }
          else {
            array.push(tempDigram);
            tempDigram = "";
            tempDigram += letter;
          }
      
          if ( textLength % 2 != 0 && count == input.length - 1
                && tempDigram.length % 2 != 0 ) {
            tempDigram += "x";
            array.push(tempDigram);
          }
          else if (count == input.length - 1 && tempDigram.length != 0) {
              tempDigram = letter + "x";
              array.push(tempDigram);
          }
          count++;
        }
      
        return array;
      }
    
      function encryptPlf() {
        var matrix = fillMatrix();
        var plainT = strip(document.getElementById("text-to-work-plf").value);
        var digrams = getDigrams(plainT);
        var encryptedArray = [];
        var tempString = "";
        var letter1;
        var letter2;
        var letterPosition1;
        var letterPosition2;
        var distance;
        var difference;
        var mod4Result;
        var mod5Result;
        var mod6Result;
        var offset;
        var min;
        var max;
      
      
        if ( plainT == "" ) {
          alert("Please input a text to be encrypted.");
        }
        else {
      
          for (var i = 0; i < digrams.length; i++) {
      
            letter1 = digrams[i][0];
            letter2 = digrams[i][1];
      
            if (letter1 == "j") {
              letter1 = "i";
            }
            else if (letter2 == "j") {
              letter2 = "i";
            }
      
            letterPosition1 = matrix.indexOf(letter1);
            letterPosition2 = matrix.indexOf(letter2);
            min = Math.min(letterPosition1, letterPosition2);
            max = Math.max(letterPosition1, letterPosition2);
            var minDistanceFromEdge = min % 5;
            var maxDistanceFromEdge = max % 5;
            difference = Math.abs(letterPosition1 - letterPosition2);
            mod4Result = difference % 4;
            mod5Result = difference % 5;
            mod6Result = difference % 6;
      
            if (mod5Result == 0) {
      
              if (letterPosition1 >= 20) { 
                tempString += matrix[letterPosition1 - 20]; 
                tempString += matrix[letterPosition2 + 5]; 
              }
              else if (letterPosition2 >= 20) {
                tempString += matrix[letterPosition1 + 5];
                tempString += matrix[letterPosition2 - 20];
              }
              else {
                tempString += matrix[letterPosition1 + 5];
                tempString += matrix[letterPosition2 + 5];
              }
            }
            
            else if ( difference <= 4 && maxDistanceFromEdge > minDistanceFromEdge ) {
      
              
              if (difference == 4) {
      
                if ( ((max + 1) % 5) == 0 ) {
      
                  if ( ( (letterPosition1 + 1) % 5) == 0 ) {
                    tempString += matrix[letterPosition1 - 4];
                    tempString += matrix[letterPosition2 + 1];
                  }
                  else if ( ( (letterPosition2 + 1) % 5) == 0  ) {
                    tempString += matrix[letterPosition1 + 1];
                    tempString += matrix[letterPosition2 - 4];
                  }
                }
              }
                else {
      
                  if ( ( letterPosition1 + 1 ) % 5 == 0 ) {
                    tempString += matrix[letterPosition1 - 4];
                    tempString += matrix[letterPosition2 + 1];
                  }
                  else if ( ( letterPosition2 + 1 ) % 5 == 0 ) {
                    tempString += matrix[letterPosition1 + 1];
                    tempString += matrix[letterPosition2 - 4];
                  }
                  else {
                    tempString += matrix[letterPosition1 + 1];
                    tempString += matrix[letterPosition2 + 1];
                  }
                }
              }
      
              
              else {
      
                var counter = min;
                var rowD = 0;
      
      
                
                if ( (min + 1) % 5 == 0 || minDistanceFromEdge > maxDistanceFromEdge ) {
                  
                  while ( Math.abs(counter - max) % 5 != 0 ) {counter--; rowD--;}
                }
                else{
                  
                  while ( Math.abs(counter - max) % 5 != 0 ) {counter++; rowD++;}
                }
      
                if ( letterPosition1 == min ) {
                  tempString += matrix[letterPosition1 + rowD];
                  tempString += matrix[letterPosition2 - rowD];
                }
                else {
                  tempString += matrix[letterPosition1 - rowD];
                  tempString += matrix[letterPosition2 + rowD];
                }
              }
      
              encryptedArray.push(tempString);
              tempString = "";
            }
            document.getElementById("output-plf").innerHTML =
                              encryptedArray.toString().replace(/,/ig, " ");
          }
      
        }

        const encButton = document.getElementById("encrypt-btn-plf");
        if (encButton != null) {
          encButton.addEventListener("click", encryptPlf);
        }
        function decryptPlf() {
            var matrix = fillMatrix();
            var ciphT = strip(document.getElementById("text-to-work-plf").value);
            var digrams = getDigrams(ciphT);
            var decryptedArray = [];
            var tempString = "";
            var letter1;
            var letter2;
            var letterPosition1;
            var letterPosition2;
            var distance;
            var difference;
            var mod4Result;
            var mod5Result;
            var mod6Result;
            var offset;
            var min;
            var max;
          
          
            if ( ciphT == "" ) {
              alert("Please input a text to be decrypted.")
            }
            else {
          
              for (var i = 0; i < digrams.length; i++) {
          
                letter1 = digrams[i][0];
                letter2 = digrams[i][1];
          
                letterPosition1 = matrix.indexOf(letter1);
                letterPosition2 = matrix.indexOf(letter2);
                min = Math.min(letterPosition1, letterPosition2);
                max = Math.max(letterPosition1, letterPosition2);
                var minDistanceFromEdge = min % 5;
                var maxDistanceFromEdge = max % 5;
                difference = Math.abs(letterPosition1 - letterPosition2);
                mod4Result = difference % 4;
                mod5Result = difference % 5;
                mod6Result = difference % 6;
          
                
                if (mod5Result == 0) {
          
                  if (letterPosition1 <= 4) { 
                    tempString += matrix[letterPosition1 + 20]; 
                    tempString += matrix[letterPosition2 - 5]; 
                  }
                  else if (letterPosition2 <= 4) {
                    tempString += matrix[letterPosition1 - 5];
                    tempString += matrix[letterPosition2 + 20];
                  }
                  else {
                    tempString += matrix[letterPosition1 - 5];
                    tempString += matrix[letterPosition2 - 5];
                  }
                }
                
                else if ( difference <= 4 && maxDistanceFromEdge > minDistanceFromEdge ) {
          
                  
                  if (difference == 4) {
          
                    if ( ((max + 1) % 5) == 0 ) {
          
                      if ( ( (letterPosition1 + 1) % 5) == 0 ) {
                        tempString += matrix[letterPosition1 - 1];
                        tempString += matrix[letterPosition2 + 4];
                      }
                      else if ( ( (letterPosition2 + 1) % 5) == 0  ) {
                        tempString += matrix[letterPosition1 + 4];
                        tempString += matrix[letterPosition2 - 1];
                      }
                    }
                  }
                    else {
          
                      if ( ( letterPosition1 + 1 ) % 5 == 0 ) {
                        tempString += matrix[letterPosition1 - 1];
                        tempString += matrix[letterPosition2 - 1];
                      }
                      else if ( ( letterPosition2 + 1 ) % 5 == 0 ) {
                        tempString += matrix[letterPosition1 - 1];
                        tempString += matrix[letterPosition2 - 1];
                      }
                      else if ( letterPosition1  % 5 == 0 ) {
                        tempString += matrix[letterPosition1 + 4];
                        tempString += matrix[letterPosition2 - 1];
                      }
                      else if ( letterPosition2  % 5 == 0 ) {
                        tempString += matrix[letterPosition1 - 1];
                        tempString += matrix[letterPosition2 + 4];
                      }
                      else {
                        tempString += matrix[letterPosition1 - 1];
                        tempString += matrix[letterPosition2 - 1];
                      }
                    }
                  }
          
                  
                  else {
          
                    var counter = min;
                    var rowD = 0;
          
          
                    
                    if ( (min + 1) % 5 == 0 || minDistanceFromEdge > maxDistanceFromEdge ) {
                      
                      while ( Math.abs(counter - max) % 5 != 0 ) {counter--; rowD--;}
                    }
                    else{
                     
                      while ( Math.abs(counter - max) % 5 != 0 ) {counter++; rowD++;}
                    }
          
                    if ( letterPosition1 == min ) {
                      tempString += matrix[letterPosition1 + rowD];
                      tempString += matrix[letterPosition2 - rowD];
                    }
                    else {
                      tempString += matrix[letterPosition1 - rowD];
                      tempString += matrix[letterPosition2 + rowD];
                    }
                  }
          
                  decryptedArray.push(tempString);
                  tempString = "";
                }
              }
          
              document.getElementById("output-plf").innerHTML =
                decryptedArray.toString().replace(/,/ig, " ");
          
            }
            document.getElementById("decrypt-btn-plf").addEventListener("click", decryptPlf);


      const userTextTrn = document.getElementById('text-to-work-trn');
      const keyWordTrn = document.getElementById('encrypt-step-trn');
      const resultTrn = document.getElementById('output-trn');
      const encryptTrn = document.getElementById('encrypt-btn-trn');
      const decryptTrn = document.getElementById('decrypt-btn-trn');
        
      const resetTrn = document.getElementById('btn-reset-trn');

      decryptTrn.addEventListener('click', () => {
          let numbers = keyWordTrn.value;
          let sum = 0;

          for(let i of numbers){
            sum+=+i;
          }
          if(15===sum){
            let word = "";
            let plainText = userTextTrn.value;
            plainText =  plainText.replace(/\s/g, '');
            let row = Math.ceil(plainText.length/5);
            let col = 5;
            const array = [];
  
            let index = 0;
            for(let j = 0; j <row; j++){
              array[j] = [];
            }
            for(let i = 1; i<=col; i++){
               let pos = numbers.indexOf(i);
               
               for(let j = 0; j<row; j++){
                array[j][pos] = plainText[index++];
                console.log(array[j][pos]);
               }
            }

            for(let i = 0; i<row; i++){
              for(let j = 0; j<col; j++){
                if(typeof(array[i][j])!=='undefined'){
               word+=array[i][j];}
              }
           }
            resultTrn.value = word;
          }
         
      });
      encryptTrn.addEventListener('click', () => {
        let numbers = keyWordTrn.value;
        let word = "";
        let sum = 0;

        for(let i of numbers){
          sum+=+i;
        }
        if(15===sum){
          let plainText = userTextTrn.value;
          plainText =  plainText.replace(/\s/g, '');
          let row = Math.ceil(plainText.length/5);
          let col = 5;
          const array = [];
          let index = 0;
          for(let i = 0; i<row; i++){
            array[i] = [];
            for(let j = 0; j<col; j++){
              if(plainText.length > index){
              array[i][j] = plainText[index++];}
            }
          }
          console.log(array);
          for(let i = 1; i<=col; i++){
             let pos = numbers.indexOf(i);
             for(let j = 0; j<row; j++){
               if(typeof(array[j][pos])!=='undefined'){
                word+=array[j][pos];}
             }
          }
          
          resultTrn.value = word;
        }
       else{
         const alert = document.createElement('div');
         alert.classList.add('alert', 'alert-danger');
         alert.textContent = 'The key should be from 1-5 and unique';
         keyWordTrn.after(alert);
       }
    });
});