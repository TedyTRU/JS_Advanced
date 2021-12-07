function solve(arr) {

    const result = [];

    arr.forEach(el => {
        let [name, level, items] = el.split(" / ");
        result.push({
            name,
            level: Number(level),
            items: items !== undefined ? items.split(", ") : []
        })
    });

    console.log(JSON.stringify(result));

    //const test = JSON.stringify(result);
    //console.log(JSON.parse(test));

}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);
