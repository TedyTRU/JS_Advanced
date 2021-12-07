// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(3, 1);
// console.log(months.join('\n'));

//--------------

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(0, 2));

//--------------


// const array = [1, 2, 3, 4, 5];
// // checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some((x) => x < 0));


//--------------



const best = {
    name: 'Construction',
    employees: ['Stanimir', 'Pesho', 'Slavi', 'Stan'],
    salaries: [2000, 1500, 500, 2000],
    positions: ['engineer', 'electrical engineer', 'dayer', 'architect']
}


const printData = best.employees
    .reduce((a, name, i) => {
        a[i] = []
        a[i].push(name, best.salaries[i], best.positions[i])
        return a
    }, [])
    .sort((a, b) => b[1] - a[1] === 0 ? a[0] - b[0] : b[1] - a[1])
    .map(x => x.join(' '))
    .join('\n')

    
    //console.log(printData.join('\n'));
    console.log(printData);