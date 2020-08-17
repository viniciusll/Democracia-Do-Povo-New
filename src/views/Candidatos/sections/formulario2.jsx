import React from 'react';
import { InputGroup, Input, Button, Label, FormGroup, Form, CustomInput } from 'reactstrap';

const Formulario2 = () => {
    return (
        <div>
            <Form>
                <FormGroup>
                    <InputGroup>
                        <Input placeholder="Primeira capa:" />
                    </InputGroup>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Formulario2;