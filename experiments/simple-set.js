import {runTest} from '../utils.js';

export default () => {
    let proxyVals = [];
    let proxy = new Proxy({someBool: false}, {
        set: (obj, prop, val) => {
            obj[prop] = val;
            proxyVals.push(val);
            return true;
        }
    });

    let setterVals = [];
    let setter = {
        someBool: false,
        set someBool(val) {
            setterVals.push(val);
        }
    };

    class State {
        constructor() {
            this.someBool = false;
            this.vals = [];
        }

        setState(prop, val) {
            this[prop] = val;
            this.vals.push(val);
        }
    }
    let setStater = new State();

    runTest('Set via proxy', () => {
        proxy.someBool = proxyVals.length % 2 === 0;
    });
    console.log('Proxy vals:', proxyVals);

    runTest('Set via obj/setter', () => {
        setter.someBool = setterVals.length % 2 === 0;
    });
    console.log('Setter values:', setterVals);

    runTest('Set via setState method', () => {
        setStater.setState('someBool', setStater.vals.length % 2 === 0);
    });
    console.log('setState values:', setStater.vals);
}
