const quotes = [

"You could leave life right now. Let that determine what you do, say, and think. — Marcus Aurelius",

"The trouble is, you think you have time.",

"It is not that we have a short time to live, but that we waste much of it. — Seneca",

"Time is your most valuable non-renewable asset.",

"One day, you will have no tomorrows left.",

"Every moment is borrowed."
];

function calculateLife(){

    const dobInput =
    document.getElementById("dob").value;

    if(!dobInput){
        alert("Please select your date of birth.");
        return;
    }

    const dob = new Date(dobInput);

    const lifespan =
    parseInt(
    document.getElementById("lifespan").value
    );

    const today = new Date();

    const livedDays =
    Math.floor(
    (today - dob)/(1000*60*60*24)
    );

    const totalDays =
    lifespan * 365;

    const remainingDays =
    totalDays - livedDays;

    const progress =
    ((livedDays/totalDays)*100)
    .toFixed(1);

    document
    .getElementById("results")
    .classList.remove("hidden");

    document
    .getElementById("daysLived")
    .innerText =
    livedDays.toLocaleString();

    document
    .getElementById("daysRemaining")
    .innerText =
    remainingDays.toLocaleString();

    document
    .getElementById("lifeProgress")
    .innerText =
    progress + "%";

    document
    .getElementById("message")
    .innerHTML =
    `You have used <span style="color:#d4af37">${progress}%</span> of your journey`;

    document
    .getElementById("cardProgress")
    .innerText =
    progress + "%";

    document
    .getElementById("cardLived")
    .innerText =
    livedDays.toLocaleString();

    document
    .getElementById("cardRemaining")
    .innerText =
    remainingDays.toLocaleString();

    const selectedQuote =
    quotes[
    Math.floor(
    Math.random()*quotes.length
    )];

    document
    .getElementById("quote")
    .innerText =
    selectedQuote;

    document
    .getElementById("cardQuote")
    .innerText =
    selectedQuote;

    setTimeout(()=>{
        document
        .getElementById("progressBar")
        .style.width=
        progress+"%";
    },200);

    generateCalendar(livedDays);
}

function generateCalendar(days){

    const weeksLived =
    Math.floor(days/7);

    const totalWeeks = 4680;

    const calendar =
    document.getElementById("calendar");

    calendar.innerHTML = "";

    for(let i=0;i<totalWeeks;i++){

        const box =
        document.createElement("div");

        box.classList.add("week");

        if(i<weeksLived){
            box.classList.add("lived");
        }
        else{
            box.classList.add("future");
        }

        calendar.appendChild(box);
    }
}

function downloadCard(){

    const card =
    document.getElementById("lifeCard");

    html2canvas(card,{
        scale:2,
        backgroundColor:"#111111"
    }).then(canvas=>{

        const link =
        document.createElement("a");

        link.download =
        "memento-mori-life-card.png";

        link.href =
        canvas.toDataURL("image/png");

        link.click();
    });
}

function createParticles(){

    const container =
    document.getElementById("particles");

    for(let i=0;i<120;i++){

        const p =
        document.createElement("div");

        p.style.position="absolute";
        p.style.width="2px";
        p.style.height="2px";
        p.style.borderRadius="50%";
        p.style.background="#d4af37";

        p.style.left=
        Math.random()*100+"%";

        p.style.top=
        Math.random()*100+"%";

        p.style.opacity=
        Math.random();

        p.style.animation=
        `float ${3+Math.random()*8}s linear infinite`;

        container.appendChild(p);
    }
}

createParticles();

const style =
document.createElement("style");

style.innerHTML = `
@keyframes float{

0%{
transform:translateY(0px);
}

50%{
transform:translateY(-40px);
}

100%{
transform:translateY(0px);
}

}
`;

document.head.appendChild(style);