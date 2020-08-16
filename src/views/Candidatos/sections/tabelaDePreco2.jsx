import React from 'react';
import { Table } from 'reactstrap';

const TabelaDePreco2 = (props) => {
    return (
      <Table responsive style={{ textAlign: 'center', alignItems: 'center'}} bordered>
        <thead>
          <tr>
            <th style={{ color: '#000' }}>Quantidade de Exemplares</th>
            <th style={{ color: 'blue' }}>Total a Pagar R$ Por Candidato</th>
            <th style={{ color: 'red' }}>Total a Pagar R$ 4 (quatro) Candidatos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={{ color: '#000' }} scope="row">2.000 + 1.000</th>
            <td style={{ color: 'blue' }}>500,00</td>
            <td style={{ color: 'red' }}>2.000,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">4.000 + 1.000</th>
            <td style={{ color: 'blue' }}>750,00</td>
            <td style={{ color: 'red' }}>3.000,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">8.000 + 2.000</th>
            <td style={{ color: 'blue' }}>1.350,00</td>
            <td style={{ color: 'red' }}>5.400,00</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default TabelaDePreco2;