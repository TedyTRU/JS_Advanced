function attachEventsListeners() {

    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function convert(value, unit) {
        const inDays = value / ratios[unit];
        return {
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        };
    }

    const inputs = Object
        .keys(ratios)
        .map(unit => document.getElementById(unit))
        .reduce((a, c) => Object.assign(a, {[c.id]: c }), {});

    // const inputs = {
    //     days: document.getElementById('days'),
    //     hours: document.getElementById('hours'),
    //     minutes: document.getElementById('minutes'),
    //     seconds: document.getElementById('seconds')
    // };

    document.querySelector('main').addEventListener('click', onConvert);

    function onConvert(e) {
        if (e.target.tagName == 'INPUT' && e.target.type == 'button') {

            const input = e.target.parentElement.querySelector('input[type="text"]');

            const time = convert(Number(input.value), input.id);
            Object.keys(time).forEach(k => inputs[k].value = time[k]);
        }
    }

}


function attachEventsListeners2() {

    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function convert(value, unit) {
        const inDays = value / ratios[unit];
        return {
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        };
    }
    //window.convert = convert;

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', onConvert);
    document.getElementById('hoursBtn').addEventListener('click', onConvert);
    document.getElementById('minutesBtn').addEventListener('click', onConvert);
    document.getElementById('secondsBtn').addEventListener('click', onConvert);

    function onConvert(e) {
        const input = e.target.parentElement.querySelector('input[type="text"]');

        const time = convert(Number(input.value), input.id);
        daysInput.value = time.days;
        hoursInput.value = time.hours;
        minutesInput.value = time.minutes;
        secondsInput.value = time.seconds;

    }

}