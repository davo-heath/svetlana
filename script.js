// Constants to hook into the DOM elements needed to operate Svetlana
const ANSWER = document.querySelector("#answer-text");
const QUESTION = document.querySelector("#question-text");
const RESET = document.querySelector(".reset-button");
const ASK = document.querySelector(".ask-button");
const HARP = document.querySelector("#harp");
const INTRO = document.querySelector("#intro");

// Object constructor which allows for Svetlana's answers to be authored and stored. Type is  acategory that will be used to add more customisation later on.
function answer(sound, answer) {
    this.sound = sound;
    this.answer = answer;
};

// variable holding Svetlana's answers for when somebody is too lazy for question mark
failedQuestion = [
    new answer("intro", "Svetlana insists you use question mark properly."),
    new answer("intro", "No question mark at the end BAD, like KGB visit."),
    new answer("intro", "Donald Trump's leadership is big question mark. Maybe you should use question mark when ask question."),
    new answer("intro", "Svetlana says question with no question mark at end is no question."),
]

// variable holding Svetlana's answers to questions
fortuneTeller = [
    new answer("intro", "Svetlana is worried this is not going to end well."),
    new answer("intro", "Svetlana thinks you would have more joy playing with Donald Trump's tiny pee pee."),
    new answer("intro", "KGB agent probably hunt you down if you do that."),
    new answer("harp", "Svetlana thinks is good idea, but you must wear chicken foot as necklace for safety."),
    new answer("harp", "Sounds good, but must eat Borscht first."),
    new answer("intro", "Svetlana does not recommend."),
    new answer("harp", "Putin would look favourably on this plan."),
    new answer("harp", "Good plan, make sure you have hammer and sickle nearby."),
    new answer("harp", "Svetlana thinks maybe you should wait until the sun rises again before doing that."),
    new answer("intro", "That idea should be thrown in bonfire and never spoken of again."),
    new answer("harp", "Like chicken soup, that plan will make you feel good."),
    new answer("intro", "Svetlana thinks you'd be better off styling eyebrow with angle grinder."),
    new answer("intro", "Svetlana is worried. Maybe wait until next week."),
    new answer("intro", "Svetlana thinks is bad idea, like unregulated nuclear testing."),
    new answer("intro", "Svetlana sees stormy cloud if you continue."),
    new answer("intro", "You should take that plan, bury in Siberian forest and never speak of it again."),
    new answer("intro", "Hmmmm, this is a tricky one for Svetlana - 50/50. You will lose respect but gain COVID."),
    new answer("harp", "Proceed, but only with carefully washed hands."),
    new answer("intro", "That idea is like Stalin, best disposed of."),
    new answer("intro", "Like investing in Harmony One, Svetlana think this will not improve your life."),
    new answer("harp", "Idea is beautiful, like St. Petersburg."),
    new answer("harp", "Proceed carefully and if you see tractor, stop immediately."),
    new answer("harp", "Svetlana thinks maybe yes, but only if wearing long pants."),
    new answer("harp", "That path will lead you to new friends"),
    new answer("intro", "Like Russian folktale, this not end well."),
    new answer("harp", "Go outside, if leaves shaking in the breeze, you should proceed."),
    new answer("intro", "I think you be safer giving Grizzly bear the cuddle."),
    new answer("harp", "Is only good idea If you have drink lemonade in last two week."),
    new answer("intro", "Like small babuschka, let someone else face this one."),
    new answer("harp", "If there is water in your dish sink, Svetlana says yes."),
    new answer("harp", "Only if you are born in the first six months of the year."),
    new answer("harp", "Svetlana has looked into the eye of a duck. The duck indicates a smooth path forward."),
    new answer("harp", "Svetlana thinks you should proceed but only if wearing jumper."),
    new answer("intro", "If you own Ugg boots, I think the answer is no."),
    new answer("intro", "If there is a cat in your house, do not trust your plan."),
    new answer("intro", "The crystal ball foretells big problems here."),
    new answer("intro", "Svetlana is no feel good about this."),
    new answer("intro", "Svetlana is disturbed. Not advised."),
    new answer("harp", "Path is clear and wagon is freshly cleaned. Good day for you."),
    new answer("harp", "Svetlana sees adventure in this. Take many photos."),
    new answer("harp", "Good idea, but only if you have already eaten lunch today."),
    new answer("intro", "Svetlana's wisdom is vast. The problems Svetlana sees here are many."),
    new answer("harp", "If your first name contains letter A, then yes. If not, drink a cup of tea to avoid big problem."),
    new answer("harp", "This only good idea if you have not seen your 40th birthday."),
    new answer("harp", "If there is lemon in your kitchen you will be safe."),
    new answer("harp", "Only if you have owned pet rabbit in your life."),
    new answer("intro", "If you have travelled to the USA capitalist pigs, there will be suffering."),
    new answer("harp", "Svetlana has asked local goat farmer. Answer is yes."),
    new answer("harp", "Only works for people who have eat fried potatoes in last seven days."),
    new answer("intro", "The government will be suspicious if you proceed."),
    new answer("intro", "Like capitalist dog, you will face rebellion if you proceed."),
    new answer("intro", "Svetlana was champion weightlifter when she young. This not champion idea."),
    new answer("harp", "If you have hiked in forest in last two weeks, you can safely do this."),
    new answer("intro", "Svetlana does not like the scene in the crystal ball."),
    new answer("harp", "Like sending dog into space, this idea will show your strength."),
    new answer("intro", "You should put plan in box, put weights on and send to bottom of Lake Baikal."),
    new answer("intro", "This stupid idea, like America."),
    new answer("harp", "This good idea, but only if you between 20 and 40 year old."),
    new answer("harp", "This best idea Svetlana hear, since 1965. Great success will follow."),
    new answer("harp", "Plan best washed down with vodka."),
    new answer("harp", "Some days are challenges some days are gifts!"),
    new answer("harp", "Svetlana had dream about this. It work out well."),
    new answer("harp", "Probably good idea, but must wear hat while doing."),
    new answer("intro", "Best done only if raining."),
    new answer("harp", "If there is beer in your fridge, Svetlana says yes."),
    new answer("harp", "Putin is perfect man. This is perfect plan."),
    new answer("harp", "Yes if today is Monday, Tuesday or Wednesday, otherwise Svetlana thinks avoid."),
    new answer("harp", "If you have washing on the line then you can feel good."),
    new answer("harp", "If you have drink coffee today the way forward is clear."),
    new answer("intro", "Svetlana thinks if you have blue eyes, you will have success. Else, luck is low."),
    new answer("harp", "Svetlana's tea leaves show promising signs."),
    new answer("harp", "Like Kremlin, you will have strength in the face of adversity."),
    new answer("harp", "Svetlana, thinks if you have white clothing item on, everything will work out well."),
    new answer("harp", "Like communism, benefits will be far and wide."),
    new answer("harp", "This plan is pure, like best vodka."),
    new answer("intro", "Like bad American TV show, probably best to avoid."),
    new answer("harp", "If window is open in your house, the breeze will bring good luck here."),
    new answer("intro", "You should be hopeful, unless born in February."),
    new answer("harp", "Like Russian Caravan, you will go to beautiful places."),
    new answer("harp", "You will be carried forward by the breeze on the shores of the Black Sea."),
    new answer("harp", "Like cabbage, this plan has many benefits."),
    new answer("intro", "Svetlana sees dark clouds coming over the mountains."),
    new answer("harp", "Svetlana thinks if you have ride train this past week it will work out."),
    new answer("intro", "Many famous painting in Hermitage museum. This plan not masterpiece like those."),
    new answer("harp", "You are powerful, like polar bear, and will overcome all obstacles here."),
    new answer("harp", "Svetlana, think yes if you are wearing necklace. If not, plan destined for trouble."),
    new answer("harp", "Like Russian Blue cat, you will find what you seek."),
    new answer("harp", "Svetlana loves bread. If you too have eaten bread today, the path will be free of hurdles."),
    new answer("intro", "Svetlana says when in central Siberia, you must decide alone."),
    new answer("intro", "Take this plan, put in stupid, unreliable American car, and push car off mountaintop into great valley."),
    new answer("intro", "Like state sponsored doping program, problems will come later if you proceed."),
    new answer("intro", "Should be avoided, like Moscow taxi with wildy swerving, vodka-fuelled taxi driver."),
    new answer("harp", "Maybe yes, but only if eat ice-cream in last seven days."),
    new answer("harp", "If you first name contains letter C, Svetlana thinks you should proceed."),
    new answer("intro", "Russian bear is no.1 smart animal, this not no.1 smart plan."),
    new answer("intro", "Should be hopeful, but only if wearing odd socks."),
    new answer("harp", "St Petersburg has most beautiful architecture, this will bring a smile as beautiful as St.Petersburg."),
    new answer("intro", "If milk in fridge is more than half full, answer is yes."),
    new answer("intro", "If there is mirror in room you are in, Svetlana advises against."),
    new answer("intro", "You will face obstacles, like first train after winter snow. Maybe wait until later."),
    new answer("intro", "The curtains of Svetlana's wagon are dusty. This is bad sign for you."),
    new answer("harp", "Hamburger is Svetlana best favourite food. Only good thing about America. Your plan like delicious hamburger."),
    new answer("intro", "Think of last pie you eat. If whole pie is round answer is yes. Any other shape answer is no."),
    new answer("intro", "Plan is turbulent, like Russian politics. Find an easier way."),
    new answer("harp", "This plan brings smile to Svetlana, like sunset over lakeshore campfire."),
    new answer("intro", "Svetlana does not trust the stars today. Plan best avoided."),
    new answer("intro", "If you like dumpling, answer is yes. If you no like dumpling, what's wroing with you?"),
    new answer("harp", "This idea make Svetlana feel warm and comfy, like favourite scarf."),
];

