import React, { useState } from 'react';
import { InputGroup, Input, Button, Label, FormGroup, Form, CustomInput } from 'reactstrap';
import api from '../../../api/ConnectApi';

const Formulario1 = () => {
    const [nomeCompletoCandidato, setNomeCompletoCandidato] = useState('');
    const [nomeComoCandidato, setNomeComoCandidato] = useState('');
    const [candidatoA, setCandidatoA] = useState('');
    const [cidadeEntrega, setCidadeEntrega] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
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

    const handleUpload = async file => {
        setFiles(file)
    };

    const enviarFormulario = async () => {
        console.log('files: ', image);
        const data = new FormData();
        data.append('file', image)
        data.append('nomeCompletoCandidato', nomeCompletoCandidato);
        data.append('nomeComoCandidato', nomeComoCandidato);
        data.append('candidatoA', candidatoA);
        data.append('cidadeEntrega', cidadeEntrega);
        data.append('rua', rua);
        data.append('numero', numero);
        data.append('complemento', complemento);
        data.append('bairro', bairro);
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

        if (
            image == null ||
            nomeCompletoCandidato == '' || 
            nomeComoCandidato == '' || 
            candidatoA == '' || 
            cidadeEntrega == '' || 
            rua == '' || 
            numero == '' || 
            bairro == '' || 
            estadoEntrega == ''||
            cepEntrega == ''||
            enderecoNotaFiscal == ''||
            cidadeNotaFiscal == ''||
            cepNotaFiscal == ''||
            inscRg == ''||
            cnpjOuCpf == ''||
            email == ''||
            exemplar == ''||
            nomeDoRepresentanteComercial == ''||
            cidadeDoRepresentanteComercial == ''
            ) {
            return alert('Preencha todos os capos!');
        } else {
            const request = await api.post('/ficha/criarFormulario1', data);
            console.log(request);
        };
    };

    return (
        <div>
            <Form className="uploader" encType="multipart/form-data" style={{ padding: '10px', alignItems: 'center'}}>
                <FormGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setNomeCompletoCandidato(e.target.value)} placeholder="Nome completo do Candidato:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setNomeComoCandidato(e.target.value)} placeholder="Nome como candidato:" />
                    </InputGroup>
                </FormGroup>
                <div style={{ textAlign: 'center'}}>
                <p>Candidato a: </p>
                    <FormGroup style={{ paddingTop: '10px' }} check inline>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='Prefeito' onChange={e => setCandidatoA(e.target.value)} type="radio" name='radio1' />{' '}
                            Prefeito
                        </Label>
                        <Label check>
                            <Input value='Vereador' onChange={e => setCandidatoA(e.target.value)} type="radio" name='radio1' />{' '}
                            Vereador
                        </Label>
                    </FormGroup>
                </div>
                <FormGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setRua(e.target.value)} placeholder="Rua para entrega:" name='street' />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setNumero(e.target.value)} placeholder="Número para entrega:" name='number' type='number' />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setBairro(e.target.value)} placeholder="Bairro para entrega:" name='bairro' />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setComplemento(e.target.value)} placeholder="Complemento para entrega:" />
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
                </FormGroup>
                <div style={{ textAlign: 'center'}}>
                <p>Quantidade de Exemplares: </p>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='1'
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                                Edição com 8 páginas + 4 capas – Quantidade: 250 Exemplares - Valor: R$877,50
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='2' 
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio2' />{' '}
                            Edição com 8 páginas + 4 capas – Quantidade: 500 Exemplares - Valor: R$1.485,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='3' 
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                            Edição com 8 páginas + 4 capas – Quantidade: 1.000 Exemplares - Valor: R$2.350,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='4' 
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                            Edição com 8 páginas + 4 capas – Quantidade: 2.000 Exemplares - Valor: R$3.560,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='5' 
                                type="radio" onChange={e => setExemplar(e.target.value)}name='radio2' />{' '}
                            Edição com 8 páginas + 4 capas – Quantidade: 4.000 Exemplares - Valor: R$7.120,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='6' 
                                type="radio" onChange={e => setExemplar(e.target.value)}name='radio2' />{' '}
                            Edição com 8 páginas + 4 capas – Quantidade: 5.000 Exemplares - Valor: R$8.900,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='7' 
                                type="radio" onChange={e => setExemplar(e.target.value)}name='radio2' />{' '}
                            Edição com 8 páginas + 4 capas – Quantidade: 8.000 Exemplares - Valor: R$17.400,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='8' 
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 250 Exemplares - Valor: R$1.087,50
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='9' 
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 500 Exemplares - Valor: R$1.905,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='10' 
                                type="radio" onChange={e => setExemplar(e.target.value)}name='radio2' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 1.000 Exemplares - Valor: R$3.050,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='11' 
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 2.000 Exemplares - Valor: R$4.680,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='12' 
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 4.000 Exemplares - Valor: R$9.360,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='13' 
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 5.000 Exemplares - Valor: R$11.700,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='14' 
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 8.000 Exemplares - Valor: R$23.000,00
                        </Label>
                    </FormGroup>
                </div>
                <FormGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setNomeDoRepresentanteComercial(e.target.value)} placeholder="Nome do Representante Comercial:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input onChange={e => setCidadeDoRepresentanteComercial(e.target.value)} placeholder="Cidade do Representante Comercial" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <CustomInput onChange={e => handleUpload(e.target.files[0])} type="file" id="exampleCustomFileBrowser" name="file" />
                    </InputGroup>
                    <p style={{ textAlign: 'center', color: '#000264', fontFamily: 'Comic Sans MS', fontSize: '25px', padding: '15px' }}>
                        Solicite a confecção da arte final à gráfica de sua preferência ou a um arte-finalista para <br />
                        a divulgação de sua candidatura, com exclusividade, nas 4 capas da Revista <br />
                        Democracia do Povo, a qual será fixada no conteúdo desta. <br />
                        Se desejar, inclua na arte final de suas capas, cupons semelhantes aos <br />
                        que foram inseridos nas terceira e quarta capas desta revista.<br />
                    </p>
                </FormGroup>
                <div style={{ textAlign: 'center', paddingTop: '5px' }}>
                    <Button onClick={() => enviarFormulario()} outline color="primary">Enviar</Button>
                </div>
            </Form>
        </div>
    );
};

export default Formulario1;