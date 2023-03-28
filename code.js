// Variables -----

var PMC = {
  health: {
    head: {
      startingHp: 35,
      currentHp: 35,
      dmgMult: 0,
    },
    thorax: {
      startingHp: 85,
      currentHp: 85,
      dmgMult: 0,
    },
    stomach: {
      startingHp: 70,
      currentHp: 70,
      dmgMult: 1.5,
    },
    rightArm: {
      startingHp: 60,
      currentHp: 60,
      dmgMult: 0.7,
    },
    leftArm: {
      startingHp: 60,
      currentHp: 60,
      dmgMult: 0.7,
    },
    rightLeg: {
      startingHp: 65,
      currentHp: 65,
      dmgMult: 1,
    },
    leftLeg: {
      startingHp: 65,
      currentHp: 65,
      dmgMult: 1,
    },
  },
};

var ammoOBJ = {
  '5.56 Nato': {
    '--Select Cartidge--': '',
    M856A1: {
      damage: 54,
      penetration: 37,
      armorDmg: 52,
      frag: 33,
    },
    M856: {
      damage: 59,
      penetration: 23,
      armorDmg: 34,
      frag: 33,
    },
  },
  '.45 ACP': {
    '--Select Cartidge--': '',
    '.45 RIP': {
      damage: 130,
      penetration: 3,
      armorDmg: 12,
      frag: 100,
    },
  },
  '5.45x39': {
    '--Select Cartidge--': '',
    'BS gs': {
      damage: 40,
      penetration: 51,
      armorDmg: 57,
      frag: 17,
    },
    'BT gs': {
      damage: 42,
      penetration: 40,
      armorDmg: 35,
      frag: 16,
    },
  },
  '12x70': {
    '--Select Cartidge--': '',
    RIP: {
      damage: 265,
      penetration: 2,
      armorDmg: 11,
      frag: 100,
    },
  },
  '9x19': {
    '--Select Cartidge--': '',
    'AP 6.3': {
      damage: 52,
      penetration: 30,
      armorDmg: 48,
      frag: 5,
    },
    'PBP gzh': {
      damage: 52,
      penetration: 39,
      armorDmg: 53,
      frag: 5,
    },
    'Pst gzh': {
      damage: 54,
      penetration: 20,
      armorDmg: 33,
      frag: 15,
    },
    RIP: {
      damage: 102,
      penetration: 2,
      armorDmg: 11,
      frag: 0,
    },
  },
};

