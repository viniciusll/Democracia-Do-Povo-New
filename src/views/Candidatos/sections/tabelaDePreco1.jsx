import React from 'react';
import { Table } from 'reactstrap';

const TabelaDePreco1 = (props) => {
    return (
      <Table responsive style={{ textAlign: 'center', alignItems: 'center'}} bordered>
        <thead>
          <tr>
            <th style={{ color: '#000' }}>Quantidade de Exemplares</th>
            <th style={{ color: 'blue' }}>Total a Pagar R$</th>
            <th style={{ color: 'red' }}>Total a Pagar R$</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td style={{ color: 'red' }}> Conteúdo 8 Páginas + 4 Capas do Candidato</td>
            <td style={{ color: 'blue' }}>Conteúdo 12 Páginas + 4 Capas do Candidato</td>
          </tr>  
          <tr>
            <th style={{ color: '#000' }} scope="row">250</th>
            <td style={{ color: 'blue' }}>1.110,00</td>
            <td style={{ color: 'red' }}>1.300,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">500</th>
            <td style={{ color: 'blue' }}>1.560,00</td>
            <td style={{ color: 'red' }}>1.975,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">1.000</th>
            <td style={{ color: 'blue' }}>2.460,00</td>
            <td style={{ color: 'red' }}>3.350,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">2.000</th>
            <td style={{ color: 'blue' }}>4.020,00</td>
            <td style={{ color: 'red' }}>5.900,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">4.000</th>
            <td style={{ color: 'blue' }}>5.480,00</td>
            <td style={{ color: 'red' }}>6.840,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">8.000</th>
            <td style={{ color: 'blue' }}>9.200,00</td>
            <td style={{ color: 'red' }}>11.360,00</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default TabelaDePreco1;