function attachEventsListeners() {

    const values = {
        km: 1,
        m: 1000,
        cm: 10000,
        mm: 100000,
        mi: 0.62137119,
        yrd: 1093.6133,
        ft: 3280.8399,
        in: 39370.0787
    };

    const fields = {
        unitsFrom: document.getElementById('inputUnits'),
        unitsTo: document.getElementById('outputUnits'),
        input: document.getElementById('inputDistance'),
        output: document.getElementById('outputDistance')
    }

    const converter = (v, to, sign) => {
        const signs = {
            '/': (a, b) => a / b,
            '*': (a, b) => a * b
        }
        return signs[sign](v, to)
    }

    document.getElementById('convert').addEventListener('click', convert);

    function convert(e) {
        const [from, to, inputValue] = [fields.unitsFrom.value, fields.unitsTo.value, Number(fields.input.value)];
        fields.output.value = converter(converter(inputValue, values[from], '/'), values[to], '*');
    }

}