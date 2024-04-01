const questions=[
    {
      question:"The full form of CSS is:",
      answers:[
      
        {text:"Cascade style sheets",correct:false},
        
        {text:"Color and style sheets",correct:false},


        {text:"Cascading style sheets",correct:true},
        
        {text:"None of the above",correct:false},
      ]  

    },
    {
      question:"The property in CSS used to change the background color of an element is -",
      answers:[
      
        {text:"bgcolor",correct:false},
        
        {text:"color",correct:false},


        {text:"background-color",correct:true},
        
        {text:"All of the above",correct:false},
      ]  

    },
    {
      question:"The CSS property used to specify the transparency of an element is -",
      answers:[
      
        {text:"opacity",correct:true},
        
        {text:"filter",correct:false},


        {text:"visibility",correct:false},
        
        {text:"overlay",correct:false},
      ]  

    },
    {
        question:" Which of the following CSS property defines how an image or video fits into container with established height and width?",
        answers:[
        
          {text:"object-fit",correct:true},
          
          {text:"object-position",correct:false},
          {text:"position",correct:false},

          {text:"None of the above",correct:false},
          
          
        ]  

      },
      {
        question:"The correct syntax to give a line over text is -",
        answers:[
        
          {text:"text-decoration: line-through",correct:false},
          
          {text:"text-decoration: none",correct:false},
  
  
          {text:"text-decoration: overline",correct:true},
          
          {text:"text-decoration: underline",correct:false},
        ]  
  
      },
      {
        question:"Which of the following is not the property of the CSS box model?",
        answers:[
        
          {text:"margin",correct:false},
          
          {text:"color",correct:true},
  
  
          {text:"width",correct:false},
          
          {text:"height",correct:false},
        ]  
  
      },
      {
        question:"Which of the following CSS Property controls how an element is positioned?",
        answers:[
        
          {text:"static",correct:false},
          
          {text:"position",correct:true},
  
  
          {text:"fix",correct:false},
          
          {text:"set",correct:false},
        ]  
  
      },
      {
        question:"Which CSS property is used to align multiple lines of flex items along the cross axis?",
        answers:[
        
          {text:"align-content",correct:false},
          
          {text:"align-items",correct:true},
  
  
          {text:"justify-content",correct:false},
          
          {text:"flex-wrap",correct:false},
        ]  
  
      },
      {
        question:" Which of the following CSS Property sets the stacking order of positioned elements?",
        answers:[
        
          {text:"y-index",correct:false},
          
          {text:"z-index",correct:true},
  
  
          {text:"x-index",correct:false},
          
          {text:"all of the mentioned",correct:false},
        ]  
  
      },
      {
        question:"Which of the following CSS selectors are used to specify a group of elements?",
        answers:[
        
          {text:"tag",correct:false},
          
          {text:"id",correct:false},
  
  
          {text:"class",correct:true},
          
          {text:"both class tag",correct:false},
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