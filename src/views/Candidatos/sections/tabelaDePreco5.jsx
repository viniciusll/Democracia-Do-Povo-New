import React from 'react';
import { Table } from 'reactstrap';

const TabelaDePreco5 = (props) => {
    return (
      <Table responsive style={{ textAlign: 'center', alignItems: 'center'}} bordered>
        <thead>
          <tr>
            <th style={{ color: '#000' }}>Quantidade de Exemplares</th>
            <th style={{ color: 'red' }}>Total do peso 8 Páginas + 4 Capas</th>
            <th style={{ color: 'red' }}>Total do peso 12 Páginas + 4 Capas</th>
            <th style={{ color: 'blue' }}>Medidas das Caixas</th>
            <th style={{ color: 'blue' }}>Quantidade de Caixas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={{ color: '#000' }} scope="row">250</th>
            <td style={{ color: 'red' }}>13</td>
            <td style={{ color: 'red' }}>16</td>
            <td style={{ color: 'blue' }}>45 x 33 x 15</td>
            <td style={{ color: 'blue' }}>1 - 1</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">500</th>
            <td style={{ color: 'red' }}>25</td>
            <td style={{ color: 'red' }}>32</td>
            <td style={{ color: 'blue' }}>45 x 33 x 15</td>
            <td style={{ color: 'blue' }}>2 - 2</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">1.000</th>
            <td style={{ color: 'red' }}>50</td>
            <td style={{ color: 'red' }}>64</td>
            <td style={{ color: 'blue' }}>45 x 33 x 15</td>
            <td style={{ color: 'blue' }}>3 - 4</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">2.000</th>
            <td style={{ color: 'red' }}>100</td>
            <td style={{ color: 'red' }}>128</td>
            <td style={{ color: 'blue' }}>45 x 33 x 15</td>
            <td style={{ color: 'blue' }}>5 - 7</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">4.000</th>
            <td style={{ color: 'red' }}>200</td>
            <td style={{ color: 'red' }}>256</td>
            <td style={{ color: 'blue' }}>45 x 33 x 15</td>
            <td style={{ color: 'blue' }}>10 - 12</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">8.000</th>
            <td style={{ color: 'red' }}>400</td>
            <td style={{ color: 'red' }}>512</td>
            <td style={{ color: 'blue' }}>45 x 33 x 15</td>
            <td style={{ color: 'blue' }}>18 - 23</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default TabelaDePreco5;