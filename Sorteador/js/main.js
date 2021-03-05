function sortWords()
{
    var textSort = document.getElementById("textToSort").value;
    var TextResult = document.getElementById("resultText");
    var notificationElement = document.getElementById("alertTextEmpty");
    lineArray = [];
    if(textSort != "")
    {
        
    notificationElement.style.display = "none";
    lineArray = textSort.match(/[^\r\n]+/g);
    var result = Math.floor(Math.random() * ((parseInt(lineArray.length)-1) + 1));
    var i = 0;

    function slideWordsAnimationLoop()
    {
        setTimeout(function() 
        {   
            TextResult.innerHTML = '<p class="lead" id="resultText"><mark>'+lineArray[i]+'</mark></p>';
            i++;                    
            if (i < lineArray.length) 
            {          
                    slideWordsAnimationLoop();            
            } 
            else
            {
                TextResult.innerHTML = '<p class="lead" id="resultText"><mark> RESULTADO: '+lineArray[result]+'</mark></p>';
            }                      
        }, 25)
    }
    
    slideWordsAnimationLoop();
               
    }
    else
    {
        notificationElement.style.display = "block";
    }
    
    
}

function sortNumbers()
{
    var minNumber = document.getElementById("minInputNumber").value;
    var maxNumber = document.getElementById("maxInputNumber").value;
    var TextResult = document.getElementById("resultTextNum");
    var emptyNumbersNotify = document.getElementById("alertTextEmptyNumber");
    if(minNumber != "" && maxNumber !="")
    {
        emptyNumbersNotify.style.display = "none";
        var result = getRandomInt(minNumber, maxNumber);
        TextResult.innerHTML = '<p class="lead" id="resultTextNum"><mark>RESULTADO: '+result+'</mark></p>';
    }
    else
    {
        emptyNumbersNotify.style.display = "block";
    }
   
    
}

function divAlternate(caseNum)
{
    ///////////// BTNS RELACIONADOS /////////////
    var btnAlternate = document.getElementById("alternateDivBtn");
    ///////////// DIVS RELACIONADOS /////////////
    var divNumber = document.getElementById("numberSortDiv");
    var divWords = document.getElementById("wordsSortDiv");
    ///////////// DIVS RELACIONADOS /////////////
    switch (parseInt(caseNum)) 
    {
        case 1:
            btnAlternate.setAttribute('onclick',  'divAlternate(2)');
            btnAlternate.innerText = "SORTEADOR DE PALAVRAS";
            divWords.style.display = "none";
            divNumber.style.display = "block";
          break;
        case 2:
            btnAlternate.setAttribute('onclick',  'divAlternate(1)');
            btnAlternate.innerText = "SORTEADOR DE NUMEROS";
            divWords.style.display = "block";
            divNumber.style.display = "none";
          break;
      }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

