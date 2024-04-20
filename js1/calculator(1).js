let display = document.getElementById('display');

function press(num) {
    if(num === '=') {
        let computation = display.value.replace(/:/g, '/');
        display.value = eval(computation);
    } else if(num === 'C') {
        display.value = '';
    } else {
        display.value += num;
    }
}
