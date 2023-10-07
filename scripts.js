// functions

function openMenu(){
    document.getElementsByClassName("closedNavbar")[0].style.display = "none";
    document.getElementsByClassName("openNavbar")[0].style.display = "none";
}
function navigateToHome(){
    location.assign("./index.html"); 
}

// components

header.innerHTML = 
`
<header>
    <div class="iconContainer">
        <img onclick="openMenu()" src="./Assets/menu.svg" alt="menu">
        <div onclick="navigateToHome()" class="logoContainer">
            <img src="./Assets/logo.svg" alt="logo">
        </div>
        <img src="./Assets/menu.svg" alt="menu">
    </div>
    <div class="navBar">
    </div>
</header>
`;