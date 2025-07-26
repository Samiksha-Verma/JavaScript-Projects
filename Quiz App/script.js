const questions = [{
    'que': 'which of the language is markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'C': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
},
{
    'que': "what year was javaScript launched?",
    'a':"1995",
    'b': "1996",
    'c': "1994",
    'd': "none of the above",
    'correct': "b",
},
{
    'que': "what does CSS stands for?",
    'a':"HyperText Markup Language",
    'b': "Cascading Style Sheet",
    'c': "Jason Object Notation",
    'd': "Halicopters terminals Motorboats Kamborgini",
    'correct': "b", 
}
]
let index = 0;
let total = questions.length;
let corrects=0, wrong =0;
//const data = questions[index];
const queBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');
const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    console.log(data);
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () =>{
    const data = questions[index];
     const ans = getanswer();
     if(ans==data.correct){
      corrects++;
      console.log(corrects);
     }
     else{
        wrong++;
     }
     index++;
     loadQuestion();
     return;
}


const getanswer = () =>{
    let answer;
    optionInputs.forEach((input) => {
      if(input.checked) {
        answer = input.ariaValueMax;
        console.log(corrects);
      }
    }
)
return answer;
}

const reset= () => {
    optionInputs.forEach((input) => {
            input.checked = false; 
        
    })
}

const endQuiz = () =>{
   document.getElementById("box").innerHTML = `<h3> Thank you for playing the quiz</h3>
   <h2> ${corrects} / ${wrong} are correct </h2>`
};

loadQuestion();