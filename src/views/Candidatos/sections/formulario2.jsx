import React, { useState, useRef, useEffect } from 'react';
import { InputGroup, Input, Button, Label, FormGroup, Form, CustomInput, UncontrolledAlert } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import api from '../../../api/ConnectApi';
import { debounce } from 'lodash';
import axios from 'axios';
import { mask, unMask } from 'remask';

const Formulario2 = () => {
    const [primeiraCapa, setPrimeiraCapa] = useState('');
    const [segundaCapa, setSegundaCapa] = useState('');
    const [terceiraCapa, setTerceiraCapa] = useState('');
    const [quartaCapa, setQuartaCapa] = useState('');
    const [primeiraCapa2, setPrimeiraCapa2] = useState('');
    const [segundaCapa2, setSegundaCapa2] = useState('');
    const [pagina3, setPagina3] = useState('');
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
    const [nomeComprador, setnomeComprador] = useState('');
    const [nomeNotaFiscal, setNomeNotaFiscal] = useState('');
    const [visible2, setVisible2] = useState(false);
    const [nomeTransportadora, setNomeTransportadora] = useState('');
    const [enderecoTransportadora, setEnderecoTransportadora] = useState('');
    const [foneTransportadora, setFoneTransportadora] = useState('');
    const [emailTransportadora, setEmailTransportadora] = useState('');
    const [representantes, setRepresentantes] = useState([]);
    const [visible, setVisible] = useState(false);

    const onDismiss = () => setVisible2(false);
    const onDismiss1 = () => setVisible(false);

    const handleUpload = async file => {
        console.log(file);
        setFiles(file);
    };

    const getRepresentantes = async () => {
        await api.get('/ficha/representantes')
            .then((response) => {
                const nomesRepresentantes = response.data.nomesRepresentantes;
                setRepresentantes(nomesRepresentantes);
            });
    };

    useEffect(() => {
        getRepresentantes();
    }, [])

    const enviarFormulario = async () => {
        const data = new FormData();
        data.append('file', image);
        data.append('nomeTransportadora', nomeTransportadora);
        data.append('enderecoTransportadora', enderecoTransportadora);
        data.append('foneTransportadora', foneTransportadora);
        data.append('emailTransportadora', emailTransportadora);
        data.append('nomeComprador', nomeComprador);
        data.append('nomeNotaFiscal', nomeNotaFiscal);
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
        if (nomeTransportadora === '' ||
            enderecoTransportadora === '' ||
            foneTransportadora === '' ||
            emailTransportadora === '' ||
            nomeComprador === '' ||
            nomeNotaFiscal === '' ||
            inscRg === '' ||
            cnpjOuCpf === '' ||
            cepEntrega === '' ||
            ruaEntrega === '' ||
            bairroEntrega === '' ||
            numeroEntrega === '' ||
            cidadeEntrega === '' ||
            estadoEntrega === '' ||
            complemento === '' ||
            exemplar === ''
            ) {
                return setVisible(true);
        } else {
            const request = await api.post('/ficha/criarFormulario2', data);
            console.log(request);
            setVisible2(true);
        }

    };

    const delayedQuery = useRef(
        debounce(e => {
            setCepEntrega(e);
            axios.get(`http://viacep.com.br/ws/${e}/json/`)
                .then((response) => {
                    console.log(response.data);
                    setCidadeEntrega(response.data.localidade);
                    setEstadoEntrega(response.data.uf);
                    setBairroEntrega(response.data.bairro);
                    setRuaEntrega(response.data.logradouro);
                }).catch(() => {
                    setCidadeEntrega('');
                    setEstadoEntrega('');
                    setBairroEntrega('');
                    setRuaEntrega('');
                });
        }, 500)
    ).current;

    const handleChange = (e) => {
        delayedQuery(e.target.value);
    };


    const verificationCpf = (cpf) => {
        cpf = cpf.replace(/[^\d]+/g, '');
        let sum, leftover;
        sum = 0;
        if (cpf == "00000000000") return false;

        for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        leftover = (sum * 10) % 11;

        if ((leftover == 10) || (leftover == 11)) leftover = 0;
        if (leftover != parseInt(cpf.substring(9, 10))) return false;

        sum = 0;
        for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        leftover = (sum * 10) % 11;

        if ((leftover == 10) || (leftover == 11)) leftover = 0;
        if (leftover != parseInt(cpf.substring(10, 11))) return false;

        return true;
    };

    const verificationCnpj = (cnpj) => {
        cnpj = cnpj.replace(/[^\d]+/g, '');
        if (cnpj == '') return false;

        if (cnpj.length != 14)
            return false;

        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")

            return false;

        // Valida DVs
        let size = cnpj.length - 2
        let numbers = cnpj.substring(0, size);
        let digits = cnpj.substring(size);

        let sum = 0;
        let pos = size - 7;
        for (let i = size; i >= 1; i--) {
            sum += numbers.charAt(size - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        let result;

        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != digits.charAt(0))
            return false;

        size = size + 1;
        numbers = cnpj.substring(0, size);
        sum = 0;
        pos = size - 7;

        for (let i = size; i >= 1; i--) {
            sum += numbers.charAt(size - i) * pos--;
            if (pos < 2)
                pos = 9;
        }

        result = sum % 11 < 2 ? 0 : 11 - sum % 11;

        if (result != digits.charAt(1))
            return false;

        return true;
    };

    const verificationCpfCnpj = (value) => {
        if (value.replace(/\D/g, "").length == 11) {
            if (!verificationCpf(value)) {
                return 'CPF inválido';
            } else {
                setCnpjOuCpf(value);
                return true
            };
        } else if (value.replace(/\D/g, "").length == 14) {
            if (!verificationCnpj(value)) {
                return 'CNPJ inválido';
            } else {
                setCnpjOuCpf(value);
                return true
            }
        } else {
            return 'CPF ou CNPJ inválido';
        };
    };

    const handleChangeCpfCnpj = (e) => {
        const value = e.target.value;
        setCnpjOuCpf(mask(unMask(value), ['999.999.999-99', '99.999.999/9999-99']));
    };

    const handleChangeTelefone = (e) => {
        const value = e.target.value;
        setTelefone(mask(unMask(value), ['99 99999-9999', '99 9999-9999']))
    };

    return (
        <div>
            <AvForm style={{ padding: '10px', alignItems: 'center' }}>
                <UncontrolledAlert UncontrolledAlert isOpen={visible2} toggle={onDismiss} color="success" fade={false}>
                    Pedido Emitido com sucesso
                </UncontrolledAlert>
                <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                    FORMULÁRIO PARA PEDIDOS <br />
                    Revista Panfleto em Revista
                </h2>
                <FormGroup>
                    <AvField onChange={e => setNomeTransportadora(e.target.value)}
                        name='nomeTransportadora'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                        label="NOME DA TRANSPORTADORA ESCOLHIDA:"
                    />
                    <AvField onChange={e => setEnderecoTransportadora(e.target.value)}
                        name='enderecoTransportadora'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                        label="Endereço em São Paulo:"
                    />
                    <AvField onChange={e => setFoneTransportadora(e.target.value)}
                        name='foneTransportadora'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                        label="Fone:"
                    />
                    <AvField onChange={e => setEmailTransportadora(e.target.value)}
                        name='emailTransportadora'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                        label="E-mail:"
                    />
                    <h3 style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                        Nomes completos dos 4 (quatro) Candidatos e nomes como candidatos
                    </h3>
                    <AvField
                        onChange={e => setnomeComprador(e.target.value)}
                        label="Nome Comprador:"
                        name='nomeComprador'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <AvField
                        onChange={e => setPrimeiraCapa(e.target.value)}
                        label="Primeira capa:"
                        name='primeiraCapa'

                    />
                    <AvField
                        onChange={e => setSegundaCapa(e.target.value)}
                        label="Segunda capa:"
                        name='segundaCapa'

                    />
                    <AvField
                        onChange={e => setTerceiraCapa(e.target.value)}
                        label="Terceira capa:"
                        name='terceiraCapa'

                    />
                    <AvField
                        onChange={e => setQuartaCapa(e.target.value)}
                        label="Quarta capa:"
                        name='quartaCapa'

                    />
                    <h3 style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                        Nomes completos dos 8 (oito) Candidatos e nomes como candidatos:
                    </h3>
                    <AvField
                        onChange={e => setPrimeiraCapa2(e.target.value)}
                        label="Primeira capa:"
                        name='primeiraCapa2'

                    />
                    <AvField
                        onChange={e => setSegundaCapa2(e.target.value)}
                        label="Segunda capa:"
                        name='segundaCapa2'

                    />
                    <AvField
                        onChange={e => setPagina3(e.target.value)}
                        label="Página 3:"
                        name='pagina3'

                    />
                    <AvField
                        onChange={e => setPagina4(e.target.value)}
                        label="Página 4:"
                        name='pagina4'

                    />
                    <AvField
                        onChange={e => setPagina5(e.target.value)}
                        label="Página 5:"
                        name='pagina5'

                    />
                    <AvField
                        onChange={e => setPagina6(e.target.value)}
                        label="Página 6:"
                        name='pagina6'

                    />
                    <AvField
                        onChange={e => setTerceiraCapa2(e.target.value)}
                        label="Terceira capa:"
                        name='terceiraCapa2'

                    />
                    <AvField
                        onChange={e => setQuartaCapa2(e.target.value)}
                        label="Quarta capa:"
                        name='quartaCapa2'

                    />
                    <h3 style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                        Nomes completos dos 12 (doze) Candidatos e nomes como candidatos:
                    </h3>
                    <AvField
                        onChange={e => setPrimeiraCapa3(e.target.value)}
                        label="Primeira capa:"
                        name='primeiraCapa3'

                    />
                    <AvField
                        onChange={e => setSegundaCapa3(e.target.value)}
                        label="Segunda capa:"
                        name='segundaCapa2'

                    />
                    <AvField
                        onChange={e => set_Pagina3(e.target.value)}
                        label="Página 3:"
                        name='set_pagina3'

                    />
                    <AvField
                        onChange={e => set_Pagina4(e.target.value)}
                        label="Página 4:"
                        name='set_pagina4'

                    />
                    <AvField
                        onChange={e => set_Pagina5(e.target.value)}
                        label="Página 5:"
                        name='set_pagina5'

                    />
                    <AvField
                        onChange={e => set_Pagina6(e.target.value)}
                        label="Página 6:"
                        name='set_pagina6'

                    />
                    <AvField
                        onChange={e => set_Pagina7(e.target.value)}
                        label="Página 7:"
                        name='set_pagina7'

                    />
                    <AvField
                        onChange={e => set_Pagina8(e.target.value)}
                        label="Página 8:"
                        name='set_pagina8'

                    />
                    <AvField
                        onChange={e => set_Pagina9(e.target.value)}
                        label="Página 9:"
                        name='pagina9'

                    />
                    <AvField
                        onChange={e => set_Pagina10(e.target.value)}
                        label="Página 10:"
                        name='pagina10'

                    />
                    <AvField
                        onChange={e => setTerceiraCapa3(e.target.value)}
                        label="Terceira capa:"
                        name='terceiraCapa3'

                    />
                    <AvField
                        onChange={e => setQuartaCapa3(e.target.value)}
                        label="Quarta capa:"
                        name='quartaCapa3'

                    />
                    <br />
                    <AvField
                        onChange={handleChange}
                        label="CEP para entrega:"
                        name='cep'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <AvField
                        value={estadoEntrega}
                        onChange={e => setEstadoEntrega(e.target.value)}
                        label="Estado para entrega:"
                        name='estado'
                        disabled
                    />
                    <AvField
                        value={cidadeEntrega}
                        onChange={e => setCidadeEntrega(e.target.value)}
                        label="Cidade para entrega:"
                        name='cidade'
                        disabled
                    />
                    <AvField
                        value={bairroEntrega}
                        onChange={e => setBairroEntrega(e.target.value)}
                        label="Bairro para entrega"
                        name='bairro'
                        disabled
                    />
                    <AvField
                        value={ruaEntrega}
                        onChange={e => setRuaEntrega(e.target.value)}
                        label="Rua para entrega"
                        name='rua'
                        disabled
                    />
                    <AvField
                        onChange={e => setNumeroEntrega(e.target.value)}
                        type='number'
                        label="Número"
                        name='numero'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <AvField
                        onChange={e => setComplementoEntrega(e.target.value)}
                        label="Complemento"
                        name='complemento'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <AvField
                        onChange={e => setNomeNotaFiscal(e.target.value)}
                        label="Nome Nota fiscal:"
                        name='nomeNotaFiscal'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <AvField
                        onChange={e => setEnderecoNotaFiscal(e.target.value)}
                        label="Endereço para nota fiscal:"
                        name='enderecoNotaFiscal'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <AvField
                        onChange={e => setCidadeNotaFiscal(e.target.value)}
                        label="Cidade para nota fiscal:"
                        name='cidadeNotaFiscal'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <AvField
                        onChange={e => setEstadoNotaFiscal(e.target.value)}
                        label="Estado para nota fiscal:"
                        name='estadoNotaFiscal'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <AvField
                        onChange={e => setCepNotaFiscal(e.target.value)}
                        label="CEP para nota fiscal:"
                        name='cepNotaFiscal'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <AvField
                        onChange={e => setInscRg(e.target.value)}
                        label="Insc. Est./RG:"
                        name='inscRg'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <AvField
                        onChange={handleChangeCpfCnpj}
                        label="CNPJ/CPF:"
                        name='cpf'
                        value={cnpjOuCpf}
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' },
                            verificationCpfCnpj
                        }}
                    />
                    <AvField
                        onChange={handleChangeTelefone}
                        label="Telefone:"
                        name='telefone'
                        value={telefone}
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <AvField
                        onChange={e => setEmail(e.target.value)}
                        label="E-mail:"
                        name='email'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='1'
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                              Edição com 4 Candidatos - Quantidade: 2.000 Exemplares - Valor: R$2.000,00
                            </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='2'
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                              Edição com 4 Candidatos - Quantidade: 4.000 Exemplares - Valor: R$3.000,00
                            </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='3'
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                             Edição com 4 Candidatos - Quantidade: 8.000 Exemplares - Valor: R$5.400,00
                            </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='4'
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                            Edição com 8 Candidatos - Quantidade: 2.000 Exemplares - Valor: R$3.600,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='5'
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                            Edição com 8 Candidatos - Quantidade: 4.000 Exemplares - Valor: R$5.600,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='6'
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                            Edição com 8 Candidatos - Quantidade: 8.000 Exemplares - Valor: R$10.400,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='7'
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                            Edição com 12 Candidatos – Quantidade: 2.000 Exemplares - Valor: R$4.800,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='8'
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                            Edição com 12 Candidatos – Quantidade: 4.000 Exemplares - Valor: R$7.800,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='9'
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio1' />{' '}
                            Edição com 12 Candidatos – Quantidade: 8.000 Exemplares - Valor: R$14.400,00
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="select"
                            name='representantes'
                            label='representantes'
                            onChange={e => setNomeDoRepresentanteComercial(e.target.value)}
                        >
                            <option>Escolha o representante</option>
                            {representantes.map(representante => {
                                return <option key={representante} value={representante}>{representante}</option>
                            })}
                        </Input>
                        <AvField
                            onChange={e => setCidadeDoRepresentanteComercial(e.target.value)}
                            label="Cidade do Representante Comercial"
                            name='cidadeDoRepresentanteComercial'
                            validate={{
                                required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                            }}
                        />
                        <p style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                            Envie as fotos dos candidatos e textos das matérias
                            que entrarão na edição da Revista Panfleto em Revista.
                        </p>
                        <FormGroup>
                            <Label
                                for="exampleFile"
                                style={{
                                    backgroundColor: '#3639ff',
                                    borderRadius: '3px',
                                    color: "#fff",
                                    cursor: 'pointer',
                                    margin: '10px',
                                    padding: '6px 20px',
                                    width: '100%'
                                }}
                            >
                                Escolha seu arquivo
                            </Label>
                            <Input type="file" name="file" style={{ display: "none" }} onChange={(e) => handleUpload(e.target.files[0])} id="exampleFile" />
                            <span style={{ paddingLeft: '10px' }}>{!image ? 'Nenhum arquivo selecionado' : image.name}</span>
                        </FormGroup>
                    </FormGroup>
                </FormGroup>
                <div style={{ textAlign: 'center', paddingTop: '5px' }}>
                <UncontrolledAlert isOpen={visible2} toggle={onDismiss} color="success" fade={false}>
                    Pedido Emitido com sucesso
                </UncontrolledAlert>
                <UncontrolledAlert isOpen={visible} toggle={onDismiss1} color="danger" fade={false}>
                    Não Foi possível emitir o pedido verifique todos os campos
                </UncontrolledAlert>
                    <p style={{ color: 'red' }}>Ao enviar você receberá no email cadastrado neste formulário as opções para efetuar o pagamento</p>
                    <Button onClick={() => enviarFormulario()} outline color="primary">
                        Enviar
                    </Button>
                </div>
            </AvForm>
        </div>
    );
};

export default Formulario2;