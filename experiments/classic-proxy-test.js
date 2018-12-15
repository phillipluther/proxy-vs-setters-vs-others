// via this gist:
// https://gist.github.com/kuashe/8f7b3dc2fab0c96e08c8ef78579d2700

import {log, runTest} from '../utils.js';

export default () => {
    let obj = {};
    let _obj = {};
    let proxy = new Proxy(_obj, {
        set: (obj, prop, value) => {
            _obj[prop] = value;
            return true;
        }
    });

    let defineProp = {};
    Object.defineProperty(defineProp, 'prop', {
        configurable: false,
        set: v => defineProp._v = v
    });

    runTest('Vanilla set', () => {
        obj.prop = 5;
    });

    runTest('Proxy set', () => {
        proxy.prop = 5;
    });

    runTest('Define property set', () => {
        defineProp = 5;
    });

    log('-----');
}
