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
            <td style={{ color: 'blue' }}>877,50</td>
            <td style={{ color: 'blue' }}>43,38</td>
            <td style={{ color: 'red' }}>1.087,50</td>
            <td style={{ color: 'red' }}>54,37</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">500</th>
            <td style={{ color: 'blue' }}>1.485,00</td>
            <td style={{ color: 'blue' }}>74,25</td>
            <td style={{ color: 'red' }}>1.905,00</td>
            <td style={{ color: 'red' }}>95,25</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">1.000</th>
            <td style={{ color: 'blue' }}>2.350,00</td>
            <td style={{ color: 'blue' }}>117,50</td>
            <td style={{ color: 'red' }}>3.050,00</td>
            <td style={{ color: 'red' }}>152,50</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">2.000</th>
            <td style={{ color: 'blue' }}>3.560,00</td>
            <td style={{ color: 'blue' }}>178,00</td>
            <td style={{ color: 'red' }}>4.680,00</td>
            <td style={{ color: 'red' }}>234,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">4.000</th>
            <td style={{ color: 'blue' }}>7.120,00</td>
            <td style={{ color: 'blue' }}>356,00</td>
            <td style={{ color: 'red' }}>9.360,00</td>
            <td style={{ color: 'red' }}>468,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">5.000</th>
            <td style={{ color: 'blue' }}>8.900,00</td>
            <td style={{ color: 'blue' }}>445,00</td>
            <td style={{ color: 'red' }}>11.700,00</td>
            <td style={{ color: 'red' }}>585,00</td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row">10.000</th>
            <td style={{ color: 'blue' }}>17.400,00</td>
            <td style={{ color: 'blue' }}>870,00</td>
            <td style={{ color: 'red' }}>23.000,00</td>
            <td style={{ color: 'red' }}>1.150,00</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default TableComissao;