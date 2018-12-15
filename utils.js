export const createState = () => ({
    someBool: false,
    someNum: 0,
    someString: '0'
});

export const log = message => {
    let output = document.getElementById('output');
    let logEl = document.createElement('span');

    logEl.classList.add('log');
    logEl.innerHTML = message;
    output.appendChild(logEl);

    console.log(message);
};

export function runTest(name, action) {
    log(`Starting ${name}`);

    let timeStart = Date.now();
    let counter = 250000;

    while (counter > 0) {
        action();
        counter--;
    }

    let timeEnd = Date.now() - timeStart;

    log(`Completed ${name}: ${timeEnd}ms`);
}
