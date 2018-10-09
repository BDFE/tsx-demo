import * as React from "react";
import * as ReactDOM from "react-dom";
import { JsxComp } from './components/jsx-comp/index.jsx';
import TsxComp from './components/tsx-comp/index';

ReactDOM.render(<div>
    <JsxComp /> <TsxComp />
    </div>
    ,
    document.getElementById("page")
);