var armorObj = {
  none: {
    none: {
      destructibility: '',
      class: 0,
      areas: [],
      startingDurability: 0,
      currentDurability: 0,
    },
  },
  'class 6': {
    '--select armor--': {
      none: {
        destructibility: '',
        class: 0,
        areas: [],
        startingDurability: 0,
        currentDurability: 0,
      },
    },
    '5.11 Tactical Hexgrid Plate Carrier': {
      destructibility: 0.45,
      class: 6,
      areas: ['thorax'],
      startingDurability: 50,
      currentDurability: 50,
    },
    'LBT-6094A Slick Plate Carrier': {
      destructibility: 0.7,
      class: 6,
      areas: ['thorax'],
      startingDurability: 80,
      currentDurability: 80,
    },
    'BNTI Zhuk-6a Body Armor': {
      destructibility: 0.8,
      class: 6,
      areas: ['thorax', 'stomach'],
      startingDurability: 75,
      currentDurability: 75,
    },
    'NFM THOR Integrated Carrier': {
      destructibility: 0.5,
      class: 6,
      areas: ['thorax', 'stomach', 'arms'],
      startingDurability: 90,
      currentDurability: 90,
    },
    '6B43 6A Zabralo-Sh Body Armor': {
      destructibility: 0.5,
      class: 6,
      areas: ['arms', 'thorax', 'stomach'],
      startingDurability: 120,
      currentDurability: 120,
    },
  },
  'class 5': {
    '--select armor--': {
      none: {
        destructibility: '',
        class: 0,
        areas: [],
        startingDurability: 0,
        currentDurability: 0,
      },
    },
    'KPP KIASS Korund-VM': {
      destructibility: 0.7,
      class: 5,
      areas: ['thorax', 'stomach'],
      startingDurability: 45,
      currentDurability: 45,
    },
    'BNTI Gzhel-K Body Armor': {
      destructibility: 0.8,
      class: 5,
      areas: ['thorax', 'stomach'],
      startingDurability: 65,
      currentDurability: 65,
    },
    'Hexatac HPC Plate Carrier': {
      destructibility: 0.45,
      class: 5,
      areas: ['thorax'],
      startingDurability: 50,
      currentDurability: 50,
    },
    'FORT Redut-M Body Armor': {
      destructibility: 0.5,
      class: 5,
      areas: ['thorax', 'stomach'],
      startingDurability: 80,
      currentDurability: 80,
    },
    '6B13 M Modified Assulat Armor': {
      destructibility: 0.45,
      class: 5,
      areas: ['thorax', 'stoamch'],
      startingDurability: 60,
      currentDurability: 60,
    },
    'IOTV Gen4 (High Mobility)': {
      destructibility: 0.55,
      class: 4,
      areas: ['thorax', 'stomach'],
      startingDurability: 65,
      currentDurability: 65,
    },
    'IOTV Gen4 (Assualt)': {
      destructibility: 0.55,
      class: 4,
      areas: ['thorax', 'stomach', 'arms'],
      startingDurability: 75,
      currentDurability: 75,
    },
    'IOTV Gen4 (Full Protection)': {
      destructibility: 0.55,
      class: 4,
      areas: ['thorax', 'stomach', 'arms'],
      startingDurability: 110,
      currentDurability: 110,
    },
    'FORT Redut-T5 Body Armor': {
      destructibility: 0.5,
      class: 4,
      areas: ['thorax', 'stomach', 'arms'],
      startingDurability: 120,
      currentDurability: 120,
    },
  },
  'class 4': {
    '--select armor--': {
      none: {
        destructibility: '',
        class: 0,
        areas: [],
        startingDurability: 0,
        currentDurability: 0,
      },
    },
    'HighCom Trooper TFO': {
      destructibility: 0.45,
      class: 4,
      areas: ['thorax'],
      startingDurability: 85,
      currentDurability: 85,
    },
    'NFM THOR Reinforced Vest': {
      destructibility: 0.5,
      class: 4,
      areas: ['thorax', 'stomach'],
      startingDurability: 35,
      currentDurability: 35,
    },
    '6b13 Assualt Armor': {
      destructibility: 0.8,
      class: 4,
      areas: ['thorax', 'stoamch'],
      startingDurability: 47,
      currentDurability: 47,
    },
  },
  'class 3': {
    '--select armor--': {
      none: {
        destructibility: '',
        class: 0,
        areas: [],
        startingDurability: 0,
        currentDurability: 0,
      },
    },
    'BNTI Zhuk-3 Body Armor': {
      destructibility: 0.45,
      class: 3,
      areas: ['thorax', 'stomach'],
      startingDurability: 50,
      currentDurability: 50,
    },
    '6B23-1 Body Armor': {
      destructibility: 0.7,
      class: 3,
      areas: ['thorax', 'stomach'],
      startingDurability: 60,
      currentDurability: 60,
    },
    'BNTI Kirasa-N Body Armor': {
      destructibility: 0.5,
      class: 3,
      areas: ['thorax', 'stomach'],
      startingDurability: 70,
      currentDurability: 70,
    },
  },
  'class 2': {
    '--select armor--': {
      none: {
        destructibility: '',
        class: 0,
        areas: [],
        startingDurability: 0,
        currentDurability: 0,
      },
    },
    'PACA Soft Armor': {
      destructibility: 0.25,
      class: 2,
      areas: ['thorax', 'stomach'],
      startingDurability: 50,
      currentDurability: 50,
    },
    '6B2 Body Armor': {
      destructibility: 0.55,
      class: 2,
      areas: ['thorax', 'stomach'],
      startingDurability: 80,
      currentDurability: 80,
    },
  },
};

var caliberSelcted = '';
var cartridgeSelected = '';
var armorClassSeleceted = '';
var armorSelected = '';

// FUNCTIONS ------

var Countsum = 0;

// Get Hit Count
function getAmmoCount() {
  var count = document.getElementById('count').innerHTML;
  if (count == '') {
    document.getElementById(
      'count'
    ).innerHTML = `Current Hit Count: ${Countsum}`;
  } else {
    Countsum++;
    document.getElementById(
      'count'
    ).innerHTML = `Current Hit Count: ${Countsum}`;
  }
}

