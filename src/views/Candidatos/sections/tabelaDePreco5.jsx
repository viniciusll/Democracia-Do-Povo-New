import React from 'react';
import { Table } from 'reactstrap';

const TabelaDePreco5 = (props) => {
    return (
      <Table responsive style={{ textAlign: 'center', alignItems: 'center'}} bordered>
        <thead>
          <tr>
            <th style={{ color: '#000' }}>Quantidade de Exemplares</th>
            <th style={{ color: 'blue' }}>Peso Máximo</th>
            <th style={{ color: 'red' }}>Medidas das Caixas</th>
            <th style={{ color: 'red' }}>Quantidade de Caixas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={{ color: '#000' }} scope="row">250</th>
            <td style={{ color: 'blue' }}></td>
            <td style={{ color: 'red' }}></td>
            <td style={{ color: 'red' }}></td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">500</th>
            <td style={{ color: 'blue' }}></td>
            <td style={{ color: 'red' }}></td>
            <td style={{ color: 'red' }}></td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">1.000</th>
            <td style={{ color: 'blue' }}></td>
            <td style={{ color: 'red' }}></td>
            <td style={{ color: 'red' }}></td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">2.000</th>
            <td style={{ color: 'blue' }}></td>
            <td style={{ color: 'red' }}></td>
            <td style={{ color: 'red' }}></td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">4.000</th>
            <td style={{ color: 'blue' }}></td>
            <td style={{ color: 'red' }}></td>
            <td style={{ color: 'red' }}></td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">8.000</th>
            <td style={{ color: 'blue' }}></td>
            <td style={{ color: 'red' }}></td>
            <td style={{ color: 'red' }}></td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default TabelaDePreco5;