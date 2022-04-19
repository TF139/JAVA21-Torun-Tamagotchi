import { Tamagotchi } from "./moduler/Tamagotchi.js";

document.querySelector("#submitName").addEventListener("click", startMyTama);

function startMyTama(e) {
    e.preventDefault();

    let name = document.querySelector("#enterName").value;
    let newTamagotchi = new Tamagotchi(name);

    let select = document.getElementById('tamaType');
    let value = select.options[select.selectedIndex].value;
    const img = document.querySelector("#tamaTypeName");
    if(value == "dog"){
        img.src = "img/tamaDog.jpg";
    }
    else{
        img.src = "img/tamaCat.jpg"
    }
    
    document.querySelector("#tamaName").innerText = name;
    document.querySelector("#hunger").innerText = newTamagotchi.getHunger();
    document.querySelector("#happy").innerText = newTamagotchi.getHappiness();
    
    newTamagotchi.hungerDrain();
    newTamagotchi.happinessDrain()

    document.querySelector("#eat").addEventListener("click", feedTama);
    document.querySelector("#play").addEventListener("click", playTama);

    function feedTama() {
        newTamagotchi.feed();
        document.querySelector("#hunger").innerText = newTamagotchi.getHunger();
    }

    function playTama() {
        newTamagotchi.play();
        document.querySelector("#happy").innerText = newTamagotchi.getHappiness();
    }
}