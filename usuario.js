const aplication = document.querySelector('containe')

const getUrl = new URLSearchParams(window.location.search)
id = getUrl.get('id')

const url = 'https://jsonplaceholder.typicode.com/users'

console.log (`${url}/${id}`)

fetch(`${url} / ${id}`)
.then (res => res.json())
.then(data =>
    {
        const name_ = document.createElement('p')
        name_.innerHTML = data.name
        const email = document.createElement('p')
        email.innerHTML = name_.email
        aplication.appendChild(name_
            )
        aplication.appendChild(email)
    })
.catch(err => console.log(err))