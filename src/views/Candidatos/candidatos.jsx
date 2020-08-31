import React, { useState } from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import { Container, Row, Col, Button } from 'reactstrap';
import Revista1 from "../../assets/images/revista 1.png"
import Revista4 from "../../assets/images/revista 4.png"
import Imagem1 from "../../assets/images/imagem 1.png";
import Imagem2 from "../../assets/images/imagem 2.png";

// sections for this page
import TabelaDePreco1 from './sections/tabelaDePreco1.jsx';
import Formulario1 from './sections/formulario1';
import TabelaDePreco2 from './sections/tabelaDePreco2.jsx';
import TabelaDePreco3 from './sections/tabelaDepreco3.jsx';
import TabelaDePreco4 from './sections/tabelaDePreco4.jsx';
import Formulario2 from './sections/formulario2.jsx';
import TabelaDePreco5 from './sections/tabelaDePreco5';


const CustomComponents = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClick = () => {
        if(show == true) {
            setShow(false);
        } else {
            setShow(true);
        }
    };
    const handleClick2 = () => {
        if(show2 == true) {
            setShow2(false);
        } else {
            setShow2(true);
        }
    };

    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
            <div className="container-fluid">
                    <HeaderBanner />
                    <h1 style={{ textAlign: 'center', paddingTop: '5px', color: '#000bd4',fontFamily: 'cursive' }}>
                        Candidato a vereador e a prefeito! <br /> Anuncie nas quatro capas da revista
                    </h1>
                    <p style={{ textAlign: 'center', color: '#000', paddingTop: '10px' }}>
                        A Revista <strong style={{ color: 'green', fontSize: '25px' }}>Democracia Do Povo</strong> é uma publicação do O SÓCIO BR.<br />
                        Um produto da LOJA VIRTUAL REAL desenvolvido para campanhas publicitárias eleitorais.<br />
                        O candidato e candidata às eleições municipais, estaduais e federais poderão anunciar nas quatro capas da revista,
                        <br/>com conteúdo único, por edição, obtendo, desta forma, a sua <strong style={{ color: 'red' }}>REVISTA PRÓPRIA</strong>.
                    </p>

                    <Container style={{  alignItems: 'center' }}>
                        <Row>
                            <Col lg="10" className="text-center m-b-30">
                                <img src={Revista1} alt="img" className="img-responsive img-thumbnail" width='200' />
                            </Col>
                        </Row>
                        <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#ff0000', fontFamily: 'Batang' }}>
                            Veja e leia todas as revistas da Democracia do Povo no menu REVISTAS
                         </h2>
                    </Container>
                   <br/><br/>
                    <p style={{ textAlign: 'center', color: '#ff0000', fontFamily: 'Comic Sans MS', fontSize: '25px', padding: '15px' }}>
                        <strong style={{ color: '#000264' }}>
                            Solicite a confecção da arte final à gráfica de sua preferência ou a um arte-finalista. Medidas em centímetros para as 4 capas: 18 x 28. 
                            Se desejar, inclua na arte final de suas capas, cupons semelhantes aos que foram inseridos nas terceira e quarta capas 
                            destas edições com 8 e 12 páginas da revista Democracia do Povo.
                            Salve em PDF as artes das 4 capas. 
                            Imprimiremos e fixaremos no conteúdo de uma das edições da revista, com 8 ou 12 páginas, escolhida por você.
                        </strong><br/> <br/>
                        Faça o seu pedido com um dos Representantes da Democracia do Povo.<br />
                        Não os encontrando informe aos profissionais em vendas de seu município a 
                        possibilidade de serem cadastrados neste site para que possam efetivar os pedidos das revistas Democracia do Povo e 
                        Panfleto <br/> em Revista aos candidatos a prefeito e a vereador. <br/>
                    </p>
                    <h2 style={{ textAlign: 'center', color: '#000', paddingTop: '10px' }}>
                        TABELA DE PREÇOS
                    </h2>
                    <TabelaDePreco1 />
                    <Container style={{  alignItems: 'center', textAlign: 'center'}}>
                        <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#ff0000', fontFamily: 'Batang' }}>
                            GANHE ESSA LINDA PLACA DE RECONHECIMENTO À SUA CANDIDATURA NA COMPRA DE QUALQUER QUANTIDADE DE EXEMPLARES ACIMA.
                         </h2>
                        <Row>
                            <Col lg="7" className="text-center m-b-30">
                                <img src={Imagem1} alt="img" className="img-responsive img-thumbnail" width='100' />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="7" className="text-center m-b-30">
                                <img src={Imagem2} alt="img" className="img-responsive img-thumbnail" width="100" />
                            </Col>
                        </Row>
                    </Container>
                    <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#ff0000', fontFamily: 'Batang' }}>
                        Dados para contratação da transportadora de sua preferência
                    </h2>

                    <TabelaDePreco5 />

                    <p style={{ textAlign: 'center', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '25px', padding: '15px' }}>
                        Os pedidos serão efetivados somente por um dos Representantes cadastrados neste site.
                    </p>
                    <div style={{ textAlign: 'center', paddingTop: '5px' }}>
                        <Button onClick={handleClick} style={{ color: 'yellow', backgroundColor: '#003d03' }}>
                            Pedido para a revista Democracia do Povo
                        </Button>
                    </div>
                    <br/>
                    {show == true ? <Formulario1 /> : undefined}
                    <h1 style={{ textAlign: 'center', paddingTop: '10px', color: '#000bd4',fontFamily: 'cursive' }}>
                        Candidato a vereador e a prefeito participe da edição desta revista
                    </h1>
                    <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                        PANFLETO EM REVISTA
                    </h2>
                    <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#ff0000', fontFamily: 'Batang' }}>
                        SISTEMA COOPERADO DE PANFLETAGEM
                    </h2>
                    <p style={{ textAlign: 'center', color: '#000', paddingTop: '10px' }}>
                        A Revista <strong style={{ color: '#000bd4' }}>PANFLETO EM REVISTA</strong> é uma publicação do O SÓCIO BR. <br />
                        Um produto da <strong style={{ color: '#0bacba' }}>LOJA VIRTUAL REAL</strong>.<br />
                        Os custos de publicação pelo <strong style={{ color: '#ff0000' }}>SISTEMA COOPERADO DE PANFLETAGEM</strong> diminuem,<br />
                        consideravelmente, ao serem diluídos entre os participantes das edições desta revista.
                    </p>
                    <Container style={{  alignItems: 'center' }}>
                        <Row>
                            <Col lg="10" className="text-center m-b-30">
                                <img src={Revista4} alt="img" className="img-responsive img-thumbnail" width='200' />
                            </Col>
                        </Row>
                        <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#ff0000', fontFamily: 'Batang' }}>
                            Veja e leia todas as revistas da Democracia do Povo no menu REVISTAS
                        </h2>
                    </Container>
                    <br/><br/>
                    <h2 style={{ textAlign: 'center', color: '#000', paddingTop: '10px' }}>
                        TABELA DE PREÇOS PARA EDIÇÃO COM 4 (quatro) Candidatos
                    </h2>
                    <TabelaDePreco2 />
                    <h2 style={{ textAlign: 'center', color: '#000', paddingTop: '10px' }}>
                        TABELA DE PREÇOS PARA EDIÇÃO COM 8 (oito) Candidatos
                    </h2>
                    <TabelaDePreco3 />
                    <h2 style={{ textAlign: 'center', color: '#000', paddingTop: '10px' }}>
                        TABELA DE PREÇOS PARA EDIÇÃO COM 12 (doze) Candidatos
                    </h2>
                    <TabelaDePreco4 />
                    <p style={{ textAlign: 'center', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '25px', padding: '15px' }}>
                        Os pedidos serão efetivados somente por um dos Representantes cadastrados neste site.
                    </p>
                    <div style={{ textAlign: 'center', paddingTop: '5px' }}>
                        <Button onClick={handleClick2} style={{ color: 'yellow', backgroundColor: '#003d03' }}>
                            Pedido para Panfleto em Revista 
                        </Button>
                        {show2 == true ? <Formulario2 /> : undefined}
                    </div>
                    <br/>
                </div>
            </div>
            <Footer />
        </div>
    );
};

CustomComponents.propTypes = {
    classes: PropTypes.object
};

export default CustomComponents;