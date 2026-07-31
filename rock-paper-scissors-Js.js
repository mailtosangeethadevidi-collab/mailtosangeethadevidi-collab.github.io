 let score=JSON.parse(localStorage.getItem('score')) || 
             {
                wins:0,
                losses:0,
                ties:0

              };


        

            // if(!score){
            //    score={ wins:0,
            //     losses:0,
            //     ties:0
            //    };

            // }
      
  updateScoreElement();

  function playGame(playerMove){
    const compMove=pickComputerMove();
    let res='';
    if(playerMove==='rock'){

      if(compMove=='rock'){
        res='tie';
      }
      else if(compMove=='paper'){
        res=' You lose';
      }
      else
      res='You win';
   }

   else if(playerMove==='paper'){
      if(compMove=='paper'){
        res='tie';
      }
      else if(compMove=='scissor'){
        res='You lose';
      }
      else
      res='You win';
   }
   else if(playerMove=='scissor'){

      if(compMove=='scissor'){
        res='tie';
      }
      else if(compMove=='rock'){
        res='You lose';
      }
      else
      res='You win';

   }

   if(res==='You win'){
    score.wins++;
   }
   else if(res==='You lose'){
    score.losses++;
   }
   else
   score.ties++;

   localStorage.setItem('score',JSON.stringify(score));

   document.querySelector('.js-result').innerHTML=res;

   document.querySelector('.js-moves').innerHTML=`You 
    <img class="move-icon" src="/rock-paper-scissor-photos/${playerMove}.png">
    <img class="move-icon" src="/rock-paper-scissor-photos/${compMove}.png">
    computer `;


   updateScoreElement();
    

  }


  function updateScoreElement(){
     document.querySelector('.js-score')
          .innerHTML=`Wins:${score.wins} , Losses:${score.losses} , Ties:${score.ties}`;

  }
 
  function pickComputerMove(){
    let compMove='';
    let move=Math.random();
    if(move>=0&&move<1/3)
       compMove='rock';
    else if(move>=1/3&&move<2/3)
     compMove='paper';
    else
      compMove='scissor';
    return compMove;
  }
