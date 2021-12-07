class List {
    constructor() {
        this.list = [];
        this.size = this.list.length
    }

    updateSize = () => this.size = this.list.length;
    orderlist = () => this.list.sort((a, b) => a - b)

    add(e) {
        this.list.push(e);
        this.updateSize();
        this.orderlist();
    }

    remove(i) {
        if (this.list[i] !== undefined) {
            this.list.splice(i, 1);
            this.updateSize();
            this.orderlist();
        }
    }

    get(i) {
        if (this.list[i] !== undefined) {
            return this.list[i];

        }
    }

}

let list = new List();
list.add(15);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));