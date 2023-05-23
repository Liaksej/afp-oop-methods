export class Character {
  constructor(name, type, health = 100, level = 1, attack, defence) {
    if (name.length > 2 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error(
        "The name must be at least 2 and no more than 10 characters"
      );
    }
    if (
      [
        "Bowman",
        "Swordsman",
        "Magician",
        "Daemon",
        "Undead",
        "Zombie",
      ].includes(type)
    ) {
      this.type = type;
    } else {
      throw new Error(
        "The type must be one of the list: Bowman, Swordsman, Magician, Daemon, Undead, Zombie"
      );
    }
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health > 0) {
      ++this.level;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error("Нельзя повысить левел умершего");
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

export class Bowman extends Character {
  constructor(name, type, health, level, attack = 25, defence = 25) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
export class Swordsman extends Character {
  constructor(name, type, health, level, attack = 40, defence = 10) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
export class Magician extends Character {
  constructor(name, type, health, level, attack = 10, defence = 40) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
export class Daemon extends Character {
  constructor(name, type, health, level, attack = 10, defence = 40) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
export class Undead extends Character {
  constructor(name, type, health, level, attack = 25, defence = 25) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
export class Zombie extends Character {
  constructor(name, type, health, level, attack = 40, defence = 10) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
