const questionContainer = document.getElementById('question-container')

const questions = [
  {
    question: 'What clef is this?',
    choices: ['Treble Clef', 'Tenor Clef', 'Bass Clef', 'Alto Clef'],
    imgLink: "assets/images/clef-1.jpg",
    answerIndex: 0,
  },
  {
    question: 'What type of rest is this?',
    choices: ['Minim Rest', 'Semiquaver Rest', 'Crotchet Rest', 'Quaver Rest'],
    imgLink: 'assets/images/rest-1.png',
    answerIndex: 2,
  },
  {
    question: 'What is the key signature?',
    choices: ['E Minor', 'D Major', 'E Major', 'G Major'] ,
    imgLink: 'assets/images/key-signature1.jpg',
    answerIndex: 1,
  },
  {
    question: 'What is the name of this percussion instrument?',
    choices: ['Cymbals', 'Xylophone', 'Side Drum', 'Timpani'],
    imgLink: 'assets/images/orchestra-1.png',
    answerIndex: 3,
  },
  {
    question: 'This rest is a:',
    choices: ['Quaver Rest', 'Semibreve Rest', 'Semiquaver Rest', 'Minim Rest'], 
    imgLink: 'assets/images/rest-2.png',
    answerIndex: 0,
  },
  {
    question: 'The time signature indicates:', 
    choices: ['2 minim beats in a bar', '4 quaver beats in a bar', '4 minim beats in a bar', '4 crotchet beats in a bar'],
    imgLink: 'assets/images/music-symbol1.png',
    answerIndex: 3,
 },
 {
    question: 'What is the key signature?',
    choices: ['G Major', 'G Minor', 'F# Minor', 'C Major'],
    imgLink: 'assets/images/key-signature2.png',
    answerIndex: 0,
},
{
    question: 'Which note is this?',
    choices: ['F', 'Middle C', 'A', 'E'],
    imgLink: 'assets/images/note.png',
    answerIndex: 1,
},
{
    question: 'In which orchestral family does this instrument belong?',
    choices: ['Percussion', 'Brass', 'Strings', 'Woodwind'],
    imgLink: 'assets/images/orchestra-2.png',
    answerIndex: 3,
},
{
    question: 'This rest is a:',
    choices: ['Semibreve Rest', 'Demisemiquaver Rest', 'Crotchet Rest', 'Semiquaver Rest'],
    imgLink: 'assets/images/rest-3.png',
    answerIndex: 1,
}
];

const quizContainer = document.getElementById('quiz-container');

let currentQuestionIndex = 0

questionContainer.innerHTML = generateQuestionHTML(questions[currentQuestionIndex])