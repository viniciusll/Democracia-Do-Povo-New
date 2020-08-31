import React, { useState, useEffect, useRef } from 'react';
import { Input, Button, Label, FormGroup, CustomInput, UncontrolledAlert } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import api from '../../../api/ConnectApi';
import axios from 'axios';
import { debounce } from 'lodash';
import { mask, unMask } from 'remask';

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
    const [nomeNotaFiscal, setNomeNotaFiscal] = useState('');
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [textSearch, setTextSearch] = useState('');
    const [representantes, setRepresentantes] = useState([]);

    const onDismiss = () => setVisible2(false);

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

    const handleUpload = async file => {
        setFiles(file);
    };

    const enviarFormulario = async () => {
        console.log('representante comercial: ', nomeDoRepresentanteComercial);
        console.log('files: ', image);
        const data = new FormData();
        data.append('file', image);
        data.append('nomeCompletoCandidato', nomeCompletoCandidato);
        data.append('nomeComoCandidato', nomeComoCandidato);
        data.append('candidatoA', candidatoA);
        data.append('nomeNotaFiscal', nomeNotaFiscal);
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
            image === null ||
            nomeCompletoCandidato === '' ||
            nomeNotaFiscal === '' ||
            nomeComoCandidato === '' ||
            candidatoA === '' ||
            cidadeEntrega === '' ||
            rua === '' ||
            numero === '' ||
            bairro === '' ||
            estadoEntrega === '' ||
            cepEntrega === '' ||
            enderecoNotaFiscal === '' ||
            cidadeNotaFiscal === '' ||
            cepNotaFiscal === '' ||
            inscRg === '' ||
            cnpjOuCpf === '' ||
            email === '' ||
            exemplar === '' ||
            nomeDoRepresentanteComercial === '' ||
            cidadeDoRepresentanteComercial === ''
        ) {
            return setVisible(true);
        } else {
            const request = await api.post('/ficha/criarFormulario1', data);
            console.log(request);
            setVisible2(true)
        };
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
                return true
            };
        } else if (value.replace(/\D/g, "").length == 14) {
            if (!verificationCnpj(value)) {
                return 'CNPJ inválido';
            } else {
                return true
            }
        } else {
            return 'CPF ou CNPJ inválido';
        };
    };

    const delayedQuery = useRef(
        debounce(e => {
            setCepEntrega(e);
            axios.get(`http://viacep.com.br/ws/${e}/json/`)
                .then((response) => {
                    console.log(response.data);
                    setCidadeEntrega(response.data.localidade);
                    setEstadoEntrega(response.data.uf);
                    setBairro(response.data.bairro);
                    setRua(response.data.logradouro);
                }).catch(() => {
                    setCidadeEntrega('');
                    setEstadoEntrega('');
                    setBairro('');
                    setRua('');
                });
        }, 500)
    ).current;

    const handleChange = (e) => {
        delayedQuery(e.target.value);
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
            <AvForm className="uploader" encType="multipart/form-data" style={{ padding: '10px', alignItems: 'center' }}>
                <UncontrolledAlert isOpen={visible2} toggle={onDismiss} color="success" fade={false}>
                    Pedido Emitido com sucesso
                </UncontrolledAlert>
                <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                    FORMULÁRIO PARA PEDIDOS <br />
                    Revista Democracia do Povo
                </h2>
                <FormGroup>
                <AvField onChange={e => setNomeCompletoCandidato(e.target.value)}
                                name='nome'
                                validate={{
                                    required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                                }}
                                placeholder="NOME DA TRANSPORTADORA ESCOLHIDA:"
                            />
                            <AvField onChange={e => setNomeCompletoCandidato(e.target.value)}
                                name='nome'
                                validate={{
                                    required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                                }}
                                placeholder="Endereço em São Paulo:"
                            />
                            <AvField onChange={e => setNomeCompletoCandidato(e.target.value)}
                                name='nome'
                                validate={{
                                    required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                                }}
                                placeholder="Fone:"
                            />
                            <AvField onChange={e => setNomeCompletoCandidato(e.target.value)}
                                name='nome'
                                validate={{
                                    required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                                }}
                                placeholder="E-mail:"
                            />
                </FormGroup>
                <FormGroup>
                    <AvField onChange={e => setNomeCompletoCandidato(e.target.value)}
                        name='nome'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                        placeholder="Nome completo do Candidato:"
                    />
                    <Input onChange={e => setNomeComoCandidato(e.target.value)} placeholder="Nome como candidato:" />
                </FormGroup>
                <div style={{ textAlign: 'center' }}>
                    <p>Candidato a: </p>
                    <FormGroup style={{ paddingTop: '10px' }} check inline>
                        <Label style={{ paddingRight: '10px' }} check>
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
                    <AvField
                        onChange={handleChange}
                        placeholder="CEP para entrega:"
                        name='cep'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <AvField
                        value={cidadeEntrega}
                        onChange={e => setCidadeEntrega(e.target.value)}
                        placeholder="Cidade para entrega:"
                        name='city'
                        disabled
                    />
                    <AvField
                        value={estadoEntrega}
                        onChange={e => setEstadoEntrega(e.target.value)}
                        placeholder="Estado para entrega:"
                        name='estado'
                        disabled
                    />
                    <AvField
                        value={rua}
                        onChange={e => setRua(e.target.value)}
                        placeholder="Rua para entrega:"
                        name='street'
                        disabled
                    />
                    <AvField
                        value={bairro}
                        onChange={e => setBairro(e.target.value)}
                        placeholder="Bairro para entrega:"
                        name='bairro'
                        disabled
                    />
                    <AvField
                        value={numero}
                        onChange={e => setNumero(e.target.value)}
                        placeholder="Número"
                        name='number'
                        type='number'
                    />
                    <AvField
                        onChange={e => setComplemento(e.target.value)}
                        placeholder="Complemento para entrega:"
                        name='complemento'
                    />
                    <h3>Dados para nota fiscal: </h3>
                    <AvField
                        onChange={e => setNomeNotaFiscal(e.target.value)}
                        name='nomeNotaFiscal'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                        placeholder="Nome:"
                    />
                    <AvField
                        onChange={e => setEnderecoNotaFiscal(e.target.value)}
                        placeholder="Endereço:"
                        name='endereço'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <AvField
                        onChange={e => setCidadeNotaFiscal(e.target.value)}
                        placeholder="Cidade :"
                        name='cidadeNotafiscal'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <AvField
                        onChange={e => setEstadoNotaFiscal(e.target.value)}
                        placeholder="Estado:"
                        name='stateNotafiscal'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <AvField
                        onChange={e => setCepNotaFiscal(e.target.value)}
                        placeholder="CEP:"
                        name='cepNotofiscal'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <AvField
                        onChange={e => setInscRg(e.target.value)}
                        placeholder="Insc. Est./RG:"
                        name='rg'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <AvField
                        onChange={handleChangeCpfCnpj}
                        placeholder="CNPJ/CPF:"
                        name='cpf'
                        value={cnpjOuCpf}
                        id="cpfcnpj"
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' },
                            verificationCpfCnpj
                        }}
                    />
                    <AvField
                        onChange={handleChangeTelefone}
                        placeholder="Telefone:"
                        name='telefone'
                        value={telefone}
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                    <AvField
                        onChange={e => setEmail(e.target.value)}
                        placeholder="E-mail:"
                        name='email'
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
                </FormGroup>
                <div style={{ textAlign: 'center' }}>
                    <p>Quantidade de Exemplares: </p>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='1'
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                                Edição com 8 páginas + 4 capas – Quantidade: 250 Exemplares - Valor: R$10
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='2'
                                onChange={e => setExemplar(e.target.value)} type="radio" name='radio2' />{' '}
                            Edição com 8 páginas + 4 capas – Quantidade: 500 Exemplares - Valor: R$10
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='3'
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                            Edição com 8 páginas + 4 capas – Quantidade: 1.000 Exemplares - Valor: R$10
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='4'
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                            Edição com 8 páginas + 4 capas – Quantidade: 2.000 Exemplares - Valor: R$10
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='5'
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                            Edição com 8 páginas + 4 capas – Quantidade: 4.000 Exemplares - Valor: R$10
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='7'
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                            Edição com 8 páginas + 4 capas – Quantidade: 8.000 Exemplares - Valor: R$10
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='8'
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 250 Exemplares - Valor: R$10
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='9'
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 500 Exemplares - Valor: R$10
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='10'
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 1.000 Exemplares - Valor: R$10
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='11'
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 2.000 Exemplares - Valor: R$10
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='12'
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 4.000 Exemplares - Valor: R$10
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }} check>
                            <Input value='14'
                                type="radio" onChange={e => setExemplar(e.target.value)} name='radio2' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 8.000 Exemplares - Valor: R$10
                        </Label>
                    </FormGroup>
                </div>
                <FormGroup>
                    <Input
                        type="select"
                        name='representantes'
                        placeholder='representantes'
                        onChange={e => setNomeDoRepresentanteComercial(e.target.value)}
                    >
                        <option>Escolha o representante</option>
                         {representantes.map(representante => {
                            return <option key={representante} value={representante}>{representante}</option>
                        })}
                    </Input>
                    <br/>
                    <AvField
                        name='cidade representante'
                        onChange={e => setCidadeDoRepresentanteComercial(e.target.value)}
                        placeholder="Cidade do Representante Comercial"
                        validate={{
                            required: { value: true, errorMessage: 'Esse campo é obrigatório' }
                        }}
                    />
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
                    <Input type="file" name="file" style={{ display: "none" }} id="exampleFile" />
                    </FormGroup>
                </FormGroup>
                <div style={{ textAlign: 'center', paddingTop: '5px' }}>
                    <Button onClick={() => enviarFormulario()} outline color="primary">Enviar</Button>
                </div>
            </AvForm>
        </div>
    );
};

const container = document.createElement("div");
document.body.appendChild(container);
export default Formulario1;