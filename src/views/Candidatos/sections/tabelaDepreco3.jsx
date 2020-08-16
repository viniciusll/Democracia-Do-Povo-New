import React from 'react';
import { Table } from 'reactstrap';

const TabelaDePreco3 = (props) => {
    return (
      <Table responsive style={{ textAlign: 'center', alignItems: 'center'}} bordered>
        <thead>
          <tr>
            <th style={{ color: '#000' }}>Quantidade de Exemplares</th>
            <th style={{ color: 'blue' }}>Total a Pagar R$ Por Candidato</th>
            <th style={{ color: 'red' }}>Total a Pagar R$ 8 (oito) Candidatos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={{ color: '#000' }} scope="row">2.000</th>
            <td style={{ color: 'blue' }}>450,00</td>
            <td style={{ color: 'red' }}>3.600,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">4.000</th>
            <td style={{ color: 'blue' }}>700,00</td>
            <td style={{ color: 'red' }}>5.600,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">8.000</th>
            <td style={{ color: 'blue' }}>1.300,00</td>
            <td style={{ color: 'red' }}>10.400,00</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default TabelaDePreco3;