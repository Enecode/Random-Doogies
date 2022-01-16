function fetchData() {
    fetch("https://random.dog/woof.json")
    .then(Response => console.log(Response))
    .catch(err => console.log(err))
}

fetchData();

function fetchData() {
    fetch("https://random.dog/woof.json")
    .then(Response => {
        return Response.json()
    })
    .then(jsonData => console.log(jsonData.url))
    .catch(err => console.log(err))
}

fetchData();

const imgTag = document.querySelector("#images");
function fetchData() {
    fetch("https://random.dog/woof.json")
        .then(Response => Response.json())
        .then(jsonData => {
            imgTag.style.display = "block";
            imgTag.setAttribute("src", `${jsonData.url}`);
        })
        .catch(err => console.log(err))
}

fetchData();

const getButton = document.querySelector("#getImage");
getButton.addEventListener("click", fetchData);

const getButtons = document.querySelector("#getImage");
const imgTags = document.querySelector("#images");

function fetchData() {
    fetch("https://random.dog/woof.json")
    .then(Response => Response.json())
    .then(jsonData => {
        imgTag.setAttribute("src", jsonData.url);
        imgTag.style.display = "block";
    })
    .catch(err => console.log(err))
}

getButton.addEventListener("click", fetchData);