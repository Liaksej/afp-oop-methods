import {
  Character,
  Bowman,
  Daemon,
  Magician,
  Swordsman,
  Undead,
  Zombie,
} from "../methods.js";

test.each([
  [
    "invalid name input: less then 2",
    ["B", "Bowman", 100, 1, 10, 10],
    "The name must be at least 2 and no more than 10 characters",
  ],
  [
    "invalid name input: more then 10",
    ["B", "Bowman", 100, 1, 10, 10],
    "The name must be at least 2 and no more than 10 characters",
  ],
  [
    "invalid type input: not in the list: Bowman, Swordsman, Magician, Daemon, Undead, Zombie",
    ["Bowman", "Lulu", 100, 1, 10, 10],
    "The type must be one of the list: Bowman, Swordsman, Magician, Daemon, Undead, Zombie",
  ],
])("testing working status with %s", (_, imported, expected) => {
  expect(() => new Bowman(...imported)).toThrow(expected);
});

test.each([
  [
    "all classes",
    [
      new Bowman("Bowman", "Bowman"),
      new Daemon("Daemon", "Daemon"),
      new Magician("Magician", "Magician"),
      new Swordsman("Swordsman", "Swordsman"),
      new Undead("Undead", "Undead"),
      new Zombie("Zombie", "Zombie"),
    ],
    [
      {
        name: "Bowman",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        name: "Daemon",
        type: "Daemon",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      },
      {
        name: "Magician",
        type: "Magician",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      },
      {
        name: "Swordsman",
        type: "Swordsman",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: "Undead",
        type: "Undead",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        name: "Zombie",
        type: "Zombie",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ],
  ],
])("testing working status of %s", (_, imported, expected) => {
  expect(imported).toEqual(expected);
});

test("testing working status of method levelUp", () => {
  const testClass = new Character("Bowman", "Bowman", 100, 1, 25, 25);
  testClass.levelUp();
  expect(testClass).toEqual({
    name: "Bowman",
    type: "Bowman",
    health: 100,
    level: 2,
    attack: 25 + 25 * 0.2,
    defence: 25 + 25 * 0.2,
  });
});

test("testing working status of the method levelUp with health <= 0", () => {
  const testClass = new Character("Bowman", "Bowman", 0, 1, 25, 25);
  expect(() => testClass.levelUp()).toThrow("Нельзя повысить левел умершего");
});

test.each([
  [
    "if health > 0",
    ["Bowman", "Bowman", 100, 1, 25, 25],
    {
      name: "Bowman",
      type: "Bowman",
      health: 92.5,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ],
  [
    "if health <= 0",
    ["Bowman", "Bowman", -1, 1, 25, 25],
    {
      name: "Bowman",
      type: "Bowman",
      health: -1,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ],
])("testing working status of method damage %s", (_, imports, expected) => {
  const testClass = new Character(...imports);
  testClass.damage(10);
  expect(testClass).toEqual(expected);
});
