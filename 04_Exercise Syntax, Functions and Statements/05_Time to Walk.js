function timeToWalk(steps, footprint, speedKmH) {
    const speed = speedKmH * 1000 / 3600;
    const distance = steps * footprint;

    const rest = Math.floor(distance / 500);
    const time = distance / speed + rest * 60;

    const hours = Math.floor(time / 3600).toFixed(0).padStart(2, "0");
    const minutes = Math.floor(time / 60).toFixed(0).padStart(2, "0");
    const seconds = (time % 60).toFixed(0).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`
    
}

console.log(timeToWalk(2564, 0.70, 5.5));