// Set Beginning Stats
function setStats() {
  var healthPool = getStartingHealth();
  var colors = getColor(healthPool, healthPool);
  Countsum = 0;
  document.getElementById('count').innerHTML = '';
  getAmmoCount();
  for (zone in PMC.health) {
    var startingHealth = PMC.health[zone].startingHp;
    PMC.health[zone].currentHp = startingHealth;
    document.getElementById(zone + 'BtnHealth').innerHTML =
      startingHealth + '/' + startingHealth;
    changeWidth(zone, startingHealth, startingHealth);
    document.getElementById(zone + 'Btn').style.backgroundColor = 'black';
    document.getElementById(zone + 'Btn').style.color = `white`;
    document.getElementById(zone + 'Btn').style.borderColor =
      'rgb(111, 110, 110)';
    document
      .getElementById(zone + 'Btn')
      .addEventListener('click', wrapperFunction);
  }
  for (armorClass in armorObj) {
    for (armor in armorObj[armorClass]) {
      var starting = armorObj[armorClass][armor].startingDurability;
      armorObj[armorClass][armor].currentDurability = starting;
    }
  }
  document.getElementById('totalHp').innerHTML =
    ' ' + healthPool + '/' + healthPool;
  document.getElementById(
    'totalHp'
  ).style.color = `rgb(${colors.red},${colors.green},0)`;
  document.getElementById(
    'star'
  ).style.color = `rgb(${colors.red},${colors.green},0)`;
}

// Set Health Bar
function changeWidth(zone, newHp, startingHp) {
  var percent = Math.round((newHp / startingHp) * 100);
  var colors = getColor(newHp, startingHp);
  var progress = document.getElementById(zone);
  progress.style.backgroundImage = `repeating-linear-gradient(rgb(${colors.red},${colors.green},0),black)`;
  progress.style.width = percent + '%';
  // star.style.color = `rgb(${colors.red},${colors.green},0)`
}

// Get Dynamic Color
function getColor(current, max) {
  var resp = {
    green: 0,
    red: 0,
  };

  var ratio = current / max;
  resp.green = (ratio - 0.5) * 2;
  resp.green = 255 - (resp.green > 0 ? 0 : resp.green * -1) * 255;

  resp.red = (ratio - 0.5) * 2;
  resp.red = 255 - (resp.red < 0 ? 0 : resp.red) * 255;

  return resp;
}

// Bullet penetration calculator
function willPenetrate(ammo, armor, zone) {}

// Set Current Zone to Blacked State
function setToZero(z) {
  var startingHp = PMC.health[z].startingHp;
  PMC.health[z].currentHp = 0;
  document.getElementById(z + 'BtnHealth').innerHTML = 0 + '/' + startingHp;
  changeWidth(z, 0, startingHp);
  document.getElementById(z + 'Btn').style.backgroundColor = 'black';
  document.getElementById(z + 'Btn').style.color = 'red';
  document.getElementById(z + 'Btn').style.borderColor = 'darkred';
}

// Get Starting HealthPool
function getStartingHealth() {
  sum = 0;
  for (hp in PMC.health) {
    sum += PMC.health[hp].startingHp;
  }
  return sum;
}

// Get Current HealthPool
function GetTotalHeatlh() {
  sum = 0;
  for (hp in PMC.health) {
    sum += PMC.health[hp].currentHp;
  }
  return sum;
}

// Blacked Zone Calculator
function blackedZone(zone, dmg) {
  var newDmg = dmg * PMC.health[zone].dmgMult;
  var remainingLimbs = [];
  for (limb in PMC.health) {
    if (PMC.health[limb].currentHp > 0) {
      remainingLimbs.push(limb);
    }
  }
  remainingLimbs.forEach(function (i) {
    switch (i) {
      case 'head':
        var dmgDistributed = Math.round(newDmg * 0.08);
        getHealth(i, dmgDistributed);
        break;
      case 'thorax':
        var dmgDistributed = Math.round(newDmg * 0.18);
        getHealth(i, dmgDistributed);
        break;
      case 'stomach':
        var dmgDistributed = Math.round(newDmg * 0.16);
        getHealth(i, dmgDistributed);
        break;
      case 'rightArm':
        var dmgDistributed = Math.round(newDmg * 0.14);
        getHealth(i, dmgDistributed);
        break;
      case 'leftArm':
        var dmgDistributed = Math.round(newDmg * 0.14);
        getHealth(i, dmgDistributed);
        break;
      case 'rightLeg':
        var dmgDistributed = Math.round(newDmg * 0.15);
        getHealth(i, dmgDistributed);
        break;
      case 'leftLeg':
        var dmgDistributed = Math.round(newDmg * 0.15);
        getHealth(i, dmgDistributed);
        break;
    }
  });
}

