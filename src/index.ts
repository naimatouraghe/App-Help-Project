

// constantes
const url = 'https://web-help-request-api.herokuapp.com/users'
//@ts-ignore


// variables 
let button = document.getElementById('butt')

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
            //@ts-ignore
            // butt_name.addEventListener('submit', function (e) {
            //     //@ts-ignore
            //     username2.innerhtml = butt_name.value
            // })
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
    const ticket_user: any = document.getElementById('ticket_user')
    const getOption = ticket_user.value
    const arrgetOption = getOption.split("")
    const id = arrgetOption[0]
    console.log(ticket, id)
    
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


function disableTicket(element?: any) {
    const url = `https://web-help-request-api.herokuapp.com/tickets`
    fetch(url).then(response => response.json().then((element) => console.log(element.data[0].done)))
}
getUsers()

let formBody = document.getElementById("formBody")

function showArray() {
    let username: string;
    //1. APPELLER LES FONCTIONS NECESSAIRES
    getTickets().then((tickets: any) => {
        getUsers().then((users: any) => {
            //    async function getUsersId(){
            //        for (let i=0; element.length; i++){
            //              if (elm.data[i].users_id == element[i].id){
            //             return console.log(element.username)
            //        }
            //        }

            //    }
            //console.log("mavar:", mavariable)
            //3. INJECTER LA DATA 
            console.log('mon elm:', tickets)
            console.log("mon user:",users)
            tickets.data.forEach((ticket: any) => {
            //    users.data.filter ((element: any )=> {
            //         element.id == ticket.users_id
            //         username = element.username
            //     })
                users.data.forEach((user: any) => {
                    console.log(ticket.users_id == user.id)
                    if (ticket.users_id == user.id) {
                        username = user.username
                        
                        //return console.log(username)
                    }
                });
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
// getUsers()

showArray()
