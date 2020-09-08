import React from 'react';
import { Table } from 'reactstrap';

const TabelaRepresentantes = () => {
    return (
      <Table responsive style={{ textAlign: 'center', alignItems: 'center'}} bordered>
        <thead>
          <tr>
            <th style={{ color: '#000' }}>NOME</th>
            <th style={{ color: '#000' }}>Cidade</th>
            <th style={{ color: '#000' }}>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={{ color: '#000' }} scope="row"></th>
            <td style={{ color: '#000' }}></td>
            <td style={{ color: '#000' }}></td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row"></th>
            <td style={{ color: '#000' }}></td>
            <td style={{ color: '#000' }}></td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row"></th>
            <td style={{ color: '#000' }}></td>
            <td style={{ color: '#000' }}></td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row"></th>
            <td style={{ color: '#000' }}></td>
            <td style={{ color: '#000' }}></td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row"></th>
            <td style={{ color: '#000' }}></td>
            <td style={{ color: '#000' }}></td>
          </tr>
          <tr>
            <th style={{ color: '#000' }} scope="row"></th>
            <td style={{ color: '#000' }}></td>
            <td style={{ color: '#000' }}></td>
          </tr>
        </tbody>
      </Table>
    );
  };
  
  export default TabelaRepresentantes;