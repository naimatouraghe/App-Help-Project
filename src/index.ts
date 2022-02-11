

// constantes
const url = 'https://web-help-request-api.herokuapp.com/users'
//@ts-ignore
const username2: string = document.getElementById('username').value

// variables 
let button = document.getElementById('butt')

// function 

button.addEventListener('click', function (e) {
    addUser()
})


function addUser() {
    //@ts-ignore

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
            li.innerHTML = `<option class ="dropdown-item">${element.username}</option>`
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

async function getTickets(element?: any) {
    let url = 'https://web-help-request-api.herokuapp.com/tickets'

    return fetch(url).then(response => response.json().then((element) => { return (element) }))

}
getTickets()


function disableTicket(element?: any) {
    const url = `https://web-help-request-api.herokuapp.com/tickets`
    fetch(url).then(response => response.json().then((element) => console.log(element.data[0].done)))
}


let formBody = document.getElementById("formBody")

function showArray() {
    //1. APPELLER LES FONCTIONS NECESSAIRES
    let username:any;
    getTickets().then((elm: any) => {
        getUsers().then((element: any) => {
            //    async function getUsersId(){
            //        for (let i=0; element.length; i++){
            //              if (elm.data[i].users_id == element[i].id){
            //             return console.log(element.username)
            //        }
            //        }

            //    }
            //console.log("mavar:", mavariable)
            //3. INJECTER LA DATA 
            console.log('mon elm:', elm)
            elm.data.forEach((elm: any) => {
                element.data.forEach((element: any) => {
                    if (elm.users_id == element.id) {
                        
                        console.log('ok')
                        username = element.username
                        return console.log(username)
                    }
                }
                    ,
                    formBody.innerHTML +=
                        `
        <tr>
        <th scope="row">${elm.id}</th>
        <td>${username}</td>
        <td>${elm.subject}</td>
        <td>${elm.date}</td>
        
        </tr>
        `
                )


            });
        })
    }
    )
};
// getUsers()

showArray()
