import * as React from "react";
import * as ReactDOM from "react-dom";
import { JsxComp } from './components/jsx-comp/index.jsx';
import Main from './app/index';

ReactDOM.render(<div>
    <JsxComp />
    <Main />
</div>, document.getElementById("page")
);
