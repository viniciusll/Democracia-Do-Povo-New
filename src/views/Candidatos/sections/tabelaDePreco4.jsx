import React from 'react';
import { Table } from 'reactstrap';

const TabelaDePreco4 = (props) => {
    return (
      <Table responsive style={{ textAlign: 'center', alignItems: 'center'}} bordered>
        <thead>
          <tr>
            <th style={{ color: '#000' }}>Quantidade de Exemplares</th>
            <th style={{ color: 'blue' }}>Total a Pagar R$ Por Candidato</th>
            <th style={{ color: 'red' }}>Total a Pagar R$ 12 (doze) Candidatos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={{ color: '#000' }} scope="row">2.000</th>
            <td style={{ color: 'blue' }}>400,00</td>
            <td style={{ color: 'red' }}>4.800,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">4.000</th>
            <td style={{ color: 'blue' }}>650,00</td>
            <td style={{ color: 'red' }}>7.800,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">8.000</th>
            <td style={{ color: 'blue' }}>1.200,00</td>
            <td style={{ color: 'red' }}>14.400,00</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default TabelaDePreco4;