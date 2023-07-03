const getUsers = () => {
    document.getElementsByClassName('users-container')[0].innerHTML = ''
    fetch('http://127.0.0.1:3000/users')
        .then((data) => data.json())
        .then((users) => {
            users.forEach((user) => {
                let element = document.createElement('div')
                element.classList.add('user-card')
                element.innerHTML = `<div class="id">id:<span class="value">${user.id}</span></div>
                                <div class="name">
                                    name:<span class="value">${user.name}</span>
                                </div>
                                <div class="email">
                                    email:<span class="value">${user.email}</span>
                                </div>
                                <div class="age">age:<span class="value">${user.age}</span></div>`

                document
                    .getElementsByClassName('users-container')[0]
                    .appendChild(element)
            })
        })
}
getUsers()

const sendUser = () => {
    document.querySelector('.user-form>.submit').disabled = true
    let body = {
        id: document.querySelector('.user-form>.id').value,
        name: document.querySelector('.user-form>.name').value,
        email: document.querySelector('.user-form>.email').value,
        age: document.querySelector('.user-form>.age').value,
    }
    fetch('http://127.0.0.1:3000/users', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            getUsers()
            alert('create user was successful')
            document.querySelector('.user-form>.submit').disabled = false
            document.querySelector('.user-form>.submit').blur()
        })
        .catch((err) => {
            alert('create user failed', err)
            document.querySelector('.user-form>.submit').disabled = false
            document.querySelector('.user-form>.submit').blur()
        })
}
