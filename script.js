// $.ajax({
//     url: 'https://randomuser.me/api/?results=5&nat=au',
//     dataType: 'json',
//     success: (data) => {printUsers(data.results)},
//     error: (e) => {console.log(e)}
//     // success : function(data) {
//     //     printUsers(data);
//     // }
//     // success: (data) => {console.log(data)}
//     //success: printUsers
// });

// fetch('https://randomuser.me/api/?results=5&nat=au')
//   .then(response => response.json())
//   .then(data => {printUsers(data.results)})
//   .catch(e => {console.log(e)});

async function getData(){
    let response = await fetch('https://randomuser.me/api/?results=5&nat=au')
    let data = await response.json()
    printUsers(data.results)
}

const divUsers = document.querySelector(".users")
console.log(divUsers)
// const ul = document.createElement("ul")
// divUsers.appendChild(ul)

function createUser(user){
    let divUser = document.createElement("div")
    let name = document.createElement("h4")
    let email = document.createElement("p")
    let image = document.createElement("img")
    image.src = user.picture.medium
    divUser.appendChild(image)
    name.innerText = user.name.first + " " + user.name.last
    divUser.appendChild(name)
    email.innerText = user.email
    divUser.appendChild(email)
    divUsers.appendChild(divUser)

}

function printUsers(users){
    console.log(users)
    for (user of users){
        console.log(user.name.first + " " + user.name.last)
        console.log(user.email)
        createUser(user)
    }
    
}

getData()