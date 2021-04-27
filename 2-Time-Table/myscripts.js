

const table = document.getElementById("table")
const arrow = document.getElementById("arrow");
const toChange = document.getElementById("toChange");
const weak = document.getElementById("weak");


arrow.onclick = () => {
    console.log(arrow.src);
    if (arrow.title === "Weak b"){
        arrow.src = "./ressources/arrow2.png";
        arrow.style.margin = "auto 80% auto 33%";
        weak.innerHTML = "Time table 1G3 Weak b"
        arrow.title = "Weak a"
        table.innerHTML = timeTableTwo;
    } else {
        arrow.src = "./ressources/arrow1.png"
        arrow.style.margin = "auto 40% auto 70%"
        arrow.title = "Weak b"
        weak.innerHTML = "Time table 1G3 Weak a"
        table.innerHTML = timeTableOne;
    }
}


