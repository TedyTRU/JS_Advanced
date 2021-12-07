class Company {
    constructor() {
        this.departments = []
    }

    getDepart(name) {
        const depart = this.departments.find(x => x.name === name);

        if (!depart) {
            const temp = {
                name,
                employees: [],
                salaries: [],
                positions: []
            }

            this.departments.push(temp);
            return temp;

        } else {
            return depart;
        }

    }

    addEmployee(...args) {

        if (args.some(x => x === undefined || x === '' || x === null) || args[1] < 0) {

            throw new Error('Invalid input!');

        }

        const department = this.getDepart(args[3]);

        department.employees.push(args[0]);
        department.salaries.push(args[1]);
        department.positions.push(args[2]);

        return `New employee is hired. Name: ${args[0]}. Position: ${args[2]}`;

    }

    getSalarySum = depart => depart.salaries.reduce((a, b) => a + b, 0);

    bestSalaryDepart = () =>
        this.departments.sort((a, b) =>
            this.getSalarySum(b) / b.salaries.length -
            this.getSalarySum(a) / a.salaries.length)
        [0]


    bestDepartment() {
        const best = this.bestSalaryDepart()

        const printData = best.employees
            .reduce((arr, name, i) => {
                arr[i] = []
                arr[i].push(name, best.salaries[i], best.positions[i])
                return arr
            }, [])
            .sort((a, b) => b[1] - a[1] === 0 ? a[0].localeCompare(b[0]) : b[1] - a[1])
            .map(x => x.join(' '))
            .join('\n')

        return `Best Department is: ${best.name}\nAverage salary: ${(this.getSalarySum(best) / best.salaries.length).toFixed(2)}\n${printData}`
    }

}


//let Company = result;
let c = new Company();

// let actual1 = c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
// let expected1 = "New employee is hired. Name: Stanimir. Position: engineer";
// assert.equal(actual1,expected1);

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

// let act = c.bestDepartment();
// let exp = "Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR";
// assert.equal(act,exp);