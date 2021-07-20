import React from 'react';
import { Table } from 'reactstrap';

const MovieList = (props) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Director</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td></td>
          <td> </td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MovieList;