import * as React from 'react';
import Hello from './hello/Hello';

const TsxComp: React.StatelessComponent<{}> = () => {
    return <div>tsx test
        <Hello name="TypeScript" />
    </div>;
};

export default TsxComp;