import {createProxy, createSetterObj, createDefinePropObj, log, runTest} from '../utils.js';

export default () => {
    let vanillaObj = {};
    let proxy = createProxy();
    let setterObj = createSetterObj();
    let definePropObj = createDefinePropObj();

    log('----- Simple Set (250k actions) -----');

    runTest('Simple set on a vanilla object', () => {
        vanillaObj.prop = true;
    });

    runTest('Simple set on an object with setters, created on instantiation', () => {
        setterObj.prop = true;
    });

    runTest('Simple set on an object with setters, created via defineProp', () => {
        definePropObj.prop = true;
    });

    runTest('Simple set on a proxy', () => {
        proxy.prop = true;
    });

    log();
};
