// functions

function openMenu(){
    const navBar = document.getElementById("nav");
    if(navBar.style.display == "flex"){
        navBar.style.display = "none";
        document.getElementsByClassName("closeNavBar")[0].style.display = "none"
    }else{
        navBar.style.display = "flex";
        document.getElementsByClassName("closeNavBar")[0].style.display = "block"
    }
}
function navigateToHome(){
    location.assign("./index.html"); 
}

function handleSubmit(){
    const tip = document.getElementById("tip").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    let counter = localStorage.getItem("counter");
    if(counter=="" || counter==undefined || counter==null){
        counter=0;
    }
    if(tip!="" && name!="" && email!="" && cidade!="" && estado!=""){
    counter++;
    localStorage.setItem("counter", counter);
    localStorage.setItem("tip"+"-"+counter, tip+"-"+name+"-"+email+"-"+cidade+"-"+estado);
    }
}

function loadTips(){
    document.getElementById("list").innerHTML="";
    const counter = localStorage.getItem("counter");
    for(let i=1; i<=counter; i++){
        const tipString = localStorage.getItem("tip"+"-"+i);
        if(tipString!=null){
            const array = tipString.split("-");
            const tip = array[0];
            const name = array[1];
            const email = array[2]; 
            const cidade = array[3]; 
            const estado = array[4]; 
        
            document.getElementById("list").innerHTML = 
            `
            ${document.getElementById("list").innerHTML}
            <div>
            <li>${tip} <img class="delete" id="${"tip"+"-"+i}" src="./Assets/x.png"></li>
            <p>${name}(${email}) - ${cidade},${estado}</p>
            <div/>
            `;
        }
    }
}

const buttons = document.querySelectorAll('.delete');

document.body.addEventListener('click', function (evt) {
    if (evt.target.className === 'delete') {
        let tipId = evt.target.id;
        localStorage.removeItem(tipId);
        location.reload();
    }
}, false);


function deleteTip(){
    localStorage.removeItem(tip);
}

window.onload = function() {
    if (window.location.href.match('dicas.html') != null) {
    loadTips();
    }
}

function handleClear(){
    document.getElementById("tip").value="";
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("cidade").value="";
    document.getElementById("estado").value="";
}

function handleClearAll(){
    localStorage.clear(); 
    location.reload();
}

function filtre(){
    loadTips();
    const term = document.getElementById("filter").value;
    const lista = document.getElementById("list");
    const array = lista.children;
    let contains = false;
    for(let i=0; i<array.length;i++){
        contains = array[i].innerHTML.includes(term);
        if(!contains){
            array[i].style.display="none";
        }
    }
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
            <a href="./estatico.html">Estático</a>
            <a href="./dinamico.html">Dinâmico</a>
        </div>
        <a href="./dicas.html">Dicas</a>
        <a href="./sobre.html">Sobre</a>
    </nav>
    <div onclick="openMenu()" class="closeNavBar"></div>
</header>
`;