import React from 'react';
import { Table } from 'reactstrap';

const TabelaDePreco6 = (props) => {
    return (
      <Table responsive style={{ textAlign: 'center', alignItems: 'center'}} bordered>
      <thead>
        <tr>
          <th style={{ color: '#000' }}>Quantidade de Exemplares</th>
          <th style={{ color: 'red' }}>Total do peso 4 Páginas</th>
          <th style={{ color: 'red' }}>Total do peso 8 Páginas</th>
          <th style={{ color: 'red' }}>Total do peso 12 Páginas</th>
          <th style={{ color: 'blue' }}>Medidas das Caixas</th>
          <th style={{ color: 'blue' }}>Quantidade de Caixas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th style={{ color: '#000' }} scope="row">500</th>
          <td style={{ color: 'red' }}>10</td>
          <td style={{ color: 'red' }}>15</td>
          <td style={{ color: 'red' }}>25</td>
          <td style={{ color: 'blue' }}>45 x 33 x 15</td>
          <td style={{ color: 'blue' }}>1 - 1 - 2</td>
        </tr>
        <tr>
          <th style={{ color: '#000' }} scope="row">1.000</th>
          <td style={{ color: 'red' }}>20</td>
          <td style={{ color: 'red' }}>30</td>
          <td style={{ color: 'red' }}>50</td>
          <td style={{ color: 'blue' }}>45 x 33 x 15</td>
          <td style={{ color: 'blue' }}>2 - 2 - 3</td>
        </tr>
        <tr>
          <th style={{ color: '#000' }} scope="row">2.000</th>
          <td style={{ color: 'red' }}>40</td>
          <td style={{ color: 'red' }}>60</td>
          <td style={{ color: 'red' }}>100</td>
          <td style={{ color: 'blue' }}>45 x 33 x 15</td>
          <td style={{ color: 'blue' }}>3 - 4 - 5</td>
        </tr>
      </tbody>
    </Table>
    );
  }
  
  export default TabelaDePreco6;