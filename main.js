let Upgrades = [{
    'name': 'upgrade1',
    'type': 'regular',
    'cost': 10,
    'bonus': 1,
    'isOwned': false,
    'upgradeButton': document.getElementById("upgrade1")
  },
  {
    'name': 'upgrade2',
    'type': 'regular',
    'cost': 100,
    'bonus': 2,
    'isOwned': false,
    'upgradeButton': document.getElementById("upgrade2")
  },
  {
    'name': 'upgrade3',
    'type': 'regular',
    'cost': 250,
    'bonus': 3,
    'isOwned': false,
    'upgradeButton': document.getElementById("upgrade1")
  },
  {
    'name': 'upgrade4',
    'type': 'regular',
    'cost': 500,
    'bonus': 3,
    'isOwned': false,
    'upgradeButton': document.getElementById("upgrade4")
  }
]
let Improvements = [{
    'name': 'improve1',
    'cost': 1000,
    'bonus': 1,
    'isOwned': false,
    'improveButton': document.getElementById("improve1")
  },
  {
    'name': 'improve2',
    'cost': 10000,
    'bonus': 1,
    'isOwned': false,
    'improveButton': document.getElementById("improve2")
  },
  {
    'name': 'improve3',
    'cost': 100000,
    'bonus': 1,
    'isOwned': false,
    'improveButton': document.getElementById("improve3")
  },
  {
    'name': 'improve4',
    'cost': 1000000,
    'bonus': 1,
    'isOwned': false,
    'improveButton': document.getElementById("improve4")
  }
]

// Vars \\
let Cash = 0;
let CurrentImprovement = 0;
let CashPerClick = 1;
let DefaultCashPerClick = 1;
let ImproveTotalBonus = 0;

// Misc Vars \\
const VERSION = "Pre-Release";

// HTML Elements \\
const cashAmtVar = document.getElementById("cashAmtVar");
const currentImproveVar = document.getElementById("currentImproveVar");
const cashPerClickAmtVar = document.getElementById("cashPerClickAmtVar");
const giveCashButton = document.getElementById("giveCash");

// Run On Start \\
console.log("Current Version: " + VERSION);
Update();

// Functions \\
function Update() {
  cashAmtVar.innerHTML = Cash.toString();
  currentImproveVar.innerHTML = CurrentImprovement.toString();
  cashPerClickAmtVar.innerHTML = CashPerClick;
}

function giveCash() {
  alert("Hi");
  Cash += CashPerClick;
  Update();
}

function upgrade(upgradeToBuy, object) {
  let i = 0;
  while (i <= Upgrades.length) {
    if (Upgrades[i].name == upgradeToBuy) {
      if (Cash >= Upgrades[i].cost) {
        object.style.display = 'none';
        Cash -= superUpgrades[i].cost;
        CashPerClick += Upgrades[i].bonus;
        Upgrades[i].isOwned = true;
        Update();
      } else {
        console.log("not enough cash");
      }
      break;
    }
    i++;
  }
}

function improve(improvementToBuy, object) {
  let i = 0;
  while (i <= Improvements.length) {
    if (Improvements[i].name == improvementToBuy) {
      if (Cash >= Improvements[i].cost) {
        object.style.display = 'none';
        Cash = 0;
        ImproveTotalBonus += Improvements[i].bonus;
        CashPerClick = DefaultCashPerClick + ImproveTotalBonus;
        CurrentImprovement += 1;
        Improvements[i].isOwned = true;
        Update();
      } else {
        console.log("not enough cash");
      }
      break;
    }
    i++;
  }
}
