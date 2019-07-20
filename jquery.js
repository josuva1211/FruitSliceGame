var playing = false;
var score;
var trialsleft;
var Arr = ['Banana','Burger','Carrot','Pine','Radish','Tree'];
var Step;
var Action;
$(function(){
$("#StartReset").click(function(){
    if(playing == true)
    {
        location.reload();
    }
    else
    {
        playing = true;
        score = 0;
        $("#ScoreValue").html(score);
        $("#TrialsLeft").show();
        $("#GameOver").hide();
        trialsleft = 3;
        AppendTrials();
        $("#StartReset").html("Reset Game");
        MakeFruitsFlow();
    }
});
    
$("#fruit1").mouseover(function(){
    score++;
    $("#ScoreValue").html(score);
    $("#SliceSound")[0].play();
    
    clearInterval(Action);
    $("#fruit1").hide("explode", 500);
    setTimeout(MakeFruitsFlow, 600);
    //MakeFruitsFlow();
    
});

function AppendTrials()
{
    $("#TrialsLeft").empty();
    for(var i=0;i<trialsleft;i++)
    {
        $("#TrialsLeft").append('<img src="LogoMakr_3YxWlZ.png" class="life">');
    }
}

function MakeFruitsFlow()
{
    $("#fruit1").show();
    ChooseFruit();
    $("#fruit1").css({'left' : Math.round(550 * Math.random()),'top' : -30});
    
    Step = 1+ Math.round(3*Math.random());
    
    Action = setInterval(function(){
        $("#fruit1").css('top',$("#fruit1").position().top + Step);
        
        if($("#fruit1").position().top > $("#FruitsContainer").height())
        {
            if(trialsleft > 1)
                {
                    $("#fruit1").show();
                    ChooseFruit();
                    $("#fruit1").css({'left' : Math.round(550 * Math.random()),'top' : -30});

                    Step = 1 + Math.round(5 * Math.random()); 
                    
                    trialsleft--;
                    AppendTrials();
                }
            else
                {
                    playing = false;
                    $("#StartReset").html("Start Game");
                    $("#GameOver").show();
                    $("#GameOver").html('<p>Game Over</p><p>Your Score is' + score + '</p>');
                    $("#TrialsLeft").hide();
                    StopAction();
                }
        }
    }, 10);
}

function ChooseFruit()
{
    $("#fruit1").attr('src',Arr[Math.round(5*Math.random())] + '.png')
}

function StopAction()
{
    clearInterval(Action);
    $("#fruit1").hide(); 
}
});

//Click on the start/reset button
    //Are we playing?
        //Yes
            //Reload game
        //No
            //Show TrialsLeft box
            //Change button text to Reset  game
            //1.Create Random fruit
            //Define a random step
            //2.Move fruit down one step every sec
                //Is fruit low?
                    //No-> Repeat 2
                    //Yes-> Any trials left
                        //Yes->Remove one heart and repeat 1
                        //No->Show game over and change to start game

//Slice Fruit
    //Play Sound
    //EXplode Fruit