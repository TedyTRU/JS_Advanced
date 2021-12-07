function encodeAndDecodeMessages() {
    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    const map = {
        encode: {
            text: textAreas[0],
            btn: buttons[0],
            func: (char) => {
                return String.fromCharCode(char.charCodeAt(0) + 1);
            }
        },
        decode: {
            text: textAreas[1],
            btn: buttons[1],
            func: (char) => String.fromCharCode(char.charCodeAt(0) - 1)
        }
    }

    document.getElementById('main').addEventListener('click', opr);

    function opr(e) {
        //console.log(map.decode.text);
        if (e.target.tagName !== 'BUTTON') {
            return;
        }

        const type = e.target.textContent.toLowerCase().trim().includes('encode') ? 'encode' : 'decode';
        //console.log(type);
        const message = map[type].text.value
            .split('')
            .map(map[type].func);

        //console.log(message);

        map.encode.text.value = '';
        map.decode.text.value = message.join('');

    }
}