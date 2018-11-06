import * as React from 'react';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './store/reducers/index';
import { StoreState } from './store/types/index';

const store = createStore<StoreState,any,any,any>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});
const TsxComp: React.StatelessComponent<{}> = () => {
    return <Provider store={store}>
        <Hello />
    </Provider>
};

export default TsxComp;