// Zone Calculator
function getHealth(zone, dmg) {
  // if current zone is blacked out
  if (PMC.health[zone].currentHp <= 0) {
    // if current blacked out zone is head or thorax
    if (zone == 'head' || zone == 'thorax') {
      for (zonehp in PMC.health) {
        setToZero(zonehp);
      }
    }
    // if current blacked out zone is not head or thorax, run blackedZone function
    else blackedZone(zone, dmg);
  }
  // current zone is not  blacked out
  else {
    var startingHealth = PMC.health[zone].startingHp;
    var newHealth = PMC.health[zone].currentHp - dmg;
    var remainingDmg = dmg - PMC.health[zone].currentHp;
    // if zone doesnt become blacked out
    if (newHealth > 0) {
      PMC.health[zone].currentHp = newHealth;
      document.getElementById(zone + 'BtnHealth').innerHTML =
        newHealth + '/' + startingHealth;
      changeWidth(zone, newHealth, startingHealth);
    }
    // if zone becomes blacked out
    else {
      // if zone is head or thorax, set all zones to blacked state
      if (zone == 'head' || zone == 'thorax') {
        for (zone in PMC.health) {
          setToZero(zone);
        }
      } // else set current zone to blacked state
      else {
        setToZero(zone);
        // spread remaing damage throughout body
        blackedZone(zone, remainingDmg);
      }
    }
    // set health pool color and number
    var currenthealthPool = GetTotalHeatlh();
    var startingHealhPool = getStartingHealth();
    var colors = getColor(currenthealthPool, startingHealhPool);
    // if PMC is alive
    if (
      currenthealthPool >= 0 &&
      PMC.health.head.currentHp > 0 &&
      PMC.health.thorax.currentHp > 0
    ) {
      document.getElementById('totalHp').innerHTML =
        currenthealthPool + '/' + startingHealhPool;
      document.getElementById(
        'totalHp'
      ).style.color = `rgb(${colors.red},${colors.green},0)`;
      document.getElementById(
        'star'
      ).style.color = `rgb(${colors.red},${colors.green},0)`;
    }
    // if PMC is dead
    else if (
      currenthealthPool <= 0 ||
      PMC.health.head.currentHp <= 0 ||
      PMC.health.thorax.currentHp <= 0
    ) {
      document.getElementById('totalHp').innerHTML =
        ' ' + currenthealthPool + '/' + startingHealhPool;
      document.getElementById(
        'totalHp'
      ).style.color = `rgb(${colors.red},${colors.green},0)`;
      document.getElementById(
        'star'
      ).style.color = `rgb(${colors.red},${colors.green},0)`;
      document
        .getElementById('headBtn')
        .addEventListener('click', wrapperFunction);
      // remove event listeners
      document
        .getElementById('headBtn')
        .removeEventListener('click', wrapperFunction);
      document
        .getElementById('thoraxBtn')
        .removeEventListener('click', wrapperFunction);
      document
        .getElementById('stomachBtn')
        .removeEventListener('click', wrapperFunction);
      document
        .getElementById('rightArmBtn')
        .removeEventListener('click', wrapperFunction);
      document
        .getElementById('leftArmBtn')
        .removeEventListener('click', wrapperFunction);
      document
        .getElementById('rightLegBtn')
        .removeEventListener('click', wrapperFunction);
      document
        .getElementById('leftLegBtn')
        .removeEventListener('click', wrapperFunction);
    }
  }
}

// find if ammo will penetrate armor
function willPen(curDur, maxDur, armClass, bulletPen) {
  var answer = '';
  var chance = Math.random() * 100;
  var armPer = (curDur / maxDur) * 100;
  console.log('armor percentage ' + armPer + '%');
  var armClass = armClass * 10;
  var stopPwr = (121.0 - 5000.0 / (45.0 + armPer * 2.0)) * armClass * 0.01;
  var penChance = 0;

  if (stopPwr >= bulletPen + 15) {
    console.log('will not penetrate');
  } else if (stopPwr >= bulletPen) {
    penChance =
      0.4 *
      Math.round(stopPwr - bulletPen - 15.0) *
      (stopPwr - bulletPen - 15.0);
  } else {
    penChance = Math.round(bulletPen / (0.9 * stopPwr - bulletPen) + 100);
  }
  console.log(penChance + '% Chance to Pen');
  if (chance < penChance) {
    answer = true;
  } else answer = false;
  return answer;
}

