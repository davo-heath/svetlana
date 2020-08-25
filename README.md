# svetlana
Svetlana is a Russian fortune teller who helps indecisive people get stuff done.

This project is a small application for a user to ask a question to the fortune teller via the input in index.html.

Provided the user correctly formats a question Svetlana then provides a random answer from a Javascript variable called fortuneTeller in script.js (which uses the 'answer' object constructor).

The answer appears in the answera area. Buttons exist to ask the question and reset the application.

If users do not format questions correctly the answers are instead selected from the failedQuestion variable (which uses the 'answer' object constructor).

The object contructor also has a field populated with "moo", "harp" or "intro" which controls wchich sound effect is played just prior to the answer being displayed. 

"Harp" is bright sound for positive answers, "Intro" is a sound for foreboding answers and "Moo" is for incorrect questions.

