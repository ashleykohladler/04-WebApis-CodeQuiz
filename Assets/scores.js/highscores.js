var highScoresPlayers = document.querySelector('#high_scores');

var storedScores = JSON.parse(localStorage.getItem('score')) || [];

for(let i = 0; i < storedScores.length; i++) {
    var highScores = storedScores[i]; 
    var li = document.createElement('li');
    li.textContent=`${highScores.userInput} - ${highScores.score}`;
    highScoresPlayers.append(li);


} 

function clearClick() {
    localStorage.clear();
}

clearClick();
