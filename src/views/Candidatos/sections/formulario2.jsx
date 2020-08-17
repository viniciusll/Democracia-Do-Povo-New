import React from 'react';
import { InputGroup, Input, Button, Label, FormGroup, Form, CustomInput } from 'reactstrap';

const Formulario2 = () => {
    return (
        <div>
            <Form style={{ padding: '10px', alignItems: 'center'}}>
                <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                    FORMULÁRIO PARA PEDIDOS <br />
                    Revista Panfleto em Revista
                </h2>
                <FormGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Primeira capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Segunda capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Terceira capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Quarta capa:" />
                    </InputGroup>
                    <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                        Nomes completos dos 8 (oito) Candidatos e nomes como candidatos:
                    </h2>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Primeira capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Segunda capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Página 3:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Página 4:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Página 5:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Página 6:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Terceira capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Quarta capa:" />
                    </InputGroup>
                    <h2 style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                        Nomes completos dos 12 (doze) Candidatos e nomes como candidatos:
                    </h2>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Primeira capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Segunda capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Página 3:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Página 4:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Página 5:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Página 6:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Página 7:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Página 8:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Página 9:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Página 10:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Terceira capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Quarta capa:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Endereço para entrega" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Cidade para entrega:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Estado para entrega:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="CEP para entrega:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Endereço para nota fiscal:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Cidade para nota fiscal:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Estado para nota fiscal:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="CEP para nota fiscal:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Insc. Est./RG:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="CNPJ/CPF:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Telefone:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="E-mail:" />
                    </InputGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 8 Candidatos - Quantidade: 2.000 Exemplares - Valor: R$3.600,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 8 Candidatos - Quantidade: 4.000 Exemplares - Valor: R$5.600,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 8 Candidatos - Quantidade: 8.000 Exemplares - Valor: R$10.400,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 12 Candidatos – Quantidade: 2.000 Exemplares - Valor: R$4.800,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 12 Candidatos – Quantidade: 4.000 Exemplares - Valor: R$7.800,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 12 Candidatos – Quantidade: 8.000 Exemplares - Valor: R$14.400,00
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                            <Input placeholder="Nome do Representante Comercial:" />
                        </InputGroup>
                        <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                            <Input placeholder="Cidade do Representante Comercial" />
                        </InputGroup>
                        <p style={{ textAlign: 'center', paddingTop: '20px', color: '#000bd4', fontFamily: 'Batang' }}>
                            Envie as fotos dos candidatos e textos das matérias
                            que entrarão na edição da Revista Panfleto em Revista.
                        </p>
                        <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                            <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
                        </InputGroup>
                    </FormGroup>
                </FormGroup>
                <div style={{ textAlign: 'center', paddingTop: '5px' }}>
                    <Button outline color="primary">
                        Enviar
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Formulario2;