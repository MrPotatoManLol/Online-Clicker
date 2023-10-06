// Vars \\
let Cash = 0;

let CurrentImprovement = 0;
let ImproveTotalBonus = 0;

let CashPerSecond = 0;
let DefaultCashPerSecond = 0;

let CashPerClick = 1;
let DefaultCashPerClick = 1;

let Upgrade1Amt = 0;
let Upgrade2Amt = 0;


// Default Cost Vars \\
const DEFAULT_UPGRADE1_COST = 10;
const DEFAULT_UPGRADE2_COST = 100;


// Cost Vars \\
let Upgrade1Cost = DEFAULT_UPGRADE1_COST;
let Upgrade2Cost = DEFAULT_UPGRADE2_COST;

// Misc Vars \\
const VERSION = "Pre-Release";

  
// HTML Elements \\
const cashAmtVar = document.getElementById("cashAmtVar");
const cashPerClickAmtVar = document.getElementById("cashPerClickAmtVar");
const currentImproveVar = document.getElementById("currentImproveVar");
const cashPerSecVar = document.getElementById("cashPerSecVar");

const Upgrade1AmtVar = document.getElementById("Upgrade1Amount");
const Upgrade2AmtVar = document.getElementById("Upgrade2Amount");

const giveCashButton = document.getElementById("giveCash");


// Upgrade Buttons \\
const Upgrade1Button = document.getElementById("Upgrade1Cost");
const Upgrade2Button = document.getElementById("Upgrade2Cost");
  
// Run On Start \\
console.log("Current Version: " + VERSION);
Update();
  
// Functions \\
function Update() {
  cashAmtVar.innerHTML = Cash.toString();
  currentImproveVar.innerHTML = CurrentImprovement.toString();
  cashPerClickAmtVar.innerHTML = CashPerClick.toString();
  cashPerSecVar.innerHTML = CashPerSecond.toString();
    
  Upgrade1AmtVar.innerHTML = Upgrade1Amt.toString();
  Upgrade2AmtVar.innerHTML = Upgrade2Amt.toString();

  Upgrade1Button.innerHTML = Upgrade1Cost.toString();
  Upgrade2Button.innerHTML = Upgrade2Cost.toString();
}
  
function giveCash() {
  Cash += CashPerClick;
  Update();
}

// Upgrade Functions \\
function Upgrade(UpgradeType) {
  switch (UpgradeType) {
    case ("Upgrade1"):
    	if (Cash >= Upgrade1Cost) {
        Cash -= Upgrade1Cost;
        CashPerClick += 1;
        Upgrade1Cost += Math.floor(Upgrade1Cost * 0.50);
        Upgrade1Amt += 1;
        Update();
      } else {
        console.log("Not enough Cash");
      }
    break;
            
    case ("Upgrade2"):
      if (Cash >= Upgrade2Cost) {
    	  Cash -= Upgrade2Cost;
    		CashPerSecond += 1;
        Upgrade2Cost += Math.floor(Upgrade2Cost * 0.55);
        Upgrade2Amt += 1;
        Update();
      } else {
        console.log("Not enough Cash");
      }
    break;
  }
}



function loadGame() {
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.cash !== "undefined") Cash = savedGame.cash;
  if (typeof savedGame.cashPerClick !== "undefined") CashPerClick = savedGame.cashPerClick;
  if (typeof savedGame.cashPerSec !== "undefined") CashPerSecond = savedGame.cashPerSec;
  if (typeof savedGame.upgrade1Amt !== "undefined") Upgrade1Amt = savedGame.upgrade1Amt;
  if (typeof savedGame.upgrade1Cost !== "undefined") Upgrade1Cost = savedGame.upgrade1Cost;
  if (typeof savedGame.upgrade2Amt !== "undefined") Upgrade2Amt = savedGame.upgrade2Amt;
  if (typeof savedGame.upgrade2Cost !== "undefined") Upgrade2Cost = savedGame.upgrade2Cost;
}
    
  
function saveGame() {
  var gameSave = {
    cash: Cash,
    cashPerClick: CashPerClick,
    cashPerSec: CashPerSecond,
    upgrade1Amt: Upgrade1Amt,
    upgrade1Cost: Upgrade1Cost,
    upgrade2Amt: Upgrade2Amt,
    upgrade2Cost: Upgrade2Cost
  }
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
  console.log("Saved Game");
}

window.onload = function() {
  loadGame();
  Update()
}

setInterval(function() {
  saveGame();
  console.log("Autosaved");
}, 15000) // 15000 ms = 15 seconds

setInterval(function() {
  Cash += CashPerSecond;
  Update();
}, 1000) // 1000 ms = 1 second

