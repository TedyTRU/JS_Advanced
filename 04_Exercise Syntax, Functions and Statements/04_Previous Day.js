function previousDay(year, month, day) {

    const date = new Date(year, month - 1, day);
    const resultDate = new Date();
    //resultDate.setDate(date.getDate() - 1);

    const millSec = 1000 * 60 *60 * 24;
    resultDate.setTime(date.getTime() - millSec);

    console.log(resultDate);

}
//previousDay(2016, 9, 30);
//previousDay(2016, 10, 1);




function prevDay(year, month, day) {

    let dateString = year + "-" + month + "-" + day;
    let event = new Date(dateString);
    event.setDate(day - 1);

    console.log(event.getFullYear() + `-` + (Number(event.getMonth()) + 1) + `-` + event.getDate());

}

prevDay(2016, 9, 30);
prevDay(2016, 10, 1);