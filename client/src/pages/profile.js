import React, { Component } from 'react';
import AllResults from '../components/results/allResults';
import API from '../utils/API';

class Profile extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        API.getMovies()
        .then(res => {
            this.setState({ movies: res.data });
            console.log(this.state.movies)
        })
        .catch(err => console.log(err))
    }

    deleteMovie = id => {
        API.deleteMovie(id).then(this.componentDidMount())
        .catch(err => console.log(err.response))
    }

    render() {
        return(
            <div>
                <AllResults 
                movies={this.state.movies}
                deleteMovie={this.deleteMovie}
                />
            </div>
        )
    }
}

export default Profile;