function sortear()
{
    var textSort = document.getElementById("textToSort").value;
    var TextResult = document.getElementById("resultText");
    var notificationElement = document.getElementById("alertTextEmpty");
    if(textSort != "")
    {
    notificationElement.style.display = "none";
    lineArray = [];
    lineArray = textSort.match(/[^\r\n]+/g);
    var result = Math.floor(Math.random() * ((parseInt(lineArray.length)-1) + 1));
    TextResult.innerHTML = '<p class="lead" id="resultText"><mark> RESULTADO: '+lineArray[result]+'</mark></p>';
    }
    else
    {
        notificationElement.style.display = "block";
    }
    
    
}
