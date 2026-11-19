API = "./patrons.json"

async function getPatrons(){
    const respone = await fetch(API)
    const data = await respone.json()
}