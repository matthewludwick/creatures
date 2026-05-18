
        
function showHome()
{
    /*
        loop through all creatures
        
        if creature lives on land, background color green
        if creature lives in water, blue
        if creature lives in air, yellow
        
        */
        document.querySelectorAll("div.creature").forEach(el => {
           let myHome = el.dataset.home;

            switch(myHome){
                case "land":
                    el.style.backgroundColor = "green";
                    break;
                case "water":
                    el.style.backgroundColor = "blue";
                    break;
                case "air":
                    el.style.backgroundColor = "yellow";
                    break;
            }
        });
    
}//end showHome()

function showType()
{
    /*
        loop through all creatures
        
        if creature is an animal, border color solid red
        if creature is an insect, border color is dashed orange
    */
document.querySelectorAll("div.creature").forEach(el => {
           let myType = el.dataset.creatureType;

            switch(myType)
            {
                case "animal":
                    el.style.border = "3px solid red";
                    break;
                case "insect":
                    el.style.border = "3px dashed orange";
                    break;
                
            }
        });

}//end showType()

function clearAll()
{
    /*
        loop through all creatures
        
        clear border back to 1px solid black
        clear background color to white
        
    */
document.querySelectorAll("div.creature").forEach(function(el){
    el.style.backgroundColor = "#fff";
    el.style.border = "2px #000 solid";
    });


}//end clearAll()