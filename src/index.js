import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {
    Route,
    Switch,
    HashRouter
} from "react-router-dom";

import './assets/scss/style.scss';

// pages for this product
import Components from "./views/components/components.jsx";
import CustomComponents from "./views/custom-components/custom-components.jsx";
import Home from './views/custom-components/sections/Representantes'

var hist = createBrowserHistory();

ReactDOM.render(
    <HashRouter history={hist}>
        <Switch>
            <Route path="/representantes" component={CustomComponents} />
            <Route path="/" component={Components} />
        </Switch>
    </HashRouter>,
    document.getElementById("root")
);
