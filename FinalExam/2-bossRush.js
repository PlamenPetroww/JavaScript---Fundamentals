function boss(input) {
    const inputCount = Number(input.shift());
    const pattern =
      /[|](?<bossName>[A-Z]{4,})[|][:][#](?<title>[A-z]+\s{1}[A-z]+)[#]/g;
  
    for (const hero of input) {
      let boss = hero.match(pattern);
      let match = pattern.exec(boss);
      if (!match) {
        console.log("Access denied!");
      }
      while (match) {
        console.log(`${match.groups.bossName}, The ${match.groups.title}`);
        console.log(`>> Strength: ${match.groups.bossName.length}`);
        console.log(`>> Armor: ${match.groups.title.length}`);
        match = pattern.exec(boss);
        break;
      }
    }
  }
  boss([
    "3",
    "|PETER|:#Lead architect#",
    "|GEORGE|:#High Overseer#",
    "|ALEX|:#Assistant Game Developer#",
  ]);
  console.log("********");
  boss([
    "3",
    "|STEFAN|:#H1gh Overseer#",
    "|IVAN|:#Master detective#",
    "|KARL|: #Marketing lead#",
  ]);