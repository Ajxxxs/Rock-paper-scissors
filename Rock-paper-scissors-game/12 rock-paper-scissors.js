let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loss: 0,
  tie: 0
};

updatescoreelement();





let isautoplaying = false;
let intervalid; 

function autoplay(){
  if(!isautoplaying){
    intervalid = setInterval(function(){
      const playermove = pickcomputermove();
      playgame(playermove);
      },500)
      isautoplaying = true;
    }
    else{
      clearInterval(intervalid);                //to stop the autoplay
    isautoplaying  = false;
    }
  }



function playgame(playermove){  
  const compmove = pickcomputermove();
  let result = '';

if(playermove === 'scissors'){

  if(compmove === 'rock'){
     result = 'you loss';
  }else if(compmove === 'paper'){
     result = 'you win'
  }else if(compmove === 'scissors'){
      result = 'tie'
  }
}
else if(playermove === 'paper'){
  if(compmove === 'rock'){
    result = 'you win';
 }else if(compmove === 'paper'){
    result = 'tie'
 }else if(compmove === 'scissors'){
     result = 'you loss'
 }
}
else if(playermove==='rock'){
  if(compmove === 'rock'){
    result = 'tie';
 }else if(compmove === 'paper'){
    result = 'you loss'
 }else if(compmove === 'scissors'){
     result = 'you win'
 }
}

if(result === 'you win'){
  score.wins += 1;
}
else if (result === 'you loss'){
  score.loss +=1;
}
else if (result === 'tie'){
  score.tie += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updatescoreelement();

document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-moves')
.innerHTML = `
you
<img src="images/${playermove}-emoji.png" class="move-img">
<img src="images/${compmove}-emoji.png" class="move-img">
computer`;

}

function updatescoreelement(){
document.querySelector('.js-score')
.innerHTML = `wins: ${score.wins} loss: ${score.loss} ties: ${score.tie}.`
}

function pickcomputermove(){
  const randnum = Math.random();
  let compmove = ' ';
  
  if(randnum>=0 && randnum< 1/3){
      compmove = 'rock';
  }else if(randnum>=1/3 && randnum< 2/3){
      compmove = 'paper';
  }else if(randnum>=2/3 && randnum< 1){
      compmove = 'scissors';
  }
  return compmove;
}
