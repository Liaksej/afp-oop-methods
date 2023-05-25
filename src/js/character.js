export class Character {
  constructor(name, type) {
    const typesForCheck = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];

    if (!typesForCheck.includes(type)) {
      throw new Error(
        `The type must be one of the list: ${typesForCheck.join(", ")}`
      );
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error(
        "The name must be at least 2 and no more than 10 characters"
      );
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
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
