import { Character } from "./character";

export class Swordsman extends Character {
  constructor(name, type, attack = 40, defence = 10) {
    super(name, type);
    this.attack = attack;
    this.defence = defence;
  }
}
