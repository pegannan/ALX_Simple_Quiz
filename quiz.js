
function checkAnswer(){
    let correctAnswer = '4';

    return correctAnswer
}
      
let correctAnswer = checkAnswer

const userAnswer = document.querySelector('input[name="quiz"]:checked');

if (userAnswer === correctAnswer){
    document.getElementById('feedback') = 'Correct! Well done.'
}
else if (userAnswer !== correctAnswer){
    document.getElementById('feedback') = "That's incorrect. Try again!"
};

document.getElementById('submit-answer') = addEventListener(click, checkAnswer());






console.log('reference')