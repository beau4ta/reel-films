import React, { } from 'react';
import SearchForm from '../components/search/searchForm';
import AllResults from '../components/results/allResults';
import API from '../utils/API';
import MovieList from '../components/Table/Table';

function List() {

    return (
        <Container fluid>
            <h1>Movie List</h1>
            <Table></Table>
        </Container>
    );
}

export default List;