// find durability of armor lost
function durabilityLost(bulletPen, bulletArmorDmg, armorMaterial, armClass) {
  var armClass = armClass * 10;
  var durMod = bulletPen / armClass;
  var clamped = Math.min(Math.max(durMod, 0.6), 1.1);
  var bulletArmorDmg = bulletArmorDmg * 0.01;
  var durLoss = bulletPen * bulletArmorDmg * armorMaterial * clamped;
  armorObj[armorClassSeleceted][armorSelected].currentDurability =
    armorObj[armorClassSeleceted][armorSelected].currentDurability - durLoss;
}

// check if zone has armor
function checkArmor(zone, bullet) {
  var destructibility =
    armorObj[armorClassSeleceted][armorSelected].destructibility;
  var bulletPen = bullet.penetration;
  var bulletArmDmg = bullet.armorDmg;
  var areasAffected = armorObj[armorClassSeleceted][armorSelected].areas;
  var currentDur =
    armorObj[armorClassSeleceted][armorSelected].currentDurability;
  var maxDur = armorObj[armorClassSeleceted][armorSelected].startingDurability;
  var armorClass = armorObj[armorClassSeleceted][armorSelected].class;
  console.log('amor selected ' + armorSelected);
  console.log('max durability ' + maxDur);
  console.log('durability before shot ' + currentDur);
  // if zone is protected by armor
  if (areasAffected.includes(zone)) {
    console.log('protected');
    // find penetration chance
    var toPen = willPen(currentDur, maxDur, armorClass, bulletPen);
    // if bullet penetrates
    if (toPen == true) {
      console.log('ammo has penetrated');
      getHealth(zone, bullet.damage - Math.round(bullet.damage * 0.2));
    }
    // bullet does not penetrate
    else {
      console.log('ammo has not penetrated');
      //  console.log(Math.round(bullet.damage*.02))
      getHealth(zone, Math.round(bullet.damage * 0.02));
    }
    durabilityLost(bulletPen, bulletArmDmg, destructibility, armorClass);
  }
  // current zone is not protected by armor
  else {
    console.log('not protected');
    getHealth(zone, bullet.damage);
  }
  console.log(
    'durability after shot ' +
      armorObj[armorClassSeleceted][armorSelected].currentDurability
  );
}

// get selected Option
function getOption() {
  if (this.id == 'caliber') {
    caliberSelcted = this.value;
    var subGroup = document.getElementById('cartridge');
    var obj = ammoOBJ;
  } else {
    armorClassSeleceted = this.value;
    var subGroup = document.getElementById('armor');
    var obj = armorObj;
  }

  if (this.value == 'select' || this.value == 'none') {
    subGroup.style.display = 'none';
    armorSelected = 'none';
  } else {
    var optionArr = [];
    // remove options
    while (subGroup.options.length > 0) {
      subGroup.options.remove(0);
    }

    // push all catridges from selected caliber into cartridge array
    for (key in obj[this.value]) {
      optionArr.push(key);
    }
    optionArr.forEach(function (i) {
      let option = new Option(i, i);
      subGroup.appendChild(option);
    });
    // reveal catridge select box
    subGroup.style.display = 'inline';
  }
}

// get selected catridge
function getCatridge(event) {
  cartridgeSelected = event.target.value;
}

// get selected armor
function getArmor(event) {
  armorSelected = event.target.value;
}

//Event listeners -----
document.getElementById('caliber').addEventListener('change', getOption);
document.getElementById('armorClass').addEventListener('change', getOption);
document.getElementById('cartridge').addEventListener('change', getCatridge);
document.getElementById('armor').addEventListener('change', getArmor);
document.getElementById('restoreBtn').addEventListener('click', setStats);

// wrapper function ----
function wrapperFunction(i) {
  checkArmor(
    i.srcElement.id.replace('Btn', '').replace('Health', ''),
    ammoOBJ[caliberSelcted][cartridgeSelected]
  );
  getAmmoCount();
}

// initialize
setStats();

var input = {
  8: {
    number: '500',
    name: '6969',
    children: {},
  },
  0: {
    number: '100',
    name: 'test0',
    children: {
      1: {
        number: '101',
        name: 'test1',
        children: {},
      },
      2: {
        number: '102',
        name: 'test2',
        children: {},
      },
    },
  },
  3: {
    number: '103',
    name: 'test3',
    children: {
      4: {
        number: '104',
        name: 'test4',
        children: {},
      },
      5: {
        number: '105',
        name: 'test5',
        children: {},
      },
      6: {
        number: '106',
        name: 'test6',
        children: {
          7: {
            number: '107',
            name: 'test7',
            children: {},
          },
        },
      },
    },
  },
};
