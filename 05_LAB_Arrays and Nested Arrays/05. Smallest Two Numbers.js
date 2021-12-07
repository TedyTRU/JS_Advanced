function smallestTwoNumbers(arr) {

    console.log(arr.sort((x, y) => x - y).slice(0, 2).join(" "));

}
smallestTwoNumbers([3, -2, 0, -1])


