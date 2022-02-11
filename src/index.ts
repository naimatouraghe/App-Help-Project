

// constantes
const url = 'https://web-help-request-api.herokuapp.com/users'
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
