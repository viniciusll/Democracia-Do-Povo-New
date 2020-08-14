import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';
import DemocraciaDoPovo from '../../assets/images/logodemocraciadopovo.png';

const HeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title"><img className="img-responsive" src={DemocraciaDoPovo} alt="democracia do povo"/></h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner;
