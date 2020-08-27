import React from 'react';
import { Table } from 'reactstrap';

const TableComissao = (props) => {
    return (
      <Table responsive style={{ textAlign: 'center', alignItems: 'center'}} bordered>
        <thead>
          <tr>
            <th style={{ color: '#000' }}>Quantidade de Exemplares</th>
            <th style={{ color: 'blue' }}>Total a Pagar R$</th>
            <th style={{ color: 'blue' }}>Comissão do Representante R$</th>
            <th style={{ color: 'red' }}>Total a Pagar R$</th>
            <th style={{ color: 'red' }}>Comissão do Representante R$</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td style={{ color: 'orange' }}>Conteúdo 8 Páginas + 4 Capas Candidato</td>
            <td style={{ color: 'orange' }}>Conteúdo 8 Páginas + 4 Capas Candidato</td>
            <td style={{ color: 'purple' }}>Conteúdo 12 Páginas + 4 Capas Candidato</td>
            <td style={{ color: 'purple' }} >Conteúdo 12 Páginas + 4 Capas Candidato</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">250</th>
            <td style={{ color: 'blue' }}>1.110,00</td>
            <td style={{ color: 'blue' }}>66,60</td>
            <td style={{ color: 'red' }}>1.300,00</td>
            <td style={{ color: 'red' }}>78,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">500</th>
            <td style={{ color: 'blue' }}>1.560,00</td>
            <td style={{ color: 'blue' }}>96,60</td>
            <td style={{ color: 'red' }}>1.975,00</td>
            <td style={{ color: 'red' }}>118,50</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">1.000</th>
            <td style={{ color: 'blue' }}>2.460,00</td>
            <td style={{ color: 'blue' }}>147,50</td>
            <td style={{ color: 'red' }}>3.350,00</td>
            <td style={{ color: 'red' }}>201,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">2.000</th>
            <td style={{ color: 'blue' }}>4.020,00</td>
            <td style={{ color: 'blue' }}>241,20</td>
            <td style={{ color: 'red' }}>5.900,00</td>
            <td style={{ color: 'red' }}>354,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">4.000</th>
            <td style={{ color: 'blue' }}>5.480,00</td>
            <td style={{ color: 'blue' }}>328,80</td>
            <td style={{ color: 'red' }}>6.840,00</td>
            <td style={{ color: 'red' }}>410,40</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">8.000</th>
            <td style={{ color: 'blue' }}>9.200,00</td>
            <td style={{ color: 'blue' }}>552,00</td>
            <td style={{ color: 'red' }}>11.360,00</td>
            <td style={{ color: 'red' }}>681,60</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default TableComissao;