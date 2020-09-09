import React from 'react';
import { Table } from 'reactstrap';

const TabelaDePreco4 = (props) => {
    return (
      <Table responsive style={{ textAlign: 'center', alignItems: 'center'}} bordered>
        <thead>
          <tr>
            <th style={{ color: '#000' }}>Quantidade de Exemplares</th>
            <th style={{ color: 'blue' }}>Total a Pagar R$ Por Candidato</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={{ color: '#000' }} scope="row">165</th>
            <td style={{ color: 'blue' }}>400,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">330</th>
            <td style={{ color: 'blue' }}>650,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">660</th>
            <td style={{ color: 'blue' }}>1.200,00</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default TabelaDePreco4;