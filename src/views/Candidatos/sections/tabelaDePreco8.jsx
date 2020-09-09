import React from 'react';
import { Table } from 'reactstrap';

const TabelaDePreco8 = (props) => {
    return (
      <Table responsive style={{ textAlign: 'center', alignItems: 'center'}} bordered>
        <thead>
          <tr>
            <th style={{ color: '#000' }}>Quantidade de Exemplares</th>
            <th style={{ color: 'red' }}>Peso Máximo</th>
            <th style={{ color: 'blue' }}>Medidas das Caixas</th>
            <th style={{ color: 'blue' }}>Quantidade de Caixas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={{ color: '#000' }} scope="row">165</th>
            <td style={{ color: 'red' }}>10</td>
            <td style={{ color: 'blue' }}>45 x 33 x 15</td>
            <td style={{ color: 'blue' }}>1</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">330</th>
            <td style={{ color: 'red' }}>20</td>
            <td style={{ color: 'blue' }}>45 x 33 x 15</td>
            <td style={{ color: 'blue' }}>1</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">660</th>
            <td style={{ color: 'red' }}>40</td>
            <td style={{ color: 'blue' }}>45 x 33 x 15</td>
            <td style={{ color: 'blue' }}>2</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default TabelaDePreco8;