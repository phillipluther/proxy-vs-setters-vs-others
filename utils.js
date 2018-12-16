export const createState = () => ({
    someBool: false,
    someNum: 0,
    someString: '0'
});

export const createProxy = (callback = noop) => new Proxy(createState(), {
    set: (obj, prop, val) => {
        obj[prop] = val;
        callback(val);
        return true;
    }
});

export const createDefinePropObj = (callback = noop) => {
    let definePropObj = createState();

    Object.defineProperty(definePropObj, 'prop', {
        set: val => {
            callback(val);
        }
    });

    Object.keys(createState()).forEach(key => {
        Object.defineProperty(definePropObj, key, {
            set: val => {
                callback(val);
            }
        });
    });

    return definePropObj;
};

export const createSetterObj = (callback = noop) => {
    return {
        set prop(val) {
            callback(val);
        },
        set someBool(val) {
            callback(val);
        },
        set someNum(val) {
            callback(val);
        },
        set someString(val) {
            callback(val);
        }
    };
};

export const log = message => {
    let output = document.getElementById('output');
    let logEl = message ? document.createElement('span') : document.createElement('br');

    if (message) {
        logEl.classList.add('log');
        logEl.innerHTML = message;
    }

    output.appendChild(logEl);

    console.log(message); // eslint-disable-line
};

export function noop() { return undefined; }

export function runTest(name, action) {
    let timeStart = Date.now();
    let counter = 250000;

    while (counter > 0) {
        action();
        counter--;
    }

    let timeEnd = Date.now() - timeStart;

    log(`${name}: ${timeEnd}ms`);
}
