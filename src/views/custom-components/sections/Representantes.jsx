/* eslint-disable */
import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import TableComissao from "./table.jsx";
import TableComissaoCandidatos from './tableComissaoCandidatos';
import TableComissaoCandidatos8 from './tableComissao8Candidatos';
import TableComissaoCandidatos12 from './tableComissao12Candidatos';
import { Button, Input, InputGroup } from 'reactstrap';
import { UncontrolledAlert  } from 'reactstrap';
import api from '../../../api/ConnectApi';
import { Link } from 'react-router-dom';

import Revista3 from '../../../assets/images/revista 3.png';
import Revista4 from '../../../assets/images/revista 4.png';

const Representantes = () => {

    
    const [show, setShow] = useState(false);
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [fone, setFone] = useState('');
    const [fone2, setFone2] = useState('');
    const [email, setEmail] = useState('');
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);

    const onDismiss = () => setVisible(false);
    const onDismiss2 = () => setVisible(false);

    const handleClick = () => {
        if(show == true) {
            setShow(false);
        } else {
            setShow(true);
        }
    };

    const enviarFicha = async() => {
        if (nome == '' || endereco == '' || cidade == '' || estado == '' || cep == '' || fone == '' || email == '') {
            return setVisible(true);
        };

        const response = await api.post('/ficha/criandoFicha', {
            nome: nome,
            endereco: endereco,
            cidade: cidade,
            estado: estado,
            cep: cep,
            fone: fone,
            fone2: fone2,
            email: email
        })
        setVisible2(true);
        console.log(response);
        setShow(false);
        setNome('');
        setEndereco('');
        setEstado('');
        setCidade('');
        setCep('');
        setFone('');
        setFone2('');
        setEmail('');
    };

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

                <Container style={{  alignItems: 'center' }}>
                        <Row>
                            <Col lg="10" className="text-center m-b-30">
                                <img src={Revista3} alt="img" className="img-responsive img-thumbnail" width='200' />
                            </Col>
                        </Row>
                </Container>

                <TableComissao />

               <p style={{ textAlign: 'center', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '25px', padding: '15px' }}>
                   A Revista PANFLETO EM REVISTA é uma publicação do O SÓCIO BR.
               </p>
               <p style={{ textAlign: 'center', color: '#000'}}>
                   Um produto da LOJA VIRTUAL REAL.
               </p>
               <p style={{ textAlign: 'center', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '15px', padding: '15px', wordWrap: 'break-word' }}>
                    Os custos de publicação pelo SISTEMA COOPERADO DE PANFLETAGEM diminuem, consideravelmente, 
                    ao serem diluídos entre os participantes das edições desta revista.
               </p>
               <Container style={{  alignItems: 'center' }}>
                        <Row>
                            <Col lg="10" className="text-center m-b-30">
                                <img src={Revista4} alt="img" className="img-responsive img-thumbnail" width='200' />
                            </Col>
                        </Row>
                </Container>

                <h3 style={{ textAlign: 'center', paddingTop: '20px', color: '#ff0000',fontFamily: 'Batang' }} >
                    Veja e leia todas as revistas da Democracia do Povo no menu REVISTAS
                </h3>

                <h4 style={{ textAlign: 'center', color: '#000'}}>TABELA DE PREÇOS E COMISSÕES PARA 4 (quatro) Candidatos</h4>
                <TableComissaoCandidatos />
                <h4 style={{ textAlign: 'center', color: '#000'}}>TABELA DE PREÇOS E COMISSÕES PARA 8 (oito) Candidatos</h4>
                <TableComissaoCandidatos8 />
                <h4 style={{ textAlign: 'center', color: '#000'}}>TABELA DE PREÇOS E COMISSÕES PARA 12 (doze) Candidatos</h4>
                <TableComissaoCandidatos12 />
                <div style={{ textAlign: 'center' }}>
                    <Button color="primary">
                         <Link to='/contratos' style={{ textDecoration: 'none', color: '#fff' }}>
                            CONTRATO DE REPRESENTAÇÃO Leia, <br /> preencha, reconheça firma e envie-o
                        </Link>
                    </Button>
                </div>
                <div style={{ textAlign: 'center', paddingTop: '5px' }}>
                    <Button outline onClick={handleClick} color="primary">CADASTRE-SE</Button>
                </div>
                <br/>
                <UncontrolledAlert fade={false} isOpen={visible2} toggle={onDismiss2} color='success'>
                    Cadastro feito com sucesso.
                </UncontrolledAlert>
                {
                    show == true ?
                        <div style={{ textAlign: 'center' }}>
                            <br/>
                            <UncontrolledAlert fade={false} isOpen={visible} toggle={onDismiss} color='danger'>
                                Preencha todos Campos 
                            </UncontrolledAlert>
                            <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                                <Input placeholder='Nome' onChange={(e) => setNome(e.target.value)} />
                            </InputGroup>
                            <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                                <Input onChange={(e) => setEndereco(e.target.value)} placeholder='Endereço' />
                            </InputGroup>
                            <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                                <Input onChange={(e) => setCidade(e.target.value)} placeholder='Cidade' />
                            </InputGroup>
                            <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                                <Input onChange={(e) => setEstado(e.target.value)} placeholder='Estado' />
                            </InputGroup>
                            <InputGroup size="lg" style={{ paddingTop: '10px' }} >
                                <Input onChange={(e) => setCep(e.target.value)} placeholder='Cep' />
                            </InputGroup>
                            <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                                <Input onChange={(e) => setFone(e.target.value)} placeholder='Fone' />
                            </InputGroup>
                            <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                                <Input onChange={(e) => setFone2(e.target.value)} placeholder='Fone (2)' />
                            </InputGroup>
                            <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                                <Input onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' />
                            </InputGroup>
                            <br/>
                            <Button outline onClick={enviarFicha} color="primary">Enviar</Button>
                        </div> :
                        undefined
                }
            </div>
        </div>
    );
}

export default Representantes;
