/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <div className="footer4 b-t spacer" style={{  backgroundColor: '#003d03' }}>
            <Container>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <p style={{ color: '#FFF' }}>SÓCIO BR PRODUTOS E SERVIÇOS INOVADORES EIRELI.</p>
                        <p style={{ color: '#FFF' }}>Rua bom sucesso 407 Tatuapé - São Paulo - SP.</p>
                        <p style={{ color: '#FFF' }}>CNPJ: 28.398.851/0001-53</p>
                    </div>
                    <div>
                        <p style={{ color: '#FFF' }}>Copyright © 2020 Todos os direitos reservados | Democracia Do Povo </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default Footer;
