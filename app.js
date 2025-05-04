let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const uscore = document.getElementById("user-score");
const cscore = document.getElementById("comp-score");
const msg = document.querySelector("#msg");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
    });
});



const getcompchoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const optionsIdx = Math.floor(Math.random(options) * 3);
    return options[optionsIdx];
}

const showwiner = (user,userchoice,compchoice) => {
    if (user) {
        msg.innerText = `You Won! 🎉 Your ${userchoice} Beat's ${compchoice}`;
        msg.style.backgroundColor = "green";
        userscore = userscore + 1;
        uscore.innerText = userscore;
    } else {
        msg.innerText = `You Loss. 😥 ${compchoice} Beat's Your ${userchoice}`;
        msg.style.backgroundColor = "red";
        compscore = compscore + 1;
        cscore.innerText = compscore;
    }
}
const playgame = (userchoice) => {
    const compchoice = getcompchoice();
    if (userchoice === compchoice) {
        msg.innerText = "Its A drow! 🤝"
        msg.style.backgroundColor = "";
    } else {
        let user = true;
        if (userchoice === "Rock") {
            user = compchoice === "Paper" ? false : true
        } else if (userchoice === "Paper") {
            user = compchoice === "Scissors" ? false : true
        } else {
            user = compchoice === "Rock" ? false : true
        }
        showwiner(user,userchoice,compchoice);
    }
};