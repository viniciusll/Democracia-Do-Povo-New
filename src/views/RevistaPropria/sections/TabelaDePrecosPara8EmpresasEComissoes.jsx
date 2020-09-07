import React from 'react';
import { Table } from 'reactstrap';

function TabelaDePrecosPara8EmpresasEComissoes() {
    return (
        <Table responsive style={{ textAlign: 'center', alignItems: 'center' }} bordered>
            <thead>
                <tr>
                    <th style={{ color: 'green' }}>Quantidade de Exemplares</th>
                    <th style={{ color: 'red' }}>Valor a pagar por empresa R$</th>
                    <th style={{ color: 'red' }}>Faturamento R$</th>
                    <th style={{ color: 'red' }}>Comissão do Representante R$</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"></th>
                    <td style={{ color: 'purple' }}>1 página 20% de anúncio + 80% de matéria</td>
                    <td style={{ color: 'purple' }}>8 páginas</td>
                    <td style={{ color: 'purple' }}>8 páginas</td>
                </tr>
                <tr>
                    <th style={{ color: 'green' }} scope="row">2.000</th>
                    <td style={{ color: '#000' }}>450,00</td>
                    <td style={{ color: '#000' }}>3.600,00</td>
                    <td style={{ color: '#000' }}>252,00</td>
                </tr>
                <tr>
                    <th style={{ color: 'green' }} scope="row">4.000</th>
                    <td style={{ color: '#000' }}>750,00</td>
                    <td style={{ color: '#000' }}>5.600,00</td>
                    <td style={{ color: '#000' }}>392,00</td>
                </tr>
                <tr>
                    <th style={{ color: 'green' }} scope="row">8.000</th>
                    <td style={{ color: '#000' }}>1.300,00</td>
                    <td style={{ color: '#000' }}>10.400,00</td>
                    <td style={{ color: '#000' }}>728,00</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default TabelaDePrecosPara8EmpresasEComissoes;