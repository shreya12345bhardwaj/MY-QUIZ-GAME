class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("light blue")
    //write code to show a heading for showing the result of Quiz
    text ("RESULT OF THE QUIZ",350,20);
    text("*NOTE- Contestant who answered correctly are highlighted in GREEN",120,230)
    //call getContestantInfo( ) here
   Contestant.getPlayerInfo();
   var shreya = 260
    //write condition to check if contestantInfor is not undefined
   if(allContestants!=undefined){
     for(var I in allContestants){
       var correctAnswer = "2"
       shreya = shreya+30
       if(allContestants[I].answer == correctAnswer){
         fill("Green")
       }else{fill("red")}
       text(allContestants[I].name+":"+allContestants[I].answer,250,shreya);
     }
   }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
