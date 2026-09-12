
let quizContainer = document.querySelector(".quiz-cont");
let nextbtn = document.querySelector("#nextBtn");
let statusbar = document.querySelector("#statusbar");
let questionEl = document.querySelector('.question');
let choicesEl = document.querySelectorAll('#choices'); 
let choicesLabel = document.querySelectorAll('#choicesLabel');
let proceedText = document.createElement('p');
let proceedBtn = document.createElement('a');
let proceedContainer1 = document.createElement('div');
let proceedContainer2 = document.createElement('div');
let bodyEl = document.querySelector('body');
proceedContainer1.appendChild(proceedText);
proceedContainer2.appendChild(proceedBtn);

/*1. What is barya?
    a.Coins
    b.Change
    c.Comdom
    d.Tiwala
  2. What is our favorite restaurant?
    a.Ramen Nagi
    b.Italianis
    c.Ramen Kuroda
    d.Mc Donalds
  3. What kind of chocolate I gave you the first time?
    a.White chocolate
    b.Dark salted chocolate
    c.nicknacks
    d.Tobleron
  4. Where did we travel the first time we traveled together? (out of town)
    a.Bukidnon
    b.Dark Continent
    c.Tanay
    d.La union
  5.Fill in the blanks. I want you to be_____
    a.Beautiful
    b.Satisfied
    c.Happy
    d.Yehey
*/

const questions = [
    ["What is barya?", "Coins", "Change", "Condom", "Tiwala", "Condom"],
    ["What is our favorite restaurant?", "Ramen Nagi", "Italianis", "Ramen Kuroda", "Mc Donalds", "Ramen Kuroda"],
    ["What kind of chocolate I gave you the first time?", "White chocolate", "Dark salted chocolate", "nicknacks", "Tobleron", "Dark salted chocolate"],
    ["Where did we travel the first time we traveled together? (out of town)", "Bukidnon", "Dark Continent", "Tanay", "La Union", "La Union"],
    [".Fill in the blanks. I want you to be_____", "Beautiful", "Satisfied", "Happy", "Yehey", "Happy"],
]

let currentQuestion = 0;

const questionPrinter = (current) => {

    questionEl.textContent = questions[current][0];
    choicesLabel[0].innerHTML = questions[current][1];
    choicesLabel[1].innerHTML = questions[current][2];
    choicesLabel[2].innerHTML = questions[current][3];
    choicesLabel[3].innerHTML = questions[current][4];

    return current;
}


questionPrinter(currentQuestion)





nextbtn.addEventListener("click", () => {
    
    // quizContainer.classList.toggle("animateQuiz")

    let selectedRadioLabel = document.querySelector('input[name="choicesRad"]:checked + label');

    try {
      if (selectedRadioLabel.textContent != null || selectedRadioLabel.textContent != undefined) {
      
      
      

      if (selectedRadioLabel.textContent == questions[currentQuestion][5]) {

        currentQuestion += 1;
        
        
        let selectedRadio = document.querySelector('input[name="choicesRad"]:checked');
        selectedRadio.checked = false


        let computedStyle = getComputedStyle(statusbar, ':before');
        let width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
        statusbar.style.setProperty('--width', width + 20)
        console.log(width);
        
        questionPrinter(currentQuestion)
        console.log("bubu");

      } else if (selectedRadioLabel.textContent != questions[currentQuestion][5]) {
        quizContainer.classList.toggle("animateQuiz")
      }

    }
    } catch (error) {
      quizContainer.innerHTML = '';

      proceedText.innerHTML = "Nice on, Lalab!!"
      proceedBtn.innerHTML = "Proceed"

      proceedText.className = "proceedText"
      proceedBtn.className = "proceedBtn"
      
      quizContainer.appendChild(proceedContainer1);
      quizContainer.appendChild(proceedContainer2);
      quizContainer.classList.add("quizProceed")
      // proceedText.classList.toggle('proceedText');
      // proceedBtn.classList.toggle('proceedBtn');


      proceedBtn.href = "suprise.html"

      

      
    }

    // console.log(selectedRadio.textContent);
});



// console.log(computedStyle);
// console.log(width);