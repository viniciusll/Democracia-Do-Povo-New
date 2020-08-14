import React from 'react';
import { Table } from 'reactstrap';

const TableComissaoCandidatos8 = (props) => {
    return (
      <Table responsive style={{ textAlign: 'center', alignItems: 'center'}} bordered>
        <thead>
          <tr>
            <th style={{ color: '#000' }}>Quantidade de Exemplares</th>
            <th style={{ color: 'blue' }}>Total a Pagar R$ Por Candidato</th>
            <th style={{ color: 'blue' }}>Valor do Pedido R$ 8 (oito) Candidatos</th>
            <th style={{ color: 'red' }}>Comissão do Representante R$</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={{ color: '#000' }} scope="row">2.000</th>
            <td style={{ color: 'blue' }}>450,00</td>
            <td style={{ color: 'blue' }}>3.600,00</td>
            <td style={{ color: 'red' }}>252,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">4.000</th>
            <td style={{ color: 'blue' }}>700,00</td>
            <td style={{ color: 'blue' }}>5.600,00</td>
            <td style={{ color: 'red' }}>392,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">8.000</th>
            <td style={{ color: 'blue' }}>1.300,00</td>
            <td style={{ color: 'blue' }}>10.400,00</td>
            <td style={{ color: 'red' }}>728,00</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default TableComissaoCandidatos8;