import React, { useState } from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import { Button } from 'reactstrap';
import Revista1 from "../../assets/images/revista 1.png"
import Revista4 from "../../assets/images/revista 4.png"
import Imagem1 from "../../assets/images/111.png";
import Imagem2 from "../../assets/images/222.png";
import ScrollToTopOnMount from '../../components/Scroll/scrollToTop';
import Logo from '../../assets/images/logodemocraciadopovo2.png';

// sections for this page
import TabelaDePreco1 from './sections/tabelaDePreco1.jsx';
import Formulario1 from './sections/formulario1';
import TabelaDePreco2 from './sections/tabelaDePreco2.jsx';
import TabelaDePreco3 from './sections/tabelaDepreco3.jsx';
import TabelaDePreco4 from './sections/tabelaDePreco4.jsx';
import Formulario2 from './sections/formulario2.jsx';
import TabelaDePreco5 from './sections/tabelaDePreco5';
import TabelaDePreco6 from './sections/tabelaDepreco6';


const CustomComponents = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClick = () => {
        if (show == true) {
            setShow(false);
        } else {
            setShow(true);
        }
    };
    const handleClick2 = () => {
        if (show2 == true) {
            setShow2(false);
        } else {
            setShow2(true);
        }
    };

    return (
        <div id="main-wrapper">
            <ScrollToTopOnMount />
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <h1 style={{ textAlign: 'center', paddingTop: '5px', color: '#000bd4', fontFamily: 'cursive' }}>
                        Candidato a vereador e a prefeito! <br /> Anuncie nas quatro capas da revista
                    </h1>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img style={{ maxWidth: '200px' }} src={Logo} alt="logo" />
                    </div>
                    <p style={{ textAlign: 'center', color: '#000', paddingTop: '10px' }}>
                        A Revista <strong style={{ color: 'green', fontSize: '25px' }}>Democracia do Povo</strong> é uma publicação do O SÓCIO BR.<br />
                        Um produto da LOJA VIRTUAL REAL desenvolvido para campanhas publicitárias eleitorais.<br />
                        O candidato e candidata às eleições municipais, estaduais e federais poderão anunciar nas quatro capas da revista,
                        <br />com conteúdo único, por edição, obtendo, desta forma, a sua <strong style={{ color: 'red' }}>REVISTA PRÓPRIA</strong>.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={Revista1} alt="img" className="img-responsive img-thumbnail" style={{ maxWidth: '80vh' }} />
                    </div>
                    <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#ff0000', fontFamily: 'Batang' }}>
                        Veja e leia todas as revistas da Democracia do Povo no menu REVISTAS
                    </h2>
                    <br /><br />
                    <p style={{ textAlign: 'center', color: '#ff0000', fontFamily: 'Comic Sans MS', fontSize: '25px', padding: '15px' }}>
                        <strong style={{ color: 'green' }}>
                            <strong style={{ border: '2px solid green' }}> 1° Passo:</strong> Para divulgar a sua candidatura com pouco dinheiro.
                        </strong><br /><br />
                        <strong style={{ color: '#000264' }}>
                            Solicite a confecção da arte final à gráfica de sua preferência ou a um arte-finalista. Medidas em centímetros para as 4 capas: 18 x 28.
                            Se desejar, inclua na arte final de suas capas, cupons semelhantes aos que foram inseridos nas terceira e quarta capas
                            destas edições com 8 e 12 páginas da revista Democracia do Povo.
                            Salve em PDF as artes das 4 capas.
                            Imprimiremos e fixaremos no conteúdo de uma das edições da revista, com 8 ou 12 páginas, escolhida por você.
                        </strong><br /> <br />
                        Faça o seu pedido com um dos Representantes da Democracia do Povo.<br />
                        Não os encontrando informe aos profissionais em vendas de seu município a
                        possibilidade de serem cadastrados neste site para que possam efetivar os pedidos das revistas Democracia do Povo e
                        Panfleto <br /> em Revista aos candidatos a prefeito e a vereador. <br />
                    </p>
                    <h2 style={{ textAlign: 'center', color: '#000', paddingTop: '10px' }}>
                        TABELA DE PREÇOS
                    </h2>
                    <TabelaDePreco1 />
                    <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#ff0000', fontFamily: 'Batang' }}>
                        GANHE ESSA LINDA PLACA DE RECONHECIMENTO À SUA CANDIDATURA NA COMPRA DE QUALQUER QUANTIDADE DE EXEMPLARES ACIMA.
                    </h2>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={Imagem1} alt="img" style={{ maxWidth: '80vh' }} className="img-responsive" />
                    </div>
                    <p style={{ textAlign: 'center', color: '#000', paddingTop: '50px' }}>
                            Homenagem - ao candidato a prefeito - Poli Fictício <br />
                            Parabéns a você Poli Fictício, que tomou a corajosa decisão de se candidatar <br />
                            a uma função que exige enorme comprometimento com o dia a dia de seu município. <br />
                            Seus habitantes esperam, se eleito for, que os projetos, que você sancionará <br />
                            possam atender as necessidades básicas de todos, indistintamente. <br />
                            A Democracia do Povo enaltece a mulher e o homem políticos que <br />
                            governam junto ao cidadão, por entender que somente o sonho <br />
                            que se sonha juntos poderá se tomar realidade a todos. <br /><br />
                            São Paulo, 15 de novembro de 2020.
                        </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={Imagem2} alt="img" style={{ maxWidth: '70vh' }} className="img-responsive" />
                    </div>
                    <p style={{ textAlign: 'center', color: '#000', paddingTop: '50px' }}>
                            Homenagem - à candidata a vereadora - Maria José Dedepê <br />
                            Parabéns a você Maria José Dedepê, que tomou a corajosa decisão de se candidatar <br />
                            a uma função que exige enorme comprometimento com o dia a dia de seu município. <br />
                            Seus habitantes esperam, se eleita for, que os projetos, que você votará <br />
                            possam atender as necessidades básicas de todos, indistintamente. <br />
                            A Democracia do Povo enaltece a mulher e o homem políticos que <br />
                            legislam junto ao cidadão, por entender que somente o sonho <br />
                            que se sonha juntos poderá se tomar realidade a todos. <br /><br />
                            São Paulo, 15 de novembro de 2020.
                        </p>
                    <p style={{ textAlign: 'center', color: 'green', fontFamily: 'Comic Sans MS', fontSize: '25px', padding: '15px' }}>
                        <strong style={{ border: '2px solid green' }}>2° Passo:</strong> Para você começar a pensar em conquistar muitos votos.
                    </p>
                    <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#ff0000', fontFamily: 'Batang' }}>
                        Dados para contratação da transportadora de sua preferência
                    </h2>
                    <p style={{ textAlign: 'center', paddingTop: '20px', color: '#000', fontFamily: 'Batang' }}>Faça a simulação neste site: <a href="https://cargobr.com/">cargobr.com</a></p>
                    <TabelaDePreco5 />

                    <p style={{ textAlign: 'center', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '25px', padding: '15px' }}>
                        Os pedidos serão efetivados somente por um dos Representantes cadastrados neste site.
                    </p>
                    <div style={{ textAlign: 'center', paddingTop: '5px' }}>
                        <Button onClick={handleClick} style={{ color: 'yellow', backgroundColor: '#003d03' }}>
                            Pedido para a revista Democracia do Povo
                        </Button>
                    </div>
                    <br />
                    {show == true ? <Formulario1 /> : undefined}
                    <br /><br />
                    <h1 style={{ textAlign: 'center', paddingTop: '10px', color: '#000bd4', fontFamily: 'cursive' }}>
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
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={Revista4} alt="img" className="img-responsive img-thumbnail" style={{ width: '80vh' }} />
                    </div>
                    <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#ff0000', fontFamily: 'Batang' }}>
                        Veja e leia todas as revistas da Democracia do Povo no menu REVISTAS
                        </h2>
                    <br /><br />
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

                    <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#ff0000', fontFamily: 'Batang' }}>
                        Dados para contratação da transportadora de sua preferência
                    </h2>
                    <p style={{ textAlign: 'center', paddingTop: '20px', color: '#000', fontFamily: 'Batang' }}>Faça a simulação neste site: <a href="https://cargobr.com/">cargobr.com</a></p>
                    <TabelaDePreco6 />

                    <p style={{ textAlign: 'center', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '25px', padding: '15px' }}>
                        Os pedidos serão efetivados somente por um dos Representantes cadastrados neste site.
                    </p>
                    <div style={{ textAlign: 'center', paddingTop: '5px' }}>
                        <Button onClick={handleClick2} style={{ color: 'yellow', backgroundColor: '#003d03' }}>
                            Pedido para Panfleto em Revista
                        </Button>
                        {show2 == true ? <Formulario2 /> : undefined}
                    </div>
                    <br />
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