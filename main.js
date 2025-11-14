let player = {
  hp: 30,
  maxHp: 30,
  attack: 5
};

let enemy = {
  hp: 20,
  maxHp: 20,
  attack: 3
};

const log = document.getElementById("log");
const attackBtn = document.getElementById("attackBtn");
const healBtn = document.getElementById("healBtn");

function updateLog(text) {
  log.textContent = text;
}

function attack() {
  // Player hits enemy
  enemy.hp -= player.attack;

  if (enemy.hp <= 0) {
    updateLog("💀 Enemy defeated!");
    return;
  }

  // Enemy hits back
  player.hp -= enemy.attack;

  if (player.hp <= 0) {
    updateLog("☠️ You died!");
    return;
  }

  updateLog(
    `You dealt ${player.attack} dmg.  
    Enemy dealt ${enemy.attack}.  
    HP: ${player.hp}/${player.maxHp}  
    Enemy: ${enemy.hp}/${enemy.maxHp}`
  );
}

function heal() {
  if (player.hp >= player.maxHp) {
    updateLog("⚠️ You're already full HP!");
    return;
  }

  player.hp += 6;
  if (player.hp > player.maxHp) player.hp = player.maxHp;

  updateLog(`✨ You healed to ${player.hp}/${player.maxHp}`);
}

attackBtn.onclick = attack;
healBtn.onclick = heal;
