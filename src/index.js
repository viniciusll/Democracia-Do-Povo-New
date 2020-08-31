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
import CandidatosInscritos from './views/CandidatosInscritos/CandidatosInscritos';
import RepresentantesCadastrados from './views/RepresentantesCadastrados/RepresentantesCadastrados'
import Banner from './components/banner/banner';
import Header from './components/header/header';
import Footer from './components/footer/footer';

var hist = createBrowserHistory();

ReactDOM.render(
    <HashRouter history={hist}>
        <Switch>
            <Route path="/representantes" component={CustomComponents} />
            <Route path="/candidatos" component={Candidatos} />
            <Route path="/revistas" component={Revistas} />
            <Route path="/candidatos-inscritos" component={CandidatosInscritos} />
            <Route path="/representantes-cadastrados" component={RepresentantesCadastrados} />
            <Route path="/revistas-propria" component={() => {
                return <div>
                        <Header />
                        <Banner />
                        <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#ff0000', fontFamily: 'Batang' }} >REVISTA PRÓPRIA</h2>
                        <Footer />
                    </div>
            } } />
            <Route path="/" component={Components} />
        </Switch>
    </HashRouter>,
    document.getElementById("root")
);
