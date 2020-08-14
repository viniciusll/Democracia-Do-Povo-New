/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';

// import img1 from '../../../assets/images/features/feature48/app-store.png';
// import img2 from '../../../assets/images/features/feature48/play-store.png';

const Home = () => {
    return (
        <div>
            <div className="spacer bg-light">
                <h2 style={{ textAlign: 'center', paddingTop: '5px', color: '#000bd4',fontFamily: 'cursive' }}>
                    Seja o Representante de seu município.
                </h2>
                <h1 style={{ textAlign: 'center', paddingTop: '5px', color: '#000bd4',fontFamily: 'cursive' }}>
                    Político – Social – Comercial
                </h1>
                <p style={{ textAlign: 'center', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '25px', padding: '15px' }}>
                    Político - Trabalhar pela implantação da Democracia do Povo.
                </p>
                <p style={{ textAlign: 'center', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '25px', padding: '15px' }}>
                    Social – Melhorar o IDH (Índice de Desenvolvimento Humano) de seu município.
                </p>
                <p style={{ textAlign: 'center', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '25px', padding: '15px' }}>
                    Comercial - Ganhar dinheiro por essas justas causas.
                </p>
                <h3 style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4',fontFamily: 'Batang' }}>
                    Apresente essas oportunidades aos candidatos a vereador e a prefeito de todos os Partidos Políticos!
                </h3>
                <p style={{ textAlign: 'center', color: '#000'}}>
                    A Revista <strong>Democracia Do Povo</strong> é uma publicação do <strong>O SÓCIO BR</strong>.
                </p>
                <p style={{ textAlign: 'center', color: '#000'}}>
                    Um produto da <strong>LOJA VIRTUAL REAL</strong> desenvolvido para campanhas publicitárias eleitorais.
                </p>
                <p style={{ textAlign: 'center', color: '#000'}}>
                    O candidato e candidata às eleições municipais poderão anunciar nas quatro capas da revista,
                </p>
                <p style={{ textAlign: 'center', color: '#000'}}>
                    com conteúdo único, por edição, obtendo, desta forma, a sua REVISTA PRÓPRIA.
                </p>
            </div>
        </div>
    );
}

export default Home;
