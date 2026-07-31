  const quotes = [
  { quote: "Do not let the behavior of others destroy your inner peace.", author: "Dalai Lama" },
  { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { quote: "Slow down. Calm down. Don't worry. Don't hurry. Trust the process.", author: "Alexandra Stoddard" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { quote: "You do not have to see the whole staircase, just take the first step.", author: "Martin Luther King Jr." },
  { quote: "Calm mind brings inner strength and self-confidence, so that's very important for good health.", author: "Dalai Lama" },
  { quote: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Feelings are just visitor, let them come and go.", author: "Mooji" },
  { quote: "Your mind will answer most questions if you learn to relax and wait for the answer.", author: "William S. Burroughs" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "Quiet the mind and the soul will speak.", author: "Ma Jaya Sati Bhagavati" },
  { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { quote: "Rule your mind or it will rule you.", author: "Horace" },
  { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { quote: "Today is a good day to try.", author: "Quasimodo" },
  { quote: "In the middle of a difficulty lies opportunity.", author: "Albert Einstein" },
  { quote: "Nothing can bring you peace but yourself.", author: "Ralph Waldo Emerson" },
  { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma" },
  { quote: "The primary cause of unhappiness is never the situation but your thoughts about it.", author: "Eckhart Tolle" },
  { quote: "You must do the things you think you cannot do.", author: "Eleanor Roosevelt" },
  { quote: "A year from now you may wish you had started today.", author: "Karen Lamb" },
  { quote: "Within you, there is a stillness and a sanctuary to which you can retreat at any time.", author: "Hermann Hesse" },
  { quote: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },
  { quote: "Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight.", author: "Benjamin Franklin" },
  { quote: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { quote: "Remember that sometimes not getting what you want is a wonderful stroke of luck.", author: "Dalai Lama" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { quote: "Anxiety is a thin stream of fear trickling through the mind. If encouraged, it cuts a channel into which all other thoughts are drained.", author: "Arthur Somers Roche" },
  { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { quote: "He who has a calm and happy nature will hardly feel the pressure of age.", author: "Plato" },
  { quote: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
  { quote: "Breathe in deeply to bring your mind home to your body.", author: "Thich Nhat Hanh" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" }
];


function randomQuote(){
 const min=1;
 const max=35;
  let randomNum=Math.floor(Math.random()*(max-min+1));
 let randomQuoteObject=quotes[randomNum];
 let quote=randomQuoteObject.quote;
 let author=randomQuoteObject.author;
 let randomQuoteString='';
 randomQuoteString=`
 <div class="quote"><q>${quote}</q></div>
 <div class="author">- ${author}</div>`;
 document.querySelector('.js-quote-auhtor').innerHTML=randomQuoteString;

}