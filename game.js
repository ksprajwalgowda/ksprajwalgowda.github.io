

var p1 = 0
var p2 = 1

function resetb()
{
    
    if( p1 == 0){
        console.log("p2 winner");
        
        confirm("player 2 winner")
    }
    else{
        console.log("p1 winner");
        confirm("player 1 winner")
    }
    document.getElementById("square_one_text").innerText = ""
    document.getElementById("square_two_text").innerText = ""
    document.getElementById("square_three_text").innerText = ""
    document.getElementById("square_four_text").innerText = ""
    document.getElementById("square_five_text").innerText = ""
    document.getElementById("square_six_text").innerText = ""
    document.getElementById("square_seven_text").innerText = ""
    document.getElementById("square_eight_text").innerText = ""
    document.getElementById("square_nine_text").innerText = ""
    p1 = 0;
    p2 = 1;
}


function checkt()
{
    var s1 = document.getElementById("square_one_text").innerText
    var s2 = document.getElementById("square_two_text").innerText
    var s3 = document.getElementById("square_three_text").innerText
    var s4 = document.getElementById("square_four_text").innerText
    var s5 = document.getElementById("square_five_text").innerText
    var s6 = document.getElementById("square_six_text").innerText
    var s7 = document.getElementById("square_seven_text").innerText
    var s8 = document.getElementById("square_eight_text").innerText
    var s9 = document.getElementById("square_nine_text").innerText


    if((s1 == s2 && s2 == s3 && s1 !="") )
    {
        console.log("winner");
        resetb();
    }

    if((s4 == s5 && s5 == s6 && s4 !="") )
    {
        console.log("winner");
        resetb();
    }

    if((s7 == s8 && s8 == s9 && s7 !="") )
    {
        console.log("winner");
        resetb();
    }

    if((s1 == s4 && s4 == s7 && s1 !="") )
    {
        console.log("winner");
        resetb();
    }

    if((s2 == s5 && s5 == s8 && s2 !="") )
    {
        console.log("winner");
        resetb();
    }

    if((s3 == s6 && s6 == s9 && s3 !="") )
    {
        console.log("winner");
        resetb();
    }
    if((s1 == s5 && s5 == s9 && s1 !="") )
    {
        console.log("winner");
        resetb();
    }

    if((s3 == s5 && s5 == s7 && s3 !="") )
    {
        console.log("winner");
        resetb();
    }



}

document.getElementById("square_one").onclick = function() {
    var s1 = document.getElementById("square_one_text").innerText
    if (s1 == "")
    {
        if(p2 == 0)
        {
            document.getElementById("square_one_text").innerText = "o"
            p1 = 0
            p2 = 1
            console.log("p2");
        }
        else
        {
            document.getElementById("square_one_text").innerText = "x"
            p1 = 1
            p2 = 0
            console.log("p1");
        }
        checkt()
        
    }
}

document.getElementById("square_two").onclick = function() {
    var s1 = document.getElementById("square_two_text").innerText
    if (s1 == "")
    {
        if(p2 == 0)
        {
            document.getElementById("square_two_text").innerText = "o"
            p1 = 0
            p2 = 1
            console.log("p2");
        }
        else
        {
            document.getElementById("square_two_text").innerText = "x"
            p1 = 1
            p2 = 0
            console.log("p1");
        }
        checkt()
        
    }
}

document.getElementById("square_three").onclick = function() {
    var s1 = document.getElementById("square_three_text").innerText
    if (s1 == "")
    {
        if(p2 == 0)
        {
            document.getElementById("square_three_text").innerText = "o"
            p1 = 0
            p2 = 1
            console.log("p2");
        }
        else
        {
            document.getElementById("square_three_text").innerText = "x"
            p1 = 1
            p2 = 0
            console.log("p1");
        }
        checkt()
        
    }
}

document.getElementById("square_four").onclick = function() {
    var s1 = document.getElementById("square_four_text").innerText
    if (s1 == "")
    {
        if(p2 == 0)
        {
            document.getElementById("square_four_text").innerText = "o"
            p1 = 0
            p2 = 1
            console.log("p2");
        }
        else
        {
            document.getElementById("square_four_text").innerText = "x"
            p1 = 1
            p2 = 0
            console.log("p1");
        }
        checkt()
        
    }
}


document.getElementById("square_five").onclick = function() {
    var s1 = document.getElementById("square_five_text").innerText
    if (s1 == "")
    {
        if(p2 == 0)
        {
            document.getElementById("square_five_text").innerText = "o"
            p1 = 0
            p2 = 1
            console.log("p2");
        }
        else
        {
            document.getElementById("square_five_text").innerText = "x"
            p1 = 1
            p2 = 0
            console.log("p1");
        }
        checkt()
        
    }
}

document.getElementById("square_six").onclick = function() {
    var s1 = document.getElementById("square_six_text").innerText
    if (s1 == "")
    {
        if(p2 == 0)
        {
            document.getElementById("square_six_text").innerText = "o"
            p1 = 0
            p2 = 1
            console.log("p2");
        }
        else
        {
            document.getElementById("square_six_text").innerText = "x"
            p1 = 1
            p2 = 0
            console.log("p1");
        }
        checkt()
        
    }
}


document.getElementById("square_seven").onclick = function() {
    var s1 = document.getElementById("square_seven_text").innerText
    if (s1 == "")
    {
        if(p2 == 0)
        {
            document.getElementById("square_seven_text").innerText = "o"
            p1 = 0
            p2 = 1
            console.log("p2");
        }
        else
        {
            document.getElementById("square_seven_text").innerText = "x"
            p1 = 1
            p2 = 0
            console.log("p1");
        }
        
        checkt()
        
    }
}

document.getElementById("square_eight").onclick = function() {
    var s1 = document.getElementById("square_eight_text").innerText
    if (s1 == "")
    {
        if(p2 == 0)
        {
            document.getElementById("square_eight_text").innerText = "o"
            p1 = 0
            p2 = 1
            console.log("p2");
        }
        else
        {
            document.getElementById("square_eight_text").innerText = "x"
            p1 = 1
            p2 = 0
            console.log("p1");
        }
        
        checkt()
    }
}


document.getElementById("square_nine").onclick = function() {
    var s1 = document.getElementById("square_nine_text").innerText
    if (s1 == "")
    {
        if(p2 == 0)
        {
            document.getElementById("square_nine_text").innerText = "o"
            p1 = 0
            p2 = 1
            console.log("p2");
        }
        else
        {
            document.getElementById("square_nine_text").innerText = "x"
            p1 = 1
            p2 = 0
            console.log("p1");
        }
        
        checkt()
    }
}