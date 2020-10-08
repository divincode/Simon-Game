$(document).ready(function(){
    console.log("hi");
    $(document).on("keypress",function(){
      var a= [];  
      var level=1;
      while(level)
      {
        var heading="Round  "+level.toString();
        console.log(heading);
        $("h1").text(heading);
        var n=Math.floor((Math.random()*10));
        n=n%4;
        n=n+1;
        a.push(n);
        animatesss(n);
        break;
        var result=play(a);
        if(result)
        {
            $("h1").text("You lost press any key to restart");
            level=0;
        }
        else
        {
            level++;
        }        
      }
    });
  });

  function play(a)
  {

      var temp=[];

      var i=0,j=0;
      do{
        i++;
        j++;
      }while(a[i]===temp[j])
  }

  function animatesss(n)
  {
      var audio = new Audio('Audio/beep.mp3');
      audio.play();
      switch(n)
      {
          case 1:
            $("#grey").animate({
                opacity:"0.2"
            },"slow"    
            );
            $("#grey").animate({
                opacity:"1"
            },"slow"    
            );
          break;
          case 2:
            $("#blue").animate({
                opacity:"0.2"
            },"slow"    
            );
            $("#blue").animate({
                opacity:"1"
            },"slow"    
            );
          break;  
          case 3:
            $("#yellow").animate({
                opacity:"0.2"
            },"slow"    
            );
            $("#yellow").animate({
                opacity:"1"
            },"slow"    
            );
          break; 
          case 4:
            $("#green").animate({
                opacity:"0.2"
            },"slow"    
            );
            $("#green").animate({
                opacity:"1"
            },"slow"    
            );
          break;               
      }
  }