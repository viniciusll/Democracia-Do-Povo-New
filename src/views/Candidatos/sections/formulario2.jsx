import React, { useState } from 'react';
import { InputGroup, Input, Button, Label, FormGroup, Form, CustomInput } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
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
    const [ruaEntrega, setRuaEntrega] = useState('');
    const [bairroEntrega, setBairroEntrega] = useState('');
    const [numeroEntrega, setNumeroEntrega] = useState('');
    const [estadoEntrega, setEstadoEntrega] = useState('');
    const [complemento, setComplementoEntrega] = useState('');
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
        data.append('ruaEntrega', ruaEntrega);
        data.append('bairroEntrega', bairroEntrega);
        data.append('numeroEntrega', numeroEntrega);
        data.append('complemento', complemento);
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
            <AvForm style={{ padding: '10px', alignItems: 'center'}}>
                <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                    FORMULÁRIO PARA PEDIDOS <br />
                    Revista Panfleto em Revista
                </h2>
                <h3 style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                    Nomes completos dos 4 (quatro) Candidatos e nomes como candidatos
                </h3>
                <FormGroup>
                        <AvField 
                            onChange={e => setPrimeiraCapa(e.target.value)} 
                            placeholder="Primeira capa:"
                            name='primeiraCapa'
                        />
                        <AvField 
                            onChange={e => setSegundaCapa(e.target.value)} 
                            placeholder="Segunda capa:" 
                            name='segundaCapa'
                        />
                        <AvField 
                            onChange={e => setTerceiraCapa(e.target.value)} 
                            placeholder="Terceira capa:"
                            name='terceiraCapa'
                        />
                        <AvField 
                            onChange={e => setQuartaCapa(e.target.value)} 
                            placeholder="Quarta capa:"
                            name='quartaCapa'
                        />
                    <h3 style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                        Nomes completos dos 8 (oito) Candidatos e nomes como candidatos:
                    </h3>
                        <AvField 
                            onChange={e => setPrimeiraCapa2(e.target.value)} 
                            placeholder="Primeira capa:"
                            name='primeiraCapa2'
                        />
                        <AvField 
                            onChange={e => setSegundaCapa2(e.target.value)} 
                            placeholder="Segunda capa:" 
                            name='segundaCapa2'
                        />
                        <AvField 
                            onChange={e => setPagina3(e.target.value)} 
                            placeholder="Página 3:" 
                            name='pagina3'
                        />
                        <AvField 
                            onChange={e => setPagina4(e.target.value)} 
                            placeholder="Página 4:"
                            name='pagina4' 
                        />
                        <AvField 
                            onChange={e => setPagina5(e.target.value)} 
                            placeholder="Página 5:" 
                            name='pagina5'
                        />
                        <AvField 
                            onChange={e => setPagina6(e.target.value)} 
                            placeholder="Página 6:"
                            name='pagina6'
                        />
                        <AvField 
                            onChange={e => setTerceiraCapa2(e.target.value)}
                            placeholder="Terceira capa:" 
                            name='terceiraCapa2'
                        />
                        <AvField 
                            onChange={e => setQuartaCapa2(e.target.value)} 
                            placeholder="Quarta capa:" 
                            name='quartaCapa2'
                        />
                    <h3 style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                        Nomes completos dos 12 (doze) Candidatos e nomes como candidatos:
                    </h3>
                        <AvField 
                            onChange={e => setPrimeiraCapa3(e.target.value)} 
                            placeholder="Primeira capa:" 
                            name='primeiraCapa3'
                        />
                        <AvField 
                            onChange={e => setSegundaCapa3(e.target.value)} 
                            placeholder="Segunda capa:" 
                            name='segundaCapa2'
                        />
                        <AvField 
                            onChange={e => set_Pagina3(e.target.value)} 
                            placeholder="Página 3:" 
                            name='set_pagina3'
                        />
                        <AvField 
                            onChange={e => set_Pagina4(e.target.value)} 
                            placeholder="Página 4:" 
                            name='set_pagina4'
                        />
                        <AvField 
                            onChange={e => set_Pagina5(e.target.value)} 
                            placeholder="Página 5:"
                            name='set_pagina5'
                        />
                        <AvField 
                            onChange={e => set_Pagina6(e.target.value)} 
                            placeholder="Página 6:" 
                            name='set_pagina6'
                        />
                        <AvField 
                            onChange={e => set_Pagina7(e.target.value)} 
                            placeholder="Página 7:" 
                            name='set_pagina7'
                        />
                        <AvField 
                            onChange={e => set_Pagina8(e.target.value)} 
                            placeholder="Página 8:" 
                            name='set_pagina8'
                        />
                        <AvField 
                            onChange={e => set_Pagina9(e.target.value)} 
                            placeholder="Página 9:" 
                            name='pagina9'
                        />
                        <AvField 
                            onChange={e => set_Pagina10(e.target.value)} 
                            placeholder="Página 10:" 
                            name='pagina10'
                        />
                        <AvField 
                            onChange={e => setTerceiraCapa3(e.target.value)} 
                            placeholder="Terceira capa:" 
                            name='terceiraCapa3'
                        />
                        <AvField 
                            onChange={e => setQuartaCapa3(e.target.value)} 
                            placeholder="Quarta capa:" 
                            name='quartaCapa3'
                        />
                        <AvField 
                            onChange={e => setRuaEntrega(e.target.value)} 
                            placeholder="Rua para entrega" 
                            name='rua'
                        />
                        <AvField 
                            onChange={e => setBairroEntrega(e.target.value)} 
                            placeholder="Bairro para entrega" 
                            name='bairro'
                        />
                        <AvField 
                            onChange={e => setNumeroEntrega(e.target.value)} 
                            type='number'  
                            placeholder="Número para entrega" 
                            name='numero'
                        />
                        <AvField 
                            onChange={e => setComplementoEntrega(e.target.value)} 
                            placeholder="Complemento" 
                            name='complemento'
                        />
                        <AvField 
                            onChange={e => setCidadeEntrega(e.target.value)} 
                            placeholder="Cidade para entrega:" 
                            name='cidade'
                            />
                        <AvField 
                            onChange={e => setEstadoEntrega(e.target.value)} 
                            placeholder="Estado para entrega:" 
                            name='estado'
                        />
                        <AvField 
                            onChange={e => setCepEntrega(e.target.value)} 
                            placeholder="CEP para entrega:" 
                            name='cep'
                        />
                        <AvField 
                            onChange={e => setEnderecoNotaFiscal(e.target.value)} 
                            placeholder="Endereço para nota fiscal:" 
                            name='enderecoNotaFiscal'
                        />
                        <AvField 
                            onChange={e => setCidadeNotaFiscal(e.target.value)} 
                            placeholder="Cidade para nota fiscal:" 
                            name='cidadeNotaFiscal'
                        />
                        <AvField 
                            onChange={e => setEstadoNotaFiscal(e.target.value)} 
                            placeholder="Estado para nota fiscal:" 
                            name='estadoNotaFiscal'
                        />
                        <AvField 
                            onChange={e => setCepNotaFiscal(e.target.value)} 
                            placeholder="CEP para nota fiscal:" 
                            name='cepNotaFiscal'
                        />
                        <AvField 
                            onChange={e => setInscRg(e.target.value)} 
                            placeholder="Insc. Est./RG:" 
                            name='inscRg'
                        />
                        <AvField 
                            onChange={e => setCnpjOuCpf(e.target.value)} 
                            placeholder="CNPJ/CPF:" 
                            name='cnpjOuCpf'    
                        />
                        <AvField 
                            onChange={e => setTelefone(e.target.value)} 
                            placeholder="Telefone:" 
                            name='telefone'    
                        />
                        <AvField 
                            onChange={e => setEmail(e.target.value)} 
                            placeholder="E-mail:" 
                            name='email'    
                        />
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='1' 
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                            Edição com 8 Candidatos - Quantidade: 2.000 Exemplares - Valor: R$3.600,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='2' 
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                            Edição com 8 Candidatos - Quantidade: 4.000 Exemplares - Valor: R$5.600,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='3' 
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                            Edição com 8 Candidatos - Quantidade: 8.000 Exemplares - Valor: R$10.400,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='4' 
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                            Edição com 12 Candidatos – Quantidade: 2.000 Exemplares - Valor: R$4.800,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='5' 
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                            Edição com 12 Candidatos – Quantidade: 4.000 Exemplares - Valor: R$7.800,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input value='6'
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                            Edição com 12 Candidatos – Quantidade: 8.000 Exemplares - Valor: R$14.400,00
                        </Label>
                    </FormGroup>
                    <FormGroup>
                            <Input 
                                onChange={e => setNomeDoRepresentanteComercial(e.target.value)} 
                                placeholder="Nome do Representante Comercial:" 
                                name='nomeDoRepresentanteComercial'    
                            />
                            <Input 
                                onChange={e => setCidadeDoRepresentanteComercial(e.target.value)} 
                                placeholder="Cidade do Representante Comercial" 
                                name='cidadeDoRepresentanteComercial'    
                            />
                        <p style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                            Envie as fotos dos candidatos e textos das matérias
                            que entrarão na edição da Revista Panfleto em Revista.
                        </p>
                            <CustomInput 
                                onChange={e => setFiles(e.target.files[0])} 
                                type="file" 
                                id="exampleCustomFileBrowser" 
                                name="customFile" />
                    </FormGroup>
                </FormGroup>
                <div style={{ textAlign: 'center', paddingTop: '5px' }}>
                    <Button onClick={() => enviarFormulario()} outline color="primary">
                        Enviar
                    </Button>
                </div>
            </AvForm>
        </div>
    )
}

export default Formulario2;