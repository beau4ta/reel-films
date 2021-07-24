import React, { } from 'react';
import { Table, Container } from 'reactstrap';
import SearchForm from '../components/search/searchForm';
import AllResults from '../components/results/allResults';
import API from '../utils/API';
import MovieList from '../components/Table/Table';

function Profile() {

    return (
        <Container fluid>
            <h1>Movie List</h1>
            <Table></Table>
        </Container>
    );
}

export default Profile;