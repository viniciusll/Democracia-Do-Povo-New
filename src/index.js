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
import Candidatos from './views/Candidatos/candidatos';
import Revistas from './views/Revistas/revistas.jsx';
import Contratos from './views/Contratos/contratos';

var hist = createBrowserHistory();

ReactDOM.render(
    <HashRouter history={hist}>
        <Switch>
            <Route path="/representantes" component={CustomComponents} />
            <Route path="/candidatos" component={Candidatos} />
            <Route path="/revistas" component={Revistas} />
            <Route path="/contratos" component={Contratos} />
            <Route path="/" component={Components} />
        </Switch>
    </HashRouter>,
    document.getElementById("root")
);
