const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const results_Span = document.getElementById('answered-right');
const questionsMissed = document.getElementById('questions-missed');
const submitButton = document.getElementById('submit');
const header = document.getElementsByClassName('header');
const beginButton = document.getElementById('begin');
let choice = '';
const lightgreen = '#00e600';
const red = '#ff3333';
const tvShowQuestions = [

    {
        question: "In Game of Thrones, who is Joffery's dad?",

        answers: {
            a: "Robert Baratheon",
            b: "Jamie Lannister",
            c: "Ned Stark",
            d: "Tywin Lannister"
        },

        correctAnswer: "b"
        // QUESTION: 33
    },
    {
        question: "In Game of Thrones, who does Jon Snow fight for?",

        answers: {
            a: "Night's Watch",
            b: "The living",
            c: "Kingslanding",
            d: "The North"
        },

        correctAnswer: "b"
        // QUESTION: 32
    },
    {
        question: "In Game of Thrones which family held the throne before Baratheon",

        answers: {
            a: "Baellish",
            b: "Tully",
            c: "Bolton",
            d: "Targaryen"
        },

        correctAnswer: "d"
        // QUESTION: 30
    },
    {
        question: "In Game of Thrones which country is Kingslanding apart of?",

        answers: {
            a: "Essos",
            b: "Westoros",
            c: "Beyond the Wall",
            d: "None of the above"
        },

        correctAnswer: "b"
        // QUESTION: 29
    },
    {
        question: "In Harry Potter to activate Marauder's Map what do you solemnly swear?",

        answers: {
            a: "I will use this for good",
            b: "Hail Lord Voldemort",
            c: "I will find treasure",
            d: "I am up to no good"
        },

        correctAnswer: "d"
        // QUESTION: 27
    },
    {
        question: "What household item was Percy Jackson's sword?",

        answers: {
            a: "ruler",
            b: "pencil",
            c: "pen",
            d: "none of the above"
        },


        correctAnswer: "c"
        // QUESTION: 26
    },
    {
        question: "In what year did 'Back to the Future' predict hoverboards to be invented?",

        answers: {
            a: "2016",
            b: "2012",
            c: "2015",
            d: "2013"
        },

        correctAnswer: "c"
        // QUESTION: 25
    },
    {
        question: "How fast did the DeLorean have to go to time travel?",

        answers: {
            a: "88pmh",
            b: "98mph",
            c: "87mph",
            d: "85mph"
        },

        correctAnswer: "a"
        // QUESTION: 24
    },
    {
        question: "Which of the following was a Cartoon Network show?",

        answers: {
            a: "Rocket Power",
            b: "Cow and Chicken",
            c: "Angry Beavers",
            d: "Brandy and Mr. Whiskers"
        },

        correctAnswer: "b"
        // QUESTION: 23
    },
    {
        question: "What is Pikachu's favorite condiment?",

        answers: {
            a: "Hot Sauce",
            b: "Honey Mustard",
            c: "Ketchup",
            d: "Relish"
        },

        correctAnswer: "c"
        // QUESTION: 19
    },
    {
        question: "In Game of Thrones what was the name of Daenerys' horse?",

        answers: {
            a: "Ghost",
            b: "Silver",
            c: "Moon",
            d: "Ice"
        },

        correctAnswer: "b"

    },
    {
        question: "In Game of Thrones which memeber of the Stark family's direwolf was named Nymeria?",

        answers: {
            a: "Rob",
            b: "Sansa",
            c: "Bran",
            d: "Arya"
        },

        correctAnswer: "d"

    },
    {
        question: "Who was Tommy's best friend in Rugrats?",

        answers: {
            a: "Phill",
            b: "Chucky",
            c: "Stew",
            d: "Cynthia"
        },

        correctAnswer: "b"

    },
    {
        question: "What color is Finn's backback in Adventure Time?",

        answers: {
            a: "Blue",
            b: "Green",
            c: "Orange",
            d: "Red"
        },

        correctAnswer: "b"

    },
    {
        question: "What drink did Spongebob forget on his pizza delivery?",

        answers: {
            a: "Kelp Juice",
            b: "Krabby Kola",
            c: "Diet Dr. Kelp",
            d: "Kelp-a-Kola"
        },

        correctAnswer: "c"

    },
    {
        question: "Which of the following is not an element from Captian Planet?",

        answers: {
            a: "Earth",
            b: "Water",
            c: "Fire",
            d: "Air"
        },

        correctAnswer: "d"

    },
    {
        question: "Who is the leader of the Wight Walkers?",

        answers: {
            a: "The Ice King",
            b: "King Beyond The Wall",
            c: "Night King",
            d: "None of the above"
        },

        correctAnswer: "c"

    },
    {
        question: "Who's Treasure are the Goonies trying to find in 'The Goonies'?",

        answers: {
            a: "Dread Pirate Roberts",
            b: "Davy Jones",
            c: "Jack Sparrow",
            d: "Three-Eyed Willy"
        },

        correctAnswer: "d"

    },
    {
        question: "Who is Jon Snow's best friend?",

        answers: {
            a: "Theon",
            b: "Tyrion",
            c: "Samwell",
            d: "Bran"
        },

        correctAnswer: "c"

    },
    {
        question: "In Game of Thrones who is Ramsay's first prisoner?",

        answers: {
            a: "Theon",
            b: "Sansa",
            c: "Jon",
            d: "Rickon"
        },

        correctAnswer: "a"

    },
];
const videoGameQuestions = [

    {
        question: "In Monster Hunter World what is the name of the place you eat?",

        answers: {
            a: "Canteen",
            b: "Palico Pub",
            c: "Cat Hall",
            d: "The Tavern"
        },

        correctAnswer: "a"
        // QUESTION: 28
    },
    {
        question: "In Dark Souls what was before fire?",

        answers: {
            a: "Age of Ancients",
            b: "Cold",
            c: "Dark",
            d: "Sunlight"
        },

        correctAnswer: "a"

    },
    {
        question: "What does the Old Man give Link in the start of the first Zelda game?",

        answers: {
            a: "A heart container",
            b: "A shield",
            c: "Armour",
            d: "A sword"
        },

        correctAnswer: "d"

    },
    {
        question: "What year did 'The Lengend of Zelda' first release?",

        answers: {
            a: "1987",
            b: "1981",
            c: "1986",
            d: "1984"
        },

        correctAnswer: "c"

    },
    {
        question: "Where do you spawn after completing tutorial island in Runescape?",

        answers: {
            a: "Edgeville",
            b: "Varrock",
            c: "Camelot",
            d: "None of the above"
        },

        correctAnswer: "d"

    },
    {
        question: "Which character always played as Player One in Regular Show?",

        answers: {
            a: "Pops",
            b: "Rigby",
            c: "Mordacai",
            d: "Muscle Man"
        },

        correctAnswer: "c"

    },
    {
        question: "What video game did Mario first appear in?",

        answers: {
            a: "Super Mario",
            b: "Donkey Kong",
            c: "Mario 64",
            d: "Super Smash Bros"
        },

        correctAnswer: "b"

    },
    {
        question: "What is the max total level in Old School Runescape?",

        answers: {
            a: "2039",
            b: "2277",
            c: "2000",
            d: "2170"
        },

        correctAnswer: "b"

    },
    {
        question: "Who is the villian in 'The Legend of Zelda?'",

        answers: {
            a: "Bowser",
            b: "Donkey Kong",
            c: "Gannondorf",
            d: "Scorpion"
        },

        correctAnswer: "c"

    },
    {
        question: "What is the max player lobby in Fortnite?",

        answers: {
            a: "50",
            b: "75",
            c: "100",
            d: "98"
        },

        correctAnswer: "c"

    },
    {
        question: "Who is Mario trying to rescue?",

        answers: {
            a: "Zelda",
            b: "Daisy",
            c: "Peach",
            d: "Link"
        },

        correctAnswer: "c"

    },
    {
        question: "What is the name of Link's sword?",

        answers: {
            a: "Oathkeeper",
            b: "Ironclaw",
            c: "Master Sword",
            d: "Keyblade"
        },

        correctAnswer: "c"

    },
    {
        question: "Who is Sonic the Hedgehog's main enemy?",

        answers: {
            a: "Dr. Eggman",
            b: "Knuckles",
            c: "Tails",
            d: "Shadow"
        },

        correctAnswer: "a"

    },
    {
        question: "Who is the original people of Skyrim",

        answers: {
            a: "Nords",
            b: "Khajit",
            c: "Dark Elves",
            d: "Dragonborn"
        },

        correctAnswer: "a"

    },
    {
        question: "What date did Skyrim come out?",

        answers: {
            a: "12/21/2012",
            b: "11/12/2013",
            c: "11/11/2011",
            d: "10/18/2012"
        },

        correctAnswer: "c"

    },
    {
        question: "What are the undead called in Skyrim",

        answers: {
            a: "Wights",
            b: "White Walkers",
            c: "Dragur",
            d: "Dragon Priest"
        },

        correctAnswer: "c"

    },
    {
        question: "Where did the soldier take an arrow when he was an adventurer?",

        answers: {
            a: "Shoulder",
            b: "Back",
            c: "Foot",
            d: "Knee"
        },

        correctAnswer: "d"

    },
    {
        question: "What skill in Runescape allows you to craft potions?",

        answers: {
            a: "Herblore",
            b: "Crafting",
            c: "Farming",
            d: "Slayer"
        },

        correctAnswer: "a"

    },
    {
        question: "What is the best material in Runescape?",

        answers: {
            a: "Black",
            b: "Iron",
            c: "Adamant",
            d: "Mithril"
        },

        correctAnswer: "c"

    },
    {
        question: "Which is not a starter Pokemon?",

        answers: {
            a: "Pikachu",
            b: "Charmander",
            c: "Totadile",
            d: "Treeko"
        },

        correctAnswer: "a"

    },
];
const superHeroQuestions = [

    {
        question: "From which mythology do the gods give their powers to Shazam?",

        answers: {
            a: "Norse",
            b: "Egyptian",
            c: "Greek",
            d: "Roman"
        },

        correctAnswer: "c"
        // QUESTION: 31
    },
    {
        question: "Who was Batman's third Robin?",

        answers: {
            a: "Tim Drake",
            b: "Dick Grayson",
            c: "Jason Todd",
            d: "Damian Wayne"
        },

        correctAnswer: "a"
        // QUESTION: 22
    },
    {
        question: "In the Marvel Universe who is Thano's love interest?",

        answers: {
            a: "Dark Phoneix",
            b: "Living Tribunal",
            c: "Captian Marvel",
            d: "Death"
        },

        correctAnswer: "d"
        // QUESTION: 18
    },
    {
        question: "Which of the follow is not a member of the original Justice League?",

        answers: {
            a: "Aquaman",
            b: "Green Lantern",
            c: "Shazam",
            d: "Martian Manhunter"
        },

        correctAnswer: "c"

    },
    {
        question: "Which DC Superhero has the sidekick 'Speedy'?",

        answers: {
            a: "Flash",
            b: "Green Arrow",
            c: "Quick Silver",
            d: "Captian Marvel"
        },

        correctAnswer: "b"

    },
    {
        question: "Which publishing company published 'The Green Lantern'?",

        answers: {
            a: "Image",
            b: "Marvel",
            c: "Dectective Comics",
            d: "Dark Horse"
        },

        correctAnswer: "c"

    },
    {
        question: "Who is the smartest?",

        answers: {
            a: "Iron-Man",
            b: "Flash",
            c: "Spiderman",
            d: "Batman"
        },

        correctAnswer: "d"

    },
    {
        question: "Who is the strongest?",

        answers: {
            a: "Superman",
            b: "Hulk",
            c: "Shazam",
            d: "Thor"
        },

        correctAnswer: "a"

    },
    {
        question: "Who is the Flash?",

        answers: {
            a: "Oliver Queen",
            b: "Barry Allen",
            c: "Dick Grayson",
            d: "Arthur Cury"
        },

        correctAnswer: "b"

    },
    {
        question: "Whic of the following is not a Green Lantern",

        answers: {
            a: "Hal Jordan",
            b: "Guy Gardner",
            c: "J'on Jones",
            d: "None of the above"
        },

        correctAnswer: "c"

    },
    {
        question: "What is Bruce Wayne's Dad's name?",

        answers: {
            a: "James",
            b: "Thomas",
            c: "Johnathan",
            d: "None of the above"
        },

        correctAnswer: "b"

    },
    {
        question: "What is Shazam's real name?",

        answers: {
            a: "Billy",
            b: "Barry",
            c: "Bruce",
            d: "Bobby"
        },

        correctAnswer: "a"

    },
    {
        question: "Which of the following is not a member of the Justice League?",

        answers: {
            a: "Green Arrow",
            b: "Red Tornado",
            c: "Nightwing",
            d: "None of the above"
        },

        correctAnswer: "d"

    },
    {
        question: "Which of the following is an X-men?",

        answers: {
            a: "Wolverine",
            b: "Cyclops",
            c: "Jugernaut",
            d: "All of the above"
        },

        correctAnswer: "d"

    },
    {
        question: "What year was Superman first published?",

        answers: {
            a: "1939",
            b: "1938",
            c: "1932",
            d: "1937"
        },

        correctAnswer: "b"

    },
    {
        question: "What color is the Flash's lightining?",

        answers: {
            a: "Blue",
            b: "Yellow",
            c: "Red",
            d: "Green"
        },

        correctAnswer: "b"

    },
    {
        question: "Which of the following is not a Batman villian?",

        answers: {
            a: "Zsasz",
            b: "Killer Croc",
            c: "Killer Moth",
            d: "None of the above"
        },

        correctAnswer: "d"

    },
    {
        question: "Who caused the invasion on New York in the Avengers?",

        answers: {
            a: "Loki",
            b: "Ultron",
            c: "Vison",
            d: "Odin"
        },

        correctAnswer: "a"

    },
    {
        question: "Who is not a member of the Avengers?",

        answers: {
            a: "Spiderman",
            b: "Hulk",
            c: "Wolverine",
            d: "Thor"
        },

        correctAnswer: "c"

    },
    {
        question: "Who is not a Justice League villian?",

        answers: {
            a: "Brainiac",
            b: "Darksied",
            c: "Steppenwolf",
            d: "None of the above"
        },

        correctAnswer: "d"

    },
];
let myQuestions;

