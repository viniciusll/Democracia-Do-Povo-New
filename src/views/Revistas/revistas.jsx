/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import { Progress } from 'reactstrap';
import Dedepe from '../../assets/images/Dedepê.png';
import ScrollToTopOnMount from '../../components/Scroll/scrollToTop';
import { Document, Page, pdfjs } from 'react-pdf';
import RevistaDemocraciaDoPovo1 from './1002 Revista Democracia do Povo 8 p. site.pdf';
import RevistaDemocraciaDoPovo2 from './1011 Revist Panfleto Revista 12 Cand. site.pdf';
import { Link } from 'react-router-dom';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// sections for this page

const Revistas = () => {

    const [numPages1, setNumPages1] = useState(null);
    const [pageNumber1, setPageNumber1] = useState(1);
    const [numPages2, setNumPages2] = useState(null);
    const [pageNumber2, setPageNumber2] = useState(1);

    function onDocumentLoadSuccess1({ numPages }) {
        setNumPages1(numPages);
    };

    const nextPage = (pageNumber) => {
        if (pageNumber + 1 > numPages1) {
            setPageNumber1(1);
        } else {
            setPageNumber1(pageNumber + 1);
        }
    };

    const previousPage = (pageNumber) => {
        console.log(pageNumber - 1);
        if (pageNumber === 1) {
            setPageNumber1(numPages1);
        } else {
            setPageNumber1(pageNumber - 1);
        };
    };

    function onDocumentLoadSuccess2({ numPages }) {
        setNumPages2(numPages);
    };

    const nextPage2 = (pageNumber) => {
        if (pageNumber + 1 > numPages2) {
            setPageNumber2(1);
        } else {
            setPageNumber2(pageNumber + 1);
        }
    };

    const previousPage2 = (pageNumber) => {
        console.log(pageNumber - 1);
        if (pageNumber === 1) {
            setPageNumber2(numPages2);
        } else {
            setPageNumber2(pageNumber - 1);
        };
    };

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
                    <p style={{ textAlign: 'center', color: '#19a9bf', fontFamily: 'Segoe Print', fontSize: '20px', padding: '15px' }}>
                        Revista Democracia do Povo. Edição com 8 páginas + as suas 4 capas.
                    </p>
                    <div>
                        <a href='https://drive.google.com/file/d/1vnhSJSNdxfyIQOPJ43ese3AZ3GtvW83C/view?usp=sharing'>imprimir Revista 1</a>
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', backgroundColor: '#171616', flexWrap: 'wrap' }}>
                        <button style={{
                            backgroundColor: '#171616',
                            color: '#fff',
                            fontSize: '50px',
                            border: 'none',
                            outline: 'inherit'
                        }}
                            onClick={() => previousPage(pageNumber1)}
                        >
                            {'<'}
                        </button>
                        <Document
                            file={RevistaDemocraciaDoPovo1}
                            onLoadSuccess={onDocumentLoadSuccess1}
                        >
                            <Page style={{ width: '200%' }} pageNumber={pageNumber1} />
                        </Document>
                        <button style={{
                            backgroundColor: '#171616',
                            color: '#fff',
                            fontSize: '50px',
                            border: 'none',
                            outline: 'inherit'
                        }}
                            onClick={() => nextPage(pageNumber1)}
                        >
                            {'>'}
                        </button>
                    </div>
                    <p style={{ textAlign: 'center', color: '#8f1e3e', fontFamily: 'Apple Chancery, cursive', fontSize: '15px' }}>Page {pageNumber1} of {numPages1}</p>
                    <p style={{ textAlign: 'center', color: '#19a9bf', fontFamily: 'Segoe Print', fontSize: '20px', padding: '15px' }}>
                        Revista Democracia do Povo. Edição com 12 páginas + as suas 4 capas.
                    </p>
                    <p style={{ textAlign: 'center', color: '#19a9bf', fontFamily: 'Segoe Print', fontSize: '20px', padding: '15px' }}>
                        Revista Panfleto em Revista. Edição com 4, 8 ou 12 candidatos do mesmo partido político.
                    </p>
                    <div>
                        <a href='https://drive.google.com/file/d/1dXgwRZyes_YQDC2I6vi0wmmMCXmIfpqr/view?usp=sharing'>imprimir Revista 2</a>
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', backgroundColor: '#171616', flexWrap: 'wrap' }}>
                        <button style={{
                            backgroundColor: '#171616',
                            color: '#fff',
                            fontSize: '50px',
                            border: 'none',
                            outline: 'inherit'
                        }}
                            onClick={() => previousPage2(pageNumber2)}
                        >
                            {'<'}
                        </button>
                        <Document
                            onLoadProgress={({ loaded, total }) => {
                                return <Progress striped value={(loaded / total) * 100 + '%'} />
                            }}
                            file={RevistaDemocraciaDoPovo2}
                            onLoadSuccess={onDocumentLoadSuccess2}
                        >
                            <Page style={{ width: '200%' }} pageNumber={pageNumber2} />
                        </Document>
                        <button style={{
                            backgroundColor: '#171616',
                            color: '#fff',
                            fontSize: '50px',
                            border: 'none',
                            outline: 'inherit'
                        }}
                            onClick={() => nextPage2(pageNumber2)}
                        >
                            {'>'}
                        </button>
                    </div>
                    <p style={{ textAlign: 'center', color: '#8f1e3e', fontFamily: 'Apple Chancery, cursive', fontSize: '15px' }}>Page {pageNumber2} of {numPages2}</p>
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