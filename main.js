API = "./patrons.json"

async function getPatrons(){
    const respone = await fetch(API)
    const data = await respone.json()

    data.forEach(displayPatrons)
}

function displayPatrons(patrons){
    const container = document.getElementById("patrons-table-body")

    const subContainer = document.createElement("tr")
    const subscriber = document.createElement("td")
    const premium = document.createElement("td")
    const paidTotal = document.createElement("td")

    subscriber.textContent = patrons.subscriber
    paidTotal.textContent = patrons.paid_total

    if(patrons.premium === true){
        premium.textContent = "✅"
    } else {
        premium.textContent = "❌"
    }

    if(patrons.paid_total >= 800){
        subContainer.style.backgroundColor = "#Ffd700 !important"
        subContainer.className = "gold"
    }
    
    subContainer.id = "premium"
    subContainer.appendChild(subscriber)
    subContainer.appendChild(premium)
    subContainer.appendChild(paidTotal)
    container.appendChild(subContainer)

    const alerthtml = document.getElementById("alert")

    premium.addEventListener('click', () => setTimeout( function(){
        const alert = document.createElement("div")     
        alert.className = "alert alert-warning"
        alert.role = "alert"
        alert.innerText = "Karbantartás, most ez a funkció nem elérhető"
        alerthtml.appendChild(alert)
    }, 5000))
}
getPatrons()
