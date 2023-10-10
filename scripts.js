// functions

function openMenu(){
    const navBar = document.getElementById("nav");
    if(navBar.style.display == "flex"){
        navBar.style.display = "none";
    }else{
        navBar.style.display = "flex";
    }
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
    <nav id="nav">
        <div>
            <a href="">Estático</a>
            <a href="">Dinâmico</a>
        </div>
        <a href="./sobre.html">Sobre</a>
    </nav>
</header>
`;