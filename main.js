const inputtext = document.getElementById("input-text");
const btn = document.getElementById("btn");
const Listitem = document.querySelector(".mission-list")

function setMission(){
    localStorage.setItem("List", Listitem.innerHTML);
}

function getMission(){
    Listitem.innerHTML = localStorage.getItem("List");
}


function addMission() {
    let missionvalue = inputtext.value;

    if (!missionvalue) {
        alert("you must type mission!");
    }
    else {
        let li = document.createElement("li");
        let span = document.createElement("span");

        li.textContent = missionvalue;
        span.innerHTML = "&times;";
        Listitem.appendChild(li);
        li.appendChild(span);
    }

    inputtext.value = "";
    
    setMission();
}

btn.addEventListener("click", addMission);

// add task when click to btn


Listitem.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();

    }
    setMission();
})

inputtext.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addMission();
    }
})

getMission();














































