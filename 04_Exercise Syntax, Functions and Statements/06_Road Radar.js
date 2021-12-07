function roadRadar(speed, area) {

    let speedZone = 0;
    let difference = 0;

    switch (area) {
        case "motorway":
            speedZone = 130; break;
        case "interstate":
            speedZone = 90; break;
        case "city":
            speedZone = 50; break;
        case "residential":
            speedZone = 20; break;
    }

    difference = speed - speedZone;
    let status;

    if (difference <= 20) {
        status = "speeding";

    } else if (difference <= 40) {
        status = "excessive speeding";

    } else if (difference > 40) {
        status = "reckless driving";

    }

    if (speed <= speedZone) {
        console.log(`Driving ${speed} km/h in a ${speedZone} zone`);
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedZone} - ${status}`);
    }

}
roadRadar(200, 'motorway');