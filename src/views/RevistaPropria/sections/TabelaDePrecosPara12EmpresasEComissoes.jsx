import React from 'react';
import { Table } from 'reactstrap';

function TabelaDePrecosPara4EmpresasEComissoes() {
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
                    <td style={{ color: 'purple' }}>4 páginas + 4 capas</td>
                    <td style={{ color: 'purple' }}>4 páginas + 4 capas</td>
                </tr>
                <tr>
                    <th style={{ color: 'green' }} scope="row">2.000</th>
                    <td style={{ color: '#000' }}>400,00</td>
                    <td style={{ color: '#000' }}>4.800,00</td>
                    <td style={{ color: '#000' }}>336,00</td>
                </tr>
                <tr>
                    <th style={{ color: 'green' }} scope="row">4.000</th>
                    <td style={{ color: '#000' }}>650,00</td>
                    <td style={{ color: '#000' }}>7.800,00</td>
                    <td style={{ color: '#000' }}>546,00</td>
                </tr>
                <tr>
                    <th style={{ color: 'green' }} scope="row">8.000</th>
                    <td style={{ color: '#000' }}>1.200,00</td>
                    <td style={{ color: '#000' }}>14.400,00</td>
                    <td style={{ color: '#000' }}>1.008,00</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default TabelaDePrecosPara4EmpresasEComissoes;