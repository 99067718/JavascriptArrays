// '|' means workday, '||' means weekend
var Days = ["|Maandag", "|Dinsdag", "|Woensdag", "|Donderdag", "|Vrijdag", "||Zaterdag", "||Zondag","||Extra dag"];
var InversedDays = [...Days].reverse();

for (i = 0; i < Days.length; i++){
    document.getElementById("AllDays").innerText = document.getElementById("AllDays").innerText + Days[i].replace("|", " ").replace("|", " ")
}
var amountOfWorkDays = 0; // I want to make the days editable \\
for (i = 0; i < Days.length; i++){
    if (!Days[i].includes("||")){
        document.getElementById("WorkDays").innerText = document.getElementById("WorkDays").innerText + Days[i].replace("|", " ").replace("|", " ")
    }
}
var amountOfWeekendDays = 0;
for (i = 0; i < Days.length; i++){
    if (Days[i].includes("||")){
        document.getElementById("WeekendDays").innerText = document.getElementById("WeekendDays").innerText + Days[i].replace("|", " ").replace("|", " ")
    }
}

for (i = 0; i < InversedDays.length; i++){
    document.getElementById("AllDaysReversed").innerText = document.getElementById("AllDaysReversed").innerText + InversedDays[i].replace("|", " ").replace("|", " ")
}
var amountOfWorkDays = 0; // I want to make the days editable \\
for (i = 0; i < InversedDays.length; i++){
    if (!InversedDays[i].includes("||")){
        document.getElementById("WorkDaysReversed").innerText = document.getElementById("WorkDaysReversed").innerText + InversedDays[i].replace("|", " ").replace("|", " ")
    }
}
var amountOfWeekendDays = 0;
for (i = 0; i < InversedDays.length; i++){
    if (InversedDays[i].includes("||")){
        document.getElementById("WeekendDaysReversed").innerText = document.getElementById("WeekendDaysReversed").innerText + InversedDays[i].replace("|", " ").replace("|", " ")
    }
}