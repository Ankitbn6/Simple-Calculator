var nums=document.querySelectorAll("#container>div");
    var bag=nums[0];
    console.log(nums);
    for(var i=0;i<nums.length;i++)
    {
        nums[i].addEventListener("click",myCalculator);
    }
    
    function myCalculator()
    {   
        
        var targetNumber=event.target.innerText;
        
        switch(targetNumber)
        {
            case "C":
                bag.innerText="";
                break;
            case "=":
                bag.innerText=eval(bag.innerText);
                if(bag.innerText =="undefined")
                bag.innerText="";
                break;
            default:
                bag.innerText=bag.innerText+targetNumber;
        }
    }