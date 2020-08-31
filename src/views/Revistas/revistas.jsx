/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page

const Revistas = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <h2>         </h2>
                    <p style={{ textAlign: 'center', color: '#19a9bf', fontFamily: 'Segoe Print', fontSize: '20px', padding: '15px' }}>
                        Olá amigo e amiga candidatos a prefeito, prefeita, vereador, vereadora!
                        Vamos trabalhar por uma democracia civilizada, sem conflitos e voltada para a efetiva participação popular?
                        Vamos governar junto com o cidadão e cidadã brasileiros?
                    </p>
                    <p style={{ textAlign: 'center', color: '#19a9bf', fontFamily: 'Segoe Print', fontSize: '20px', padding: '15px' }}>
                        Essas são as duas principais propostas da Democracia do Povo.
                    </p>
                    <p style={{ textAlign: 'center', color: '#19a9bf', fontFamily: 'Segoe Print', fontSize: '20px', padding: '15px' }}>
                        Se você, assim como eu entende que vivemos uma ditadura com máscara de democracia faça do conteúdo de minhas 
                        revistas a sua REVISTA PRÓPRIA, investindo, com exclusividade nas quatro capas e, na revista PANFLETO EM REVISTA 
                        juntamente com outros candidatos e candidatas que possuem afinidade ideológica.
                    </p>
                    <p style={{ textAlign: 'center', color: '#19a9bf', fontFamily: 'Segoe Print', fontSize: '20px', padding: '15px' }}>
                        Revista Democracia do Povo. Edição com 8 páginas + as suas 4 capas.
                    </p>
                    <p style={{ textAlign: 'center', color: '#19a9bf', fontFamily: 'Segoe Print', fontSize: '20px', padding: '15px' }}>
                        Revista Democracia do Povo. Edição com 12 páginas + as suas 4 capas.	
                    </p>
                    <p style={{ textAlign: 'center', color: '#19a9bf', fontFamily: 'Segoe Print', fontSize: '20px', padding: '15px' }}>
                        Revista Panfleto em Revista. Edição com 4, 8 ou 12 candidatos do mesmo partido político. 
                    </p>
                    <p style={{ textAlign: 'center', color: '#19a9bf', fontFamily: 'Segoe Print', fontSize: '20px', padding: '15px' }}>
                        Revista Democracia do Povo. As edições com 8 e 12 páginas são sínteses desta edição com 44 páginas.	
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

Revistas.propTypes = {
    classes: PropTypes.object
};

export default Revistas;