function displayTopic() {
    const topics = [];
    const output = [];
    topics.push(
        `<label>
        <input type = "radio"
        name = "topic"
        value = "TV/Movies/Books"
        class = "topic"
        id="correct-answer"
        onchange = "setChoice(this)" >
        "TV/Movies/Books"
      </label>`
    );
    topics.push(
        `<label>
        <input type = "radio"
        name = "topic"
        value = "Video Games"
        class = "topic"
        id="correct-answer"
        onchange = "setChoice(this)" >
        "Video Games"
      </label>`
    );
    topics.push(
        `<label>
        <input type = "radio"
        name = "topic"
        value = "Superheroes"
        class = "topic"
        id="correct-answer"
        onchange = "setChoice(this)" >
        "Superheroes"
      </label>`
    );
    output.push(
        `<div class="active-slide">
        <div class="question">Choose your topic, yo.</div>
       <div class="answers">${topics.join("")}</div>
     </div>`
    );
    var previousButton = document.getElementById("previous");
    var nextButton = document.getElementById("next");
    previousButton.style.display = "none";
    nextButton.style.display = "none";
    submitButton.style.display = "in-line";
    let topicPrompts = document.querySelectorAll('.topic');
    quizContainer.innerHTML = output.join(' ');
};

function setChoice(event) {
    console.log(event.value);
    if (event.checked) {
        console.log(event.value);
        choice = event.value;
        setTopic();
    } else {
        console.error("Go fuck yourself");
    }

};

