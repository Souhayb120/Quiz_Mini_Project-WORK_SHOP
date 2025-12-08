let username;
let email;



document.getElementById("submit").onclick = function () {
 
email = document.getElementById("email").value;
username = document.getElementById("name").value;
    //  email = document.getElementById("email").value = "";
    //  username = document.getElementById("name").value = "";
    setData()
}
function setData() {
    localStorage.setItem("name", username)
}

function getData() {
    localStorage.getData("name")
}


function display() {
    getData()

    document.getElementById("id").innerHTML = username;

}

display()

//  window.location.href = `index.html`;




