import React from 'react';
import { InputGroup, Input, Button, Label, FormGroup, Form, CustomInput } from 'reactstrap';

const Formulario1 = () => {
    return (
        <div>
            <Form style={{ padding: '10px', alignItems: 'center'}}>
                <FormGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Nome completo do Candidato:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Nome como candidato:" />
                    </InputGroup>
                </FormGroup>
                <div style={{ textAlign: 'center'}}>
                <p>Candidato a: </p>
                    <FormGroup style={{ paddingTop: '10px' }} check inline>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Prefeito
                        </Label>
                        <Label check>
                            <Input type="radio" name='radio1' />{' '}
                            Vereador
                        </Label>
                    </FormGroup>
                </div>
                <FormGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Endereço para entrega:" />
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
                </FormGroup>
                <div style={{ textAlign: 'center'}}>
                <p>Quantidade de Exemplares: </p>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 8 páginas + 4 capas – Quantidade: 250 Exemplares - Valor: R$877,50
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 8 páginas + 4 capas – Quantidade: 500 Exemplares - Valor: R$1.485,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 8 páginas + 4 capas – Quantidade: 1.000 Exemplares - Valor: R$2.350,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 8 páginas + 4 capas – Quantidade: 2.000 Exemplares - Valor: R$3.560,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 8 páginas + 4 capas – Quantidade: 4.000 Exemplares - Valor: R$7.120,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 8 páginas + 4 capas – Quantidade: 5.000 Exemplares - Valor: R$8.900,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 8 páginas + 4 capas – Quantidade: 8.000 Exemplares - Valor: R$17.400,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 250 Exemplares - Valor: R$1.087,50
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 500 Exemplares - Valor: R$1.905,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 1.000 Exemplares - Valor: R$3.050,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 2.000 Exemplares - Valor: R$4.680,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 4.000 Exemplares - Valor: R$9.360,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 5.000 Exemplares - Valor: R$11.700,00
                        </Label>
                    </FormGroup>
                    <FormGroup style={{ paddingTop: '10px' }} check row>
                        <Label style={{ paddingRight: '10px' }}check>
                            <Input type="radio" name='radio1' />{' '}
                            Edição com 12 páginas + 4 capas – Quantidade: 8.000 Exemplares - Valor: R$23.000,00
                        </Label>
                    </FormGroup>
                </div>
                <FormGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Nome do Representante Comercial:" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <Input placeholder="Cidade do Representante Comercial" />
                    </InputGroup>
                    <InputGroup size="lg" style={{ paddingTop: '10px' }}>
                        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
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
                    <Button outline color="primary">Enviar</Button>
                </div>
            </Form>
        </div>
    );
};

export default Formulario1;