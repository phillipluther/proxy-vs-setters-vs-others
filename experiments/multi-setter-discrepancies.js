import {createDefinePropObj, log, noop, runTest} from '../utils.js';

export default () => {
    let singleSetter = {
        viaDefineProp: Object.defineProperty({}, 'prop', {
            set: () => {
                noop();
            }
        }),
        atInstantiation: {
            set prop(val) {
                noop();
            }
        }
    };

    let multiSetter = {
        viaDefineProp: createDefinePropObj(),
        atInstantiation: {
            set prop(val) {
                noop();
            },
            set otherProp(val) {
                noop();
            },
            set otherOtherProp(val) {
                noop();
            }
        }
    };

    log('----- Single vs. Multiple Setter Performance (250k actions) -----');

    runTest('Setting on an obj w/ a single setter, created at instantiation', () => {
        singleSetter.atInstantiation.prop = true;
    });

    runTest('Setting on an obj w/ a single setter, created via defineProperty', () => {
        singleSetter.viaDefineProp.prop = true;
    });

    runTest('Setting on an obj w/ multiple setters, created at instantiation', () => {
        multiSetter.atInstantiation.prop = true;
    });

    runTest('Setting on an obj w/ multiple setters, created via defineProperty', () => {
        multiSetter.viaDefineProp.prop = true;
    });

    log();
};
