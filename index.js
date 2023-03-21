const btnEl = document.getElementById("btn");
const factEl = document.getElementById("fact")

const apiKey= "5a1GwZnzagcHnnp9Q0OGEw==efGeeVPOXC16ryYA";

const options = {
    method:"GET",
    headers:{
        "X-Api-key":apiKey
    }
}

const apiURL="https://api.api-ninjas.com/v1/facts?limit=1"


async function getFact(){
    try {
    factEl.innerText = "Updating..."
    btnEl.disabled= true;
    btnEl.innerText = "Loading..."
    const response = await fetch(apiURL,options)
    const data = await response.json()

    btnEl.disabled= false;
    btnEl.innerText = "Tell me a fact"
    factEl.innerText = data[0].fact;
        
    } catch (error) {
        factEl.innerText = "Something went wrong, try again later";
        btnEl.disabled= false;
        btnEl.innerText = "Tell me a fact"
    }
    
}

btnEl.addEventListener("click",getFact)