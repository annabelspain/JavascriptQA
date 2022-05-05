// Add code here for part 5-7
document.querySelector("button#textColour").addEventListener("click", blueToRed)
document.querySelector("button#bgColour").addEventListener("click",greenToPink)
document.querySelector("button#fonts").addEventListener("click", tnrToArial)

// Do nt change the code between here and the next comment
const blueParagraph = document.querySelector("#blueText");

function blueToRed() {
    blueParagraph.style.color = "red";
    blueParagraph.textContent = blueParagraph.textContent.replace("blue", "red");
};

const greenParagraphs = document.querySelectorAll(".greenBg");

function greenToPink() {
    for(let greenParagraph of greenParagraphs) {
        greenParagraph.className = 'hotpinkBg';
        greenParagraph.textContent = greenParagraph.textContent.replace("green", "hotpink");
    }
}

const tnrParagraph = document.querySelector("#tnrParagraph");

function tnrToArial() {
    tnrParagraph.style.fontFamily = "arial";
    tnrParagraph.textContent = tnrParagraph.textContent.replace("Times New Roman", "Arial");
}

// Add the event handlers for mouse over, mouse out and click on tnrParagraph here and register them
//tnrParagraph.addEventListener("mouseover", mouseOver)

const mouseOver = event => {
    event.target.style.backgroundColor = 'limegreen';
    if(event.target.textContent.indexOf("background")=== -1)
    {
        event.target.textContent += ". I have had my background colour changed on mouse over"
    } else
    {
        event.target.textContent = event.target.textContent.replace("out", "over")
    }
}
blueParagraph.addEventListener("mouseover", mouseOver)

const elementClick = (event) => 
{
    event.target.stylebackgroundColor = "white"
    event.target.textContent = "I have no event listeners attached to me now"
    document.querySelector("button#fonts").removeEventListener('click', tnrToArial)
    event.target.removeEventListener('click', elementClick)
    event.target.removeEventListener('mouseover', mouseOver)
    event.target.removeEventListener('mouseout', mouseOut)

    if (event.target.id == 'tnrParagraph')
    {
        blueParagraph.textContent = "Event listeners enabled"
        blueParagraph.addEventListener('click', elementClick)
        blueParagraph.addEventListener('mouseover', mouseOver)
        blueParagraph.addEventListener('mouseout', mouseOut)
    }
    else{
        tnrParagraph.textContent = "Event listeners enabled"
        tnrParagraph.addEventListener('click', elementClick)
        tnrParagraph.addEventListener('mouseover', mouseOver)
        tnrParagraph.addEventListener('mouseout', mouseOut)
    }
}
tnrParagraph.addEventListener("click", elementClick)