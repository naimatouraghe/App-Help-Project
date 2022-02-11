

// constantes
const url = 'https://web-help-request-api.herokuapp.com'
//@ts-ignore


// variables 
let button = document.getElementById('butt')



// function 


button.addEventListener('click', function (e) {
    addUser()
})


function addUser() {
    //@ts-ignore
    const username2: string = document.getElementById('username').value
    //@ts-ignore
    const password = document.getElementById('password').value
    console.log(username2)
    let url = 'https://web-help-request-api.herokuapp.com/users'
    fetch(url, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "POST",
        body: new URLSearchParams({
            'username': `${username2}`,
            'password': `${password}`
        }),
    }).then(response => {
        return console.log(response)
    })
}


function getUsers() {
    fetch(url).then(response => response.json().then((elm) => {
        console.log(elm)
    }))
}



function addTicket() {
    let url = 'https://web-help-request-api.herokuapp.com/tickets'
    fetch(url, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "POST",
        body: `subject=Nouvelle Methode&userId=14`,
    }).then(response => {
        return console.log(response)
    })
}

function getTickets(element?: any) {
    let url = 'https://web-help-request-api.herokuapp.com/tickets'

    fetch(url).then(response => response.json().then((element) => console.log(element)))
}

getTickets()


function disableTicket(element?: any) {
    const url = `https://web-help-request-api.herokuapp.com/tickets`
    fetch(url).then(response => response.json().then((element) => console.log(element.data[0].done)))
}


function showArray() {
    //1. APPELLER LES FONCTIONS NECESSAIRES

    getTickets()
    getUsers()

    //2. CIBLER LES ELEMENTS ET INJECTER LA DATA 

    let formBody = document.getElementById("formBody").innerHTML = `
    <tr>
    <th scope="row">1</th>
    <td>Naima</td>
    <td>texte</td>
    <td>11/12</td>
    
    </tr>
    `



}

showArray()