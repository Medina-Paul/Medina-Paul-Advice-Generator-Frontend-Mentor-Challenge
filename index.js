const url = "https://api.adviceslip.com/advice";
const mainButton = document.getElementById("mainButton");
const adviceNumber = document.getElementById("adviceNumber");
const quoteDisplay = document.getElementById("quoteDisplay");

mainButton.addEventListener("click", getSomeHelp)

async function getSomeHelp(){
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error();
        } 
        const data = await response.json();
        displayAdvice(data);
    } catch(error){
        console.error(Error);
    }
}

function displayAdvice(data){
    const {slip:{advice, id}} = data;
    quoteDisplay.textContent = `"${advice}"`
    adviceNumber.textContent = `ADVICE #${id}`
}

