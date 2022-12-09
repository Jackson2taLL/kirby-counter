let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
let total = 0;
let totalEl = document.getElementById("total-el");
let busCount = 0;
let busEl = document.getElementById("bus-el");

function increment() {
    count += 1;
    countEl.textContent = count;
};

function save() {
    total += count;
    totalEl.textContent = "Total Daily Passengers: " + total;
    busCount += 1
    busEl.textContent = "Bus #" + busCount;
    let countStr = count + " | ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
};

function reset() {
    saveEl.textContent = "Previous Entries: ";
    totalEl.textContent = "Total Daily Passengers: 0";
    busEl.textContent = "No Buses";
    total = 0;
    busCount = 0;
};