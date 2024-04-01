const questions=[
  
    {
      question:"What does HTML stand for?",
      answers:[
      
        {text:"Hyper Trainer Marking Language",correct:false},
        
        {text:"Hyper Text Marketing Language",correct:false},


        {text:"Hyper Text Markup Language",correct:true},
        
        {text:"Hyper Text Markup Leveler",correct:false},
      ]  

    },
    {
      question:"Who is the developer of HTML?",
      answers:[
      
        {text:"Robert Cailliau",correct:false},
        
        {text:"Tim Thompson",correct:false},


        {text:"Charles Darwin",correct:false},
        
        {text:"Tim Berners-Lee",correct:true},
      ]  

    },
    {
      question:"What attribute is used to provide the path of an image in the <img> tag?",
      answers:[
      
        {text:"link",correct:false},
        
        {text:"src",correct:true},


        {text:"href",correct:false},
        
        {text:"url",correct:false},
      ]  

    },
    {
        question:"In HTML, onblur and onfocus are: ? ",
        answers:[
        
          {text:"HTML Elements.",correct:false},
          
          {text:"Style Attributes.",correct:false},
          {text:"Set Attributes.",correct:false},

          {text:"Event Attributes.",correct:true},
          
          
        ]  

      },
      {
        question:"What is the purpose of using div tags in HTML?",
        answers:[
        
          {text:"For creating Different styles.",correct:false},
          
          {text:"	For creating different sections",correct:true},
  
  
          {text:"For adding headings",correct:false},
          
          {text:"Cross	For adding titles",correct:false},
        ]  
  
      },
      {
        question:"What is the current version of HTML?",
        answers:[
        
          {text:"HTML5",correct:true},
          
          {text:"HTML8",correct:false},
  
  
          {text:"HTML3",correct:false},
          
          {text:"HTML7",correct:false},
        ]  
  
      },
      {
        question:" Which of the following attribute is used to provide a unique name to an element?",
        answers:[
        
          {text:"class",correct:false},
          
          {text:"id",correct:true},
  
  
          {text:"type",correct:false},
          
          {text:"Non of the above",correct:false},
        ]  
  
      },
      {
        question:"Which of the following HTML attribute is used to define inline styles?",
        answers:[
        
          {text:"style",correct:false},
          
          {text:"class",correct:true},
  
  
          {text:"type",correct:false},
          
          {text:"Non of the above",correct:false},
        ]  
  
      },
      {
        question:"Which of the following HTML tag is used to display the text with scrolling effect?",
        answers:[
        
          {text:"marquee tag",correct:true},
          
          {text:"div tag",correct:false},
  
  
          {text:"style tag",correct:false},
          
          {text:"mark tag",correct:false},
        ]  
  
      },
      {
        question:"An HTML program is saved by using the ____ extension.",
        answers:[
        
          {text:".ht",correct:false},
          
          {text:".html",correct:true},
  
  
          {text:".hml",correct:false},
          
          {text:"None of the above",correct:false},
        ]  
  
      },
    ];
    
  const questionElement=document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  let currentQuestionIndex=0;
  let score=0;
  let timer;

  function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML="Next";
  showQuestion();
  startTimer();
  }


  function startTimer(){
  var count = 15;
  timer = setInterval(function (){
    document.getElementById('count').innerHTML = count;
    count--;
    if (count < 0){
      clearInterval(timer);
      document.getElementById('count').innerHTML ='done';
      // or...
      // alert("You're out of time!");
      showQuestion();
      startTimer();
      handleNextButton();
    }
  }, 1000);
}
  function showQuestion(){
      resetState();
     let currentQuestion=questions[currentQuestionIndex];
     let questionNo=currentQuestionIndex +1;
     questionElement.innerHTML=questionNo+"."+currentQuestion.
question;

      currentQuestion.answers.forEach(answer => {
          const button=document.createElement("button");
          button.innerHTML=answer.text;
          button.classList.add("btn");
          answerButtons.appendChild(button);
          if(answer.correct){
            button.dataset.correct=answer.correct;
          }
          button.addEventListener("click",selectAnswer);
      });
      }


      function resetState(){
          nextButton.style.display="none";
          while(answerButtons.firstChild){
              answerButtons.removeChild(answerButtons.firstChild);
          }
      }


function selectAnswer(e){
clearInterval(timer);
const selectedBtn=e.target;
const isCorrect=selectedBtn.dataset.correct==="true";
if(isCorrect){
  selectedBtn.classList.add("correct");
  score++;
}else{
  selectedBtn.classList.add("incorrect");

}

Array.from(answerButtons.children).forEach(button=>{
  if(button.dataset.correct==="true"){
    button.classList.add("correct");
  }
  button.disabled=true;
});
nextButton.style.display="block";
}
function showScore(){
resetState();
questionElement.innerHTML=`You scored ${score}  out of ${questions.length}!`;
nextButton.innerHTML="Play Again";
nextButton.style.display="block";
}

function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex < questions.length){
  showQuestion();
  startTimer();
}
else{
  showScore();
}
}

nextButton.addEventListener("click",()=>{
if(currentQuestionIndex < questions.length){
  handleNextButton();
}else{
  startQuiz();
}
})
      startQuiz();