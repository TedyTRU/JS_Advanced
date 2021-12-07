function pieceOfPie(arr, targetFlavor1, targetFlavor2) {

    let firstIndex = arr.indexOf(targetFlavor1);
    let secondIndex = arr.indexOf(targetFlavor2) + 1;

    return arr.slice(firstIndex, secondIndex);




}
pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
)

function pieceOfPie2 (arr, a, b) {

    return arr.slice(arr.indexOf(a), arr.indexOf(b) + 1);
}
pieceOfPie2(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)