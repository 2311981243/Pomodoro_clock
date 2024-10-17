document.getElementById("timer+").addEventListener("click",()=>
    {
      document.getElementById("timerValue").innerText=parseInt(document.getElementById("timerValue").innerText)+1;
    })
    
    document.getElementById("break+").addEventListener("click",()=>
    {
      document.getElementById("breakValue").innerText=parseInt(document.getElementById("breakValue").innerText)+1;
    })
    
    
    document.getElementById("timer-").addEventListener("click",()=>
    {
      document.getElementById("timerValue").innerText=parseInt(document.getElementById("timerValue").innerText)-1;
    })
    
    document.getElementById("break-").addEventListener("click",()=>
    {
      document.getElementById("breakValue").innerText=parseInt(document.getElementById("breakValue").innerText)-1;
      console.log(document.getElementById("breakValue").innerText)
    })
    
    
    var mins=document.getElementById("mins")
    var secs=document.getElementById("secs")
    var stoper
    var stoper1
    var para
    function start()
    {
        stoper=setInterval(function()
    {
      var timerValue=parseInt(document.getElementById("timerValue").innerText);
        if(secs.innerText<9)
          secs.innerText="0"+(parseInt(secs.innerText)+1);
        else
          secs.innerText=parseInt(secs.innerText)+1;
       if(secs.innerText==60)
       {
         secs.innerText=0;
         if(mins.innerText<9)
          mins.innerText="0"+(parseInt(mins.innerText)+1);
        else
          mins.innerText=parseInt(mins.innerText)+1;
       }
       if(mins.innerText==timerValue)
       {
        para=document.createElement("p");
      para.innerText="BREAK TIME";
      document.getElementById("display").appendChild(para);
        document.getElementById("timerValue").innerText='0';
        stop();
        breaktime();
       }
     },1000)
    }
    function stop() 
    {
      clearInterval(stoper);
      mins.innerText="00";
      secs.innerText="00";
    
    }
    function breaktime()
    {
      stoper1=setInterval(function()
    {
      var breakValue=parseInt(document.getElementById("breakValue").innerText);
        if(secs.innerText<9)
          secs.innerText="0"+(parseInt(secs.innerText)+1);
        else
          secs.innerText=parseInt(secs.innerText)+1;
       if(secs.innerText==60)
       {
         secs.innerText=0;
         if(mins.innerText<9)
          mins.innerText="0"+(parseInt(mins.innerText)+1);
        else
          mins.innerText=parseInt(mins.innerText)+1;
       }
       if(mins.innerText==breakValue)
       {
        document.getElementById("breakValue").innerText=0;
        stop1();
       }
     },1000)
    }
    function stop1()
    {
      clearInterval(stoper1);
      mins.innerText="00";
      secs.innerText="00";
      document.getElementById("display").removeChild(para);
    }
    function cancel()
    {
      mins.innerText="00";
      secs.innerText="00";
      document.getElementById("breakValue").innerText=0;
      document.getElementById("timerValue").innerText='0';
    }