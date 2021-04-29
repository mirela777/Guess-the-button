var winner = Math.floor(Math.random() * 3) + 1;
function guess(clicked_id){
    var message1 = "You win";
    var message2 = "You lose";
    var emoji = String.fromCodePoint(128546);
    var emoji2 = String.fromCodePoint(128516);
    if(clicked_id == winner){
        document.getElementById("text").innerHTML = message1 + emoji2; 
        }
    else{
        document.getElementById("text").innerHTML = message2 + emoji;
        document.getElementById(clicked_id).disabled = true;
        window.setTimeout(function(){location.reload()}, 1000);
        }
    }
