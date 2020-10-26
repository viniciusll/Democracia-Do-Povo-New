import React from 'react';
import { Table } from 'reactstrap';

function TabelaPadaria1() {
    return (
        <Table responsive style={{ textAlign: 'center', alignItems: 'center' }} bordered>
            <thead>
                <tr>
                    <th style={{ color: 'green' }}>Quantidade de Exemplares</th>
                    <th style={{ color: 'red' }}>Total a Pagar R$</th>
                    <th style={{ color: 'red' }}>Comissão do Representante R$</th>
                    <th style={{ color: '#000' }}>Pós-Fixo REPRESENTANTE</th>
                    <th style={{ color: '#000' }}>Pós-Fixo RESTAURANTE</th>
                    <th style={{ color: 'red' }}>Total a Pagar R$</th>
                    <th style={{ color: 'red' }}>Comissão do Representante R$</th>
                    <th style={{ color: '#000' }}>Pós-Fixo REPRESENTANTE</th>
                    <th style={{ color: '#000' }}>Pós-Fixo REPRESENTANTE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"></th>
                    <td style={{ color: 'purple' }}>Conteúdo 12 Pág. <br/> + 4 Capas do Estabelecimento </td>
                    <td style={{ color: 'purple' }}>Conteúdo 12 Pág. <br/> + 4 Capas do Estabelecimento</td>
                    <td style={{ color: 'purple' }}></td>
                    <td style={{ color: 'purple' }}></td>
                    <td style={{ color: '#000' }}>Conteúdo 16 Pág.<br/> + 4 Capas do Estabelecimento</td>
                    <td style={{ color: '#000' }}>Conteúdo 16 Pág.<br/> + 4 Capas do Estabelecimento</td>
                </tr>
                <tr>
                    <th style={{ color: 'green' }} scope="row">250</th>
                    <td style={{ color: 'red' }}>1.300,00</td>
                    <td style={{ color: 'red' }}>78,00</td>
                    <td style={{ color: 'red' }}>52,75</td>
                    <td style={{ color: 'red' }}>52,75</td>
                    <td style={{ color: '#000' }}>1.397,50</td>
                    <td style={{ color: '#000' }}>83,85</td>
                    <td style={{ color: '#000' }}>50,95</td>
                    <td style={{ color: '#000' }}>50,95</td>
                </tr>
                <tr>
                    <th style={{ color: 'green' }} scope="row">500</th>
                    <td style={{ color: 'red' }}>1.975,00</td>
                    <td style={{ color: 'red' }}>118,50</td>
                    <td style={{ color: 'red' }}>52,75</td>
                    <td style={{ color: 'red' }}>52,75</td>
                    <td style={{ color: '#000' }}>2.175,00</td>
                    <td style={{ color: '#000' }}>130,50</td>
                    <td style={{ color: '#000' }}>50,95</td>
                    <td style={{ color: '#000' }}>50,95</td>
                </tr>
                <tr>
                    <th style={{ color: 'green' }} scope="row">1.000</th>
                    <td style={{ color: 'red' }}>3.350,00</td>
                    <td style={{ color: 'red' }}>201,00</td>
                    <td style={{ color: 'red' }}>63,62</td>
                    <td style={{ color: 'red' }}>63,62</td>
                    <td style={{ color: '#000' }}>3.780,00</td>
                    <td style={{ color: '#000' }}>226,80</td>
                    <td style={{ color: '#000' }}>63,15</td>
                    <td style={{ color: '#000' }}>63,15</td>
                </tr>
                <tr>
                    <th style={{ color: 'green' }} scope="row">2.000</th>
                    <td style={{ color: 'red' }}>5.900,00</td>
                    <td style={{ color: 'red' }}>354,00</td>
                    <td style={{ color: 'red' }}>110,75</td>
                    <td style={{ color: 'red' }}>110,75</td>
                    <td style={{ color: '#000' }}>6.840,00</td>
                    <td style={{ color: '#000' }}>410,40</td>
                    <td style={{ color: '#000' }}>123,20</td>
                    <td style={{ color: '#000' }}>123,20</td>
                </tr>
                <tr>
                    <th style={{ color: 'green' }} scope="row">4.000</th>
                    <td style={{ color: 'red' }}>6.840,00</td>
                    <td style={{ color: 'red' }}>410,40</td>
                    <td style={{ color: 'red' }}>170,70</td>
                    <td style={{ color: 'red' }}>170,70</td>
                    <td style={{ color: '#000' }}>8.200,00</td>
                    <td style={{ color: '#000' }}>492,00</td>
                    <td style={{ color: '#000' }}>198,50</td>
                    <td style={{ color: '#000' }}>198,50</td>
                </tr>
                <tr>
                    <th style={{ color: 'green' }} scope="row">8.000</th>
                    <td style={{ color: 'red' }}>11.360,00</td>
                    <td style={{ color: 'red' }}>681,60</td>
                    <td style={{ color: 'red' }}>302,80</td>
                    <td style={{ color: 'red' }}>302,80</td>
                    <td style={{ color: '#000' }}>13.520,00</td>
                    <td style={{ color: '#000' }}>811,20</td>
                    <td style={{ color: '#000' }}>364,60</td>
                    <td style={{ color: '#000' }}>364,60</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default TabelaPadaria1;