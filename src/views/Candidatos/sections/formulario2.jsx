import React, { useState } from 'react';
import { InputGroup, Input, Button, Label, FormGroup, Form, CustomInput } from 'reactstrap';
import api from '../../../api/ConnectApi';

const Formulario2 = () => {
    const [primeiraCapa, setPrimeiraCapa] = useState('');
    const [segundaCapa, setSegundaCapa] = useState('');
    const [terceiraCapa, setTerceiraCapa] = useState('');
    const [quartaCapa, setQuartaCapa] = useState('');
    const [primeiraCapa2, setPrimeiraCapa2] = useState('');
    const [segundaCapa2, setSegundaCapa2] = useState('');
    const [pagina3, setPagina3 ] = useState('');
    const [pagina4, setPagina4] = useState('');
    const [pagina5, setPagina5] = useState('');
    const [pagina6, setPagina6] = useState('');
    const [terceiraCapa2, setTerceiraCapa2] = useState('');
    const [quartaCapa2, setQuartaCapa2] = useState('');
    const [primeiraCapa3, setPrimeiraCapa3] = useState('');
    const [segundaCapa3, setSegundaCapa3] = useState('');
    const [_pagina3, set_Pagina3] = useState('');
    const [_pagina4, set_Pagina4] = useState('');
    const [_pagina5, set_Pagina5] = useState('');
    const [_pagina6, set_Pagina6] = useState('');
    const [pagina7, set_Pagina7] = useState('');
    const [pagina8, set_Pagina8] = useState('');
    const [pagina9, set_Pagina9] = useState('');
    const [pagina10, set_Pagina10] = useState('');
    const [terceiraCapa3, setTerceiraCapa3] = useState('');
    const [quartaCapa3, setQuartaCapa3] = useState('');
    const [nomeCompletoCandidato, setNomeCompletoCandidato] = useState('');
    const [cidadeEntrega, setCidadeEntrega] = useState('');
    const [enderecoEntrega, setEnderecoEntrega] = useState('');
    const [estadoEntrega, setEstadoEntrega] = useState('');
    const [cepEntrega, setCepEntrega] = useState('');
    const [enderecoNotaFiscal, setEnderecoNotaFiscal] = useState('');
    const [cidadeNotaFiscal, setCidadeNotaFiscal] = useState('');
    const [estadoNotaFiscal, setEstadoNotaFiscal] = useState('');
    const [cepNotaFiscal, setCepNotaFiscal] = useState('');
    const [inscRg, setInscRg] = useState('');
    const [cnpjOuCpf, setCnpjOuCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [exemplar, setExemplar] = useState('');
    const [nomeDoRepresentanteComercial, setNomeDoRepresentanteComercial] = useState('');
    const [cidadeDoRepresentanteComercial, setCidadeDoRepresentanteComercial] = useState('');
    const [image, setFiles] = useState(null);

    const enviarFormulario = async() => {
        const data = new FormData();
        data.append('file', image);
        data.append('primeiraCapa', primeiraCapa);
        data.append('segundaCapa', segundaCapa);
        data.append('terceiraCapa', terceiraCapa);
        data.append('quartaCapa', quartaCapa);
        data.append('primeiraCapa2', primeiraCapa2);
        data.append('segundaCapa2', segundaCapa2);
        data.append('pagina3', pagina3);
        data.append('pagina4', pagina4);
        data.append('pagina5', pagina5);
        data.append('pagina6', pagina6);
        data.append('terceiraCapa2', terceiraCapa2);
        data.append('quartaCapa2', quartaCapa2);
        data.append('primeiraCapa3', primeiraCapa3);
        data.append('segundaCapa3', segundaCapa3);
        data.append('_pagina3', _pagina3);
        data.append('_pagina4', _pagina4);
        data.append('_pagina5', _pagina5);
        data.append('_pagina6', _pagina6);
        data.append('pagina7', pagina7);
        data.append('pagina8', pagina8);
        data.append('pagina9', pagina9);
        data.append('pagina10', pagina10);
        data.append('terceiraCapa3', terceiraCapa3);
        data.append('quartaCapa3', quartaCapa3);
        data.append('nomeCompletoCandidato', nomeCompletoCandidato);
        data.append('cidadeEntrega', cidadeEntrega);
        data.append('enderecoEntrega', enderecoEntrega);
        data.append('estadoEntrega', estadoEntrega);
        data.append('cepEntrega', cepEntrega);
        data.append('enderecoNotaFiscal', enderecoNotaFiscal);
        data.append('cidadeNotaFiscal', cidadeNotaFiscal);
        data.append('estadoNotaFiscal', estadoNotaFiscal);
        data.append('cepNotaFiscal', cepNotaFiscal);
        data.append('inscRg', inscRg);
        data.append('cnpjOuCpf', cnpjOuCpf);
        data.append('telefone', telefone);
        data.append('email', email);
        data.append('exemplar', exemplar);
        data.append('nomeDoRepresentanteComercial', nomeDoRepresentanteComercial);
        data.append('cidadeDoRepresentanteComercial', cidadeDoRepresentanteComercial);

        const request = await api.post('/ficha/criarFormulario2', data);
        console.log(request);
    };

    return (
        <div>
            <Form style={{ padding: '10px', alignItems: 'center'}}>
                <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                    FORMULÁRIO PARA PEDIDOS <br />
                    Revista Panfleto em Revista
                </h2>
                <h3 style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                    Nomes completos dos 4 (quatro) Candidatos e nomes como candidatos
                </h3>
                <FormGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setPrimeiraCapa(e.target.value)} placeholder="Primeira capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setSegundaCapa(e.target.value)} placeholder="Segunda capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setTerceiraCapa(e.target.value)} placeholder="Terceira capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setQuartaCapa(e.target.value)} placeholder="Quarta capa:" />
                    </InputGroup>
                    <h3 style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                        Nomes completos dos 8 (oito) Candidatos e nomes como candidatos:
                    </h3>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setPrimeiraCapa2(e.target.value)} placeholder="Primeira capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setSegundaCapa2(e.target.value)} placeholder="Segunda capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setPagina3(e.target.value)} placeholder="Página 3:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setPagina4(e.target.value)} placeholder="Página 4:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setPagina5(e.target.value)} placeholder="Página 5:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setPagina6(e.target.value)} placeholder="Página 6:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setTerceiraCapa2(e.target.value)} placeholder="Terceira capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setQuartaCapa2(e.target.value)} placeholder="Quarta capa:" />
                    </InputGroup>
                    <h3 style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                        Nomes completos dos 12 (doze) Candidatos e nomes como candidatos:
                    </h3>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setPrimeiraCapa3(e.target.value)} placeholder="Primeira capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setSegundaCapa3(e.target.value)} placeholder="Segunda capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => set_Pagina3(e.target.value)} placeholder="Página 3:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => set_Pagina4(e.target.value)} placeholder="Página 4:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => set_Pagina5(e.target.value)} placeholder="Página 5:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => set_Pagina6(e.target.value)} placeholder="Página 6:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => set_Pagina7(e.target.value)} placeholder="Página 7:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => set_Pagina8(e.target.value)} placeholder="Página 8:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => set_Pagina9(e.target.value)} placeholder="Página 9:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => set_Pagina10(e.target.value)} placeholder="Página 10:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setTerceiraCapa3(e.target.value)} placeholder="Terceira capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setQuartaCapa3(e.target.value)} placeholder="Quarta capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setEnderecoEntrega(e.target.value)} placeholder="Endereço para entrega" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setCidadeEntrega(e.target.value)} placeholder="Cidade para entrega:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setEstadoEntrega(e.target.value)} placeholder="Estado para entrega:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setCepEntrega(e.target.value)} placeholder="CEP para entrega:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setEnderecoNotaFiscal(e.target.value)} placeholder="Endereço para nota fiscal:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setCidadeNotaFiscal(e.target.value)} placeholder="Cidade para nota fiscal:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setEstadoNotaFiscal(e.target.value)} placeholder="Estado para nota fiscal:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setCepNotaFiscal(e.target.value)} placeholder="CEP para nota fiscal:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setInscRg(e.target.value)} placeholder="Insc. Est./RG:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setCnpjOuCpf(e.target.value)} placeholder="CNPJ/CPF:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setTelefone(e.target.value)} placeholder="Telefone:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setEmail(e.target.value)} placeholder="E-mail:" />
                    </InputGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='Edição com 8 Candidatos - Quantidade: 2.000 Exemplares - Valor: R$3.600,00' 
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                            Edição com 8 Candidatos - Quantidade: 2.000 Exemplares - Valor: R$3.600,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='Edição com 8 Candidatos - Quantidade: 4.000 Exemplares - Valor: R$5.600,00' 
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                            Edição com 8 Candidatos - Quantidade: 4.000 Exemplares - Valor: R$5.600,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='Edição com 8 Candidatos - Quantidade: 8.000 Exemplares - Valor: R$10.400,00' 
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                            Edição com 8 Candidatos - Quantidade: 8.000 Exemplares - Valor: R$10.400,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='Edição com 12 Candidatos – Quantidade: 2.000 Exemplares - Valor: R$4.800,00' 
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                            Edição com 12 Candidatos – Quantidade: 2.000 Exemplares - Valor: R$4.800,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='Edição com 12 Candidatos – Quantidade: 4.000 Exemplares - Valor: R$7.800,00' 
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                            Edição com 12 Candidatos – Quantidade: 4.000 Exemplares - Valor: R$7.800,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='Edição com 12 Candidatos – Quantidade: 8.000 Exemplares - Valor: R$14.400,00'
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                            Edição com 12 Candidatos – Quantidade: 8.000 Exemplares - Valor: R$14.400,00
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                            <Input onChange={e => setNomeDoRepresentanteComercial(e.target.value)} placeholder="Nome do Representante Comercial:" />
                        </InputGroup>
                        <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                            <Input onChange={e => setCidadeDoRepresentanteComercial(e.target.value)} placeholder="Cidade do Representante Comercial" />
                        </InputGroup>
                        <p style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                            Envie as fotos dos candidatos e textos das matérias
                            que entrarão na edição da Revista Panfleto em Revista.
                        </p>
                        <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                            <CustomInput onChange={e => setFiles(e.target.files[0])} type="file" id="exampleCustomFileBrowser" name="customFile" />
                        </InputGroup>
                    </FormGroup>
                </FormGroup>
                <div style={{ textAlign: 'center', paddingTop: '5px' }}>
                    <Button onClick={() => enviarFormulario()} outline color="primary">
                        Enviar
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Formulario2;