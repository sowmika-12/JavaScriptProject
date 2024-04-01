const questions=[
    {
        question:"What is JavaScript?",
        answers:[
        
          {text:"JavaScript is a scripting language used to make the website interactive",correct:true},
          
          {text:"JavaScript is an assembly language used to make the website interactive",correct:false},
  
  
          {text:"JavaScript is a compiled language used to make the website interactive",correct:false},
          
          {text:"None of the mentioned",correct:false},
        ]  
  
      },
      {
        question:"Which of the following can be used to call a JavaScript Code Snippet?",
        answers:[
        
          {text:"Function/Method",correct:true},
          
          {text:"Preprocessor",correct:false},
  
  
          {text:"Triggering Event",correct:false},
          
          {text:"RMI",correct:false},
        ]  
  
      },
      {
        question:" Why JavaScript Engine is needed?",
        answers:[
        
          {text:"Both Compiling & Interpreting the JavaScript",correct:false},
          
          {text:"Parsing the javascript",correct:false},
  
  
          {text:"Interpreting the JavaScript",correct:true},
          
          {text:"Compiling the JavaScript",correct:false},
        ]  
  
      },
      {
          question:"The function and  var are known as?",
          answers:[
          
            {text:"Keywords",correct:false},
            
            {text:"Data types",correct:false},
            {text:"Declaration statements",correct:true},
  
            {text:"Prototypes",correct:false},
            
            
          ]  
  
        },
        {
          question:"Which one of the following is used for the calling a function or a method in the JavaScript:?",
          answers:[
          
            {text:"Property Access Expression",correct:false},
            
            {text:"Functional expression",correct:false},
    
    
            {text:"Invocation expression",correct:true},
            
            {text:"Primary expression",correct:false},
          ]  
    
        },
        {
          question:"What are the three important manipulations for a loop on a loop variable?",
          answers:[
          
            {text:"Updation, Incrementation, Initialization",correct:false},
            
            {text:"Initialization, Testing, Incrementation",correct:false},
    
    
            {text:"Testing, Updation, Testing",correct:false},
            
            {text:"Initialization, Testing, Updation",correct:true},
          ]  
    
        },
        {
          question:" A set of unordered properties that, has a name and value is called______",
          answers:[
          
            {text:"String",correct:false},
            
            {text:"Array",correct:false},
    
    
            {text:"Serialized Object",correct:false},
            
            {text:"Object",correct:true},
          ]  
    
        },
        {
          question:"Which one of the following is not a example of closures?",
          answers:[
          
            {text:"Graphics",correct:true},
            
            {text:"Variables",correct:false},
    
    
            {text:"Functions",correct:false},
            
            {text:"Objects",correct:false},
          ]  
    
        },
        {
          question:"Which of the following is not a JavaScript Data Types?",
          answers:[
          
            {text:"Boolean",correct:false},
            
            {text:"Undefined",correct:false},
    
    
            {text:"Number",correct:false},
            
            {text:"Float",correct:true},
          ]  
    
        },
        {
          question:"The process by which the browser decides which objects to trigger event handlers on is ____________",
          answers:[
          
            {text:"Event Triggering",correct:false},
            
            {text:" Event Listening",correct:false},
    
    
            {text:"Event Handling",correct:false},
            
            {text:" Event propagation",correct:true},
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