postButton.onclick = function (event) {
    event
        .preventDefault();
    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        telephone: document.getElementById("phone").value
    }
    console.log(user);

    fetch("https://httpbin.org/post", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/JSON; charset=UTF-8'
            },
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error));
}