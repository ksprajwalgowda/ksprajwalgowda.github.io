

var p1 = 0
var p2 = 1

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
        
        
    }
}