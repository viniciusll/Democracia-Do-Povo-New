import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {
    Route,
    Switch,
    Router
} from "react-router-dom";

import './assets/scss/style.scss';

// pages for this product
import Components from "./views/components/components.jsx";
import CustomComponents from "./views/custom-components/custom-components.jsx";
import Candidatos from './views/Candidatos/candidatos';
import Revistas from './views/Revistas/revistas.jsx';
import CandidatosInscritos from './views/CandidatosInscritos/CandidatosInscritos';
import RepresentantesCadastrados from './views/RepresentantesCadastrados/RepresentantesCadastrados';
import RevistasProprias from './views/RevistaPropria/RevistaPropria.jsx';

var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/representantes" component={CustomComponents} />
            <Route path="/candidatos" component={Candidatos} />
            <Route path="/revistas" component={Revistas} />
            <Route path="/candidatos-inscritos" component={CandidatosInscritos} />
            <Route path="/representantes-cadastrados" component={RepresentantesCadastrados} />
            <Route path="/home" component={Components} />
            <Route path="/" component={RevistasProprias} exact />
        </Switch>
    </Router>,
    document.getElementById("root")
);
