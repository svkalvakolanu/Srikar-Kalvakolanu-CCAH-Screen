let copyText = document.querySelector("p")

let currentURL = window.location.href

if(currentURL.split("=")[1] == "returning"){
    copyText.innerHTML = "Thanks for coming back to the website!"
}