const questionContainer = document.getElementById('question-container')

const questions = [
  {
    'question': 'What clef is this?',
    'a': 'Treble Clef',
    'b': 'Tenor Clef',
    'c': 'Bass Clef',
    'd': 'Alto Clef',
    'correctAnswer': 'a'
  },
  {
    'question': 'What type of rest is this?',
    'a': 'Minim Rest',
    'b': 'Semiquaver Rest',
    'c': 'Crotchet Rest',
    'd': 'Quaver Rest',
    'correctAnswer': 'c'
  },
  {
    'question': 'What is the key signature?',
    'a': 'E Minor',
    'b': 'D Major',
    'c': 'E Major',
    'd': 'G Major',
    'correctAnswer': 'b'
  },
  {
    'question': 'What is the name of this percussion instrument?',
    'a': 'Cymbals',
    'a': 'Xylophone',
    'a': 'Side Drum',
    'a': 'Timpani',
    'correctAnswer': 'a'
  },
  {
    'question': 'This rest is a:', 
    'a': 'Quaver Rest',
    'b': 'Semibreve Rest',
    'c': 'Semiquaver Rest',
    'd': 'Minim Rest',
    'correctAnswer': 'a'
  },
  {
    'question': 'The time signature indicates:', 
    'a': '2 minim beats in a bar',
    'b': '4 quaver beats in a bar',
    'c': '4 minim beats in a bar',
    'd': '4 crotchet beats in a bar',
    'correctAnswer': 'd'
 },
 {
    'question': 'What is the key signature?',
    'a': 'G Major',
    'b': 'G Minor',
    'c': 'F# Minor',
    'd': 'C Major',
    'correctAnswer': 'a'
},
{
    'question': 'Which note is this?',
    'a': 'F',
    'b': 'Middle C',
    'c': 'A',
    'd': 'E',
    'correctAnswer': 'b'
},
{
    'question': 'In which orchestral family does this instrument belong?',
    'a': 'Percussion',
    'b': 'Brass',
    'c': 'Strings',
    'd': 'Woodwind',
    'correctAnswer': 'd'
},
{
    'question': 'This rest is a:',
    'a': 'Semibreve Rest',
    'b': 'Demisemiquaver Rest',
    'c': 'Crotchet Rest',
    'd': 'Semiquaver Rest',
    'correctAnswer': 'b'
}
]

let currentQuestionIndex = 0

questionContainer.innerHTML = generateQuestionHTML(questions[currentQuestionIndex])