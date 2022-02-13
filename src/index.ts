

// constantes
const url = 'https://web-help-request-api.herokuapp.com/users'
//@ts-ignore


// variables 
let button = document.getElementById('butt')
//let patch = document.getElementById('btnpatch')

// function 

button.addEventListener('click', function (e) {
    addTicket()
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


async function getUsers() {
    return fetch(url).then(response => response.json().then((elm) => {
        elm.data.forEach((element: any) => {
            let ul = document.getElementById('list_name')
            let li = document.createElement('option')
            ul.appendChild(li)
            li.innerHTML = `<option class ="dropdown-item" id ="ticket_user">${element.id}---${element.username}</option>`
            let butt_name = document.getElementById("butt_name")

        })
        return elm
    }
    ))

}

function addTicket() {
    let url = 'https://web-help-request-api.herokuapp.com/tickets'
    //@ts-ignore
    const ticket: string = document.getElementById('username').value
    //@ts-ignore
    const ticket_user: any = document.getElementById('ticket_user').value;
    const arrgetOption = ticket_user.split("")
    const id = arrgetOption[0]

    fetch(url, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "POST",
        body: new URLSearchParams({
            'subject': `${ticket}`,
            'userId': `${id}`
        }),
    }).then(response => {
        return console.log(response)
    })
}


async function getTickets(element?: any) {

    let url = 'https://web-help-request-api.herokuapp.com/tickets'

    return fetch(url).then(response => response.json().then((element) => { return (element) }))

}
getTickets()


  function disableTicket() {
        fetch('https://web-help-request-api.herokuapp.com/tickets').then((response)=>response.json().then((data)=>{
            fetch(`https://web-help-request-api.herokuapp.com/tickets/${data.data[0].id}`,{
                method: 'PATCH'
            })
        }))

}
getUsers()

let formBody = document.getElementById("formBody")
function showArray() {
    let username: string;
    //1. APPELLER LES FONCTIONS NECESSAIRES
    getTickets().then((tickets: any) => {
        getUsers().then((users: any) => {
            //3. INJECTER LA DATA 
            console.log('mon elm:', tickets)
            console.log("mon user:", users)
            tickets.data.forEach((ticket: any) => {
                users.data.filter((element: any) => {
                    if (element.id == ticket.users_id)
                        username = element.username
                })
                formBody.innerHTML +=
                    `
                            <tr>
                            <th scope="row">${ticket.id}</th>
                            <td>${username}</td>
                            <td>${ticket.subject}</td>
                            <td>${ticket.date}</td>                            
                            </tr>
                            `
            });
            
        })
    }
    )
};

showArray()
//patch.addEventListener('click', disableTicket)
let button1 = document.getElementById('butt1');
button1.addEventListener('click',(e)=>{
    disableTicket();
})
