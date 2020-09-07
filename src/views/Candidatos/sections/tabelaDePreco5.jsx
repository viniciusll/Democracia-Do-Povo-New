import React from 'react';
import { Table } from 'reactstrap';

const TabelaDePreco5 = (props) => {
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
            <th style={{ color: '#000' }} scope="row">250</th>
            <td style={{ color: 'red' }}>20</td>
            <td style={{ color: 'blue' }}>45 x 33 x 15</td>
            <td style={{ color: 'blue' }}>1</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">500</th>
            <td style={{ color: 'red' }}>40</td>
            <td style={{ color: 'blue' }}>45 x 33 x 15</td>
            <td style={{ color: 'blue' }}>2</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">1.000</th>
            <td style={{ color: 'red' }}>80</td>
            <td style={{ color: 'blue' }}>45 x 33 x 15</td>
            <td style={{ color: 'blue' }}>4</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">2.000</th>
            <td style={{ color: 'red' }}>160</td>
            <td style={{ color: 'blue' }}>45 x 33 x 15</td>
            <td style={{ color: 'blue' }}>8</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">4.000</th>
            <td style={{ color: 'red' }}>320</td>
            <td style={{ color: 'blue' }}>45 x 33 x 15</td>
            <td style={{ color: 'blue' }}>16</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">8.000</th>
            <td style={{ color: 'red' }}>640</td>
            <td style={{ color: 'blue' }}>45 x 33 x 15</td>
            <td style={{ color: 'blue' }}>32</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default TabelaDePreco5;