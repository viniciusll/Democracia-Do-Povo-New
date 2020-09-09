import React from 'react';
import { Table } from 'reactstrap';

function TabelaDePrecosPara4EmpresasEComissoes() {
    return (
        <Table responsive style={{ textAlign: 'center', alignItems: 'center' }} bordered>
            <thead>
                <tr>
                    <th style={{ color: 'green' }}>Total de Exemplares/Por Empresa</th>
                    <th style={{ color: 'red' }}>Valor a pagar por empresa R$</th>
                    <th style={{ color: 'red' }}>Faturamento R$</th>
                    <th style={{ color: 'red' }}>Comissão do Representante R$</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"></th>
                    <td style={{ color: 'purple' }}>1 página 20% de anúncio + 80% de matéria</td>
                    <td style={{ color: 'purple' }}>4 páginas</td>
                    <td style={{ color: 'purple' }}>4 páginas</td>
                </tr>
                <tr>
                    <th style={{ color: 'green' }} scope="row">2.000/500</th>
                    <td style={{ color: '#000' }}>500,00</td>
                    <td style={{ color: '#000' }}>2.000,00</td>
                    <td style={{ color: '#000' }}>140,00</td>
                </tr>
                <tr>
                    <th style={{ color: 'green' }} scope="row">4.000/1.000</th>
                    <td style={{ color: '#000' }}>750,00</td>
                    <td style={{ color: '#000' }}>3.000,00</td>
                    <td style={{ color: '#000' }}>210,00</td>
                </tr>
                <tr>
                    <th style={{ color: 'green' }} scope="row">8.000/2.000</th>
                    <td style={{ color: '#000' }}>1.350,00</td>
                    <td style={{ color: '#000' }}>5.400,00</td>
                    <td style={{ color: '#000' }}>378,00</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default TabelaDePrecosPara4EmpresasEComissoes;