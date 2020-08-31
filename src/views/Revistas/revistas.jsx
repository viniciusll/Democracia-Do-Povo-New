/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import { Progress } from 'reactstrap';
import Dedepe from '../../assets/images/Dedepê.png';
import { Document, Page, pdfjs } from 'react-pdf';
import CleanCode from './cleanCode.pdf';
import { Container, Row, Col } from 'reactstrap';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// sections for this page

const Revistas = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    };

    const nextPage = (pageNumber) => {
        if (pageNumber + 1 > numPages) {
            setPageNumber(1);
        } else {
            setPageNumber(pageNumber + 1);
        }
    };

    const previousPage = (pageNumber) => {
        console.log(pageNumber - 1);
        if (pageNumber === 1) {
            setPageNumber(numPages);
        } else {
            setPageNumber(pageNumber - 1);
        };
    };

    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <Container style={{  alignItems: 'center' }}>
                        <Row>
                            <Col sm={{ size: 1 }} className="text-center m-b-30">
                                <img src={Dedepe} alt="img" className="img-responsive img-thumbnail" width='200' />
                            </Col>
                        </Row>
                    </Container>
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
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', backgroundColor: '#171616' }}>
                        <button style={{
                            backgroundColor: '#171616',
                            color: '#fff',
                            fontSize: '50px',
                            border: 'none',
                            outline: 'inherit'
                        }}
                            onClick={() => previousPage(pageNumber)}
                        >
                            {'<'}
                        </button>
                        <Document
                            file={CleanCode}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page width='400' pageNumber={pageNumber} />
                        </Document>
                        <button style={{
                            backgroundColor: '#171616',
                            color: '#fff',
                            fontSize: '50px',
                            border: 'none',
                            outline: 'inherit'
                        }}
                            onClick={() => nextPage(pageNumber)}
                        >
                            {'>'}
                        </button>
                    </div>
                    <p style={{ textAlign: 'center', color: '#8f1e3e', fontFamily: 'Apple Chancery, cursive', fontSize: '15px' }}>Page {pageNumber} of {numPages}</p>
                    <p style={{ textAlign: 'center', color: '#19a9bf', fontFamily: 'Segoe Print', fontSize: '20px', padding: '15px' }}>
                        Revista Democracia do Povo. Edição com 12 páginas + as suas 4 capas.
                    </p>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', backgroundColor: '#171616' }}>
                        <button style={{
                            backgroundColor: '#171616',
                            color: '#fff',
                            fontSize: '50px',
                            border: 'none',
                            outline: 'inherit'
                        }}
                            onClick={() => previousPage(pageNumber)}
                        >
                            {'<'}
                        </button>
                        <Document
                            onLoadProgress={({ loaded, total }) => {
                                return <Progress striped  value={(loaded / total) * 100 + '%'}/>
                            }}
                            file={CleanCode}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page width='400' pageNumber={pageNumber} />
                        </Document>
                        <button style={{
                            backgroundColor: '#171616',
                            color: '#fff',
                            fontSize: '50px',
                            border: 'none',
                            outline: 'inherit'
                        }}
                            onClick={() => nextPage(pageNumber)}
                        >
                            {'>'}
                        </button>
                    </div>
                    <p style={{ textAlign: 'center', color: '#8f1e3e', fontFamily: 'Apple Chancery, cursive', fontSize: '15px' }}>Page {pageNumber} of {numPages}</p>
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