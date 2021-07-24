import React from 'react';
import { Table } from 'reactstrap';

const MovieList = (props) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Director</th>
          <th scope="col">Genre</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{props.title}</td>
          <td>{props.director}</td>
          <td>{props.genre}</td>
        </tr>
       
      </tbody>
    </Table>
  );
}

export default MovieList;