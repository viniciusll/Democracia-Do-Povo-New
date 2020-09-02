/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import Dedepe from '../../assets/images/Dedepê.png';
import ScrollToTopOnMount from '../../components/Scroll/scrollToTop';

// sections for this page

const Revistas = () => {

    return (
        <div id="main-wrapper">
            <ScrollToTopOnMount />
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img style={{ maxWidth: '120px', maxHeight: '420px' }} src={Dedepe} alt="img" className="img-responsive img-thumbnail" width='200' />
                    </div>

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
                    <p style={{ textAlign: 'center', color: 'red', fontFamily: 'Segoe Print', fontSize: '20px', padding: '15px' }}>
                        Revista Democracia do Povo. Edição com 8 páginas + as suas 4 capas.
                    </p>
                    <iframe style={{ width: '100%', height: '80vh'}} src="https://drive.google.com/file/d/1vnhSJSNdxfyIQOPJ43ese3AZ3GtvW83C/preview"></iframe>
                    <p style={{ textAlign: 'center', color: 'red', fontFamily: 'Segoe Print', fontSize: '20px', padding: '15px' }}>
                        Revista Democracia do Povo. Edição com 12 páginas + as suas 4 capas.
                    </p>
                    <p style={{ textAlign: 'center', color: 'red', fontFamily: 'Segoe Print', fontSize: '20px', padding: '15px' }}>
                        Revista Panfleto em Revista. Edição com 4, 8 ou 12 candidatos do mesmo partido político.
                    </p>
                    <iframe style={{ width: '100%', height: '80vh'}} src="https://drive.google.com/file/d/1dXgwRZyes_YQDC2I6vi0wmmMCXmIfpqr/preview"></iframe>
                    <p style={{ textAlign: 'center', color: 'red', fontFamily: 'Segoe Print', fontSize: '20px', padding: '15px' }}>
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