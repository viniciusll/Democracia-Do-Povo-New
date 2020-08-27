import React from 'react';
import { Table } from 'reactstrap';

const TableComissaoCandidatos = (props) => {
    return (
      <Table responsive style={{ textAlign: 'center', alignItems: 'center'}} bordered>
        <thead>
          <tr>
            <th style={{ color: '#000' }}>Quantidade de Exemplares</th>
            <th style={{ color: 'blue' }}>Total a Pagar R$ Por Candidato</th>
            <th style={{ color: 'blue' }}>Valor do Pedido R$ 4 (quatro) Candidatos</th>
            <th style={{ color: 'red' }}>Comissão do Representante R$</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={{ color: '#000' }} scope="row">2.000</th>
            <td style={{ color: 'blue' }}>500,00</td>
            <td style={{ color: 'blue' }}>2.000,00</td>
            <td style={{ color: 'red' }}>140,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">4.000</th>
            <td style={{ color: 'blue' }}>750,00</td>
            <td style={{ color: 'blue' }}>3.000,00</td>
            <td style={{ color: 'red' }}>210,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">8.000</th>
            <td style={{ color: 'blue' }}>1.350,00</td>
            <td style={{ color: 'blue' }}>5.400,00</td>
            <td style={{ color: 'red' }}>378,00</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default TableComissaoCandidatos;