function setTopic() {
    if (choice === "TV/Movies/Books") {
        myQuestions = tvShowQuestions;
    } else if (choice === "Video Games") {
        myQuestions = videoGameQuestions;
    } else {
        myQuestions = superHeroQuestions;
    }
    console.log("Working");
    submitButton.addEventListener("click", quiz);
};

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
};

function quiz() {
    function buildQuiz() {
        console.log("Running");
        shuffle(myQuestions);
        let myQuestionsLength = myQuestions.length - 10;
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.slice(-10).forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // add an HTML raidal button
                if (answers === currentQuestion.correctAnswer) {
                    answers.push(
                        `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}" id="correct-answer">
                    ${letter.toUpperCase()} :
                  ${currentQuestion.answers[letter]}
                      </label>`
                    );
                } else if (answers != currentQuestion.correctAnswer) {
                    answers.push(
                        `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter.toUpperCase()} :
                  ${currentQuestion.answers[letter]}
                      </label>`
                    );
                }
            }
            // add this question and its answers to the output
            output.push(
                `<div class="slide">
               <div class="question">${currentQuestion.question}</div>
               <div class="answers">${answers.join("")}</div>
               <div class="question">Qustion: ${questionNumber + 1} / ${myQuestionsLength}</div>
             </div>`
            );
        });
        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join(' ');
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let myQuestionsLength = myQuestions.length - 10;

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        //myQuestions.slice(-10)
        myQuestions.slice(-10).forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = 'input[name=question' + questionNumber + ']:checked';
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
            const question = document.getElementsByClassName('.question')
            let correctAnswer = document.getElementById('correct-answer');
            console.log(correctAnswer);

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;
                // color the answers Green
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                //color answer red
                answerContainers[questionNumber].style.color = 'red';
                //correctAnswer.style.color = 'lightgreen';

            }
        });
        // show number of correct answers out of total
        let numMissed = (myQuestionsLength - numCorrect);
        let playerScore = (numCorrect / (myQuestionsLength) * 100);
        resultsContainer.innerHTML = Math.floor(playerScore) + "%";
        questionsMissed.innerHTML = "You missed: " + numMissed + " questions!";
        if (playerScore >= 80) {
            resultsContainer.style.color = lightgreen;
            questionsMissed.style.color = lightgreen;
        } else {
            resultsContainer.style.color = red;
            questionsMissed.style.color = red;
        }

    }



    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }



    // display quiz right away
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
}

//quiz()
displayTopic();