//function to generate an answer for the customer and populate the answer text location
function decisionBitch() {
    
    // Momentary change to display that Svetlana is thinking
    ANSWER.innerHTML ="Svetlana is consulting crystal ball";
    ANSWER.className ="";

    // Populate a noQuestionAnswer variable with a random value from the array of answers for when someone fails to use a question mark    
    let noQuestionNumber = Math.floor((Math.random()*failedQuestion.length));
    let noQuestionAnswer = failedQuestion[noQuestionNumber].answer;

    // Populate a chosenAnswer variable with a random value from the array of answers for when someone ask a question correctly 
    let randomNumber = Math.floor((Math.random()*fortuneTeller.length));
    let chosenAnswer = fortuneTeller[randomNumber].answer;
    let answerSound;
    
    //Container with the value of the text typed in by the customer
    let questionAsked = QUESTION.value;

    // Determinme whether the question asked is valid (true) or not valid (false)
    let validQuestion = questionAsked.endsWith("?");
    console.log(validQuestion);

    // Set the value of answerSound to allow the right audio file to be selected. 
    if (validQuestion == true) {
        answerSound = fortuneTeller[randomNumber].sound;
    } else {
        answerSound = failedQuestion[noQuestionNumber].sound;
    };

    // Conditional statement to determine which audio to play and play it
    if (answerSound == "intro") {
        INTRO.play();
    } else if (answerSound == "harp") {
        HARP.play();
    };

        // function to generate an answer for the customer that plays at the end of the specified audio file.
        INTRO.onended = function generateAnswer() {

            // If/else conditional to choose which array of answers to draw from based on whether the customer correctly asked a question as stored in validQuestion
            if (validQuestion == true) {
                ANSWER.innerHTML = (chosenAnswer);
            } else {
                ANSWER.innerHTML = (noQuestionAnswer);
            };

        };

        HARP.onended = function generateAnswer() {

            // If/else conditional to choose which array of answers to draw from based on whether the customer correctly asked a question as stored in validQuestion
            if (validQuestion == true) {
                ANSWER.innerHTML = (chosenAnswer);
            } else {
                ANSWER.innerHTML = (noQuestionAnswer);
            };

        };

        MOO.onended = function generateAnswer() {

            // If/else conditional to choose which array of answers to draw from based on whether the customer correctly asked a question as stored in validQuestion
            if (validQuestion == true) {
                ANSWER.innerHTML = (chosenAnswer);
            } else {
                ANSWER.innerHTML = (noQuestionAnswer);
            };

        };

    // delayed running of the function to generate an answer so that it feels like Svetlana was thinking
    // setTimeout(generateAnswer, 1600); 

};

//Function to reset Svetlana
function reset() {
QUESTION.value = "";
ANSWER.innerHTML = "Svetlana has many more answers!";
ANSWER.className = "opacity";
console.log("the function is running!")
};

// Event listeners to trigger the appropriate functions when buttons are clicked
ASK.addEventListener('click', decisionBitch, false);
RESET.addEventListener('click', reset, false);

//Listen for the completion of a question via the enter key

// Previous function to use enter for asking question. Ended up being not very intuitive.

// QUESTION.addEventListener('keypress', function (e) {
//     if (e.keyCode == 13) {
//     decisionBitch();
//     }
// }, false);
