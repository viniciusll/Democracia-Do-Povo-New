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
                    <div style={{ paddingTop: '15px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <p style={{ textAlign: 'center', color: '#000', padding: '10px'}}>
                            Revista Democracia do Povo 8 <br /> Páginas + 4 Capas do <br /> Candidato a serem inseridas neste conteúdo.
                        </p>
                        <p style={{ textAlign: 'center', color: '#000'}}>
                            Revista Democracia do Povo <br /> 12 Páginas + 4 Capas do <br /> Candidato a serem inseridas <br /> neste conteúdo.
                        </p>
                        <p style={{ textAlign: 'center', color: '#000'}}>
                            Revista Panfleto em Revista 8 <br /> (oito Candidatos).
                        </p>
                        <p style={{ textAlign: 'center', color: '#000'}}>
                            Revista Panfleto em Revista <br /> 12 (doze Candidatos).
                        </p>
                    </div>
                    <p style={{ textAlign: 'center', color: '#000', paddingTop: '10px'}}>
                        Revista Democracia do Povo (36 páginas + 4 Capas)
                    </p>
                    <div style={{ textAlign: 'center', paddingTop: '5px' }}>
                        <iframe 
                        src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=7c8459przp&t=1597160351"
                        frameborder="0" 
                        style={{ width: '100vh', minheight: '300px', height: '500px', maxHeight: '600px'}}
                        title='Revista Panfleto em Revista'
                        seamless='seamless'
                        allowfullscreen='true'
                        allowtransparency="true"
                        />
                    </div>
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