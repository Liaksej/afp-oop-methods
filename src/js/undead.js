import { Character } from "./character";

export class Undead extends Character {
  constructor(name, type, attack = 25, defence = 25) {
    super(name, type);
    this.attack = attack;
    this.defence = defence;
  }
}
