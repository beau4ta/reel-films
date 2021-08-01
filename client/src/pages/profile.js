import React, { Component } from 'react';
import SavedResults from '../components/results/savedResults';
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
        console.log(id)
        API.deleteMovie(id)
        .then(this.componentDidMount())
        .then(alert('Movie deleted!'), window.location.reload())
        .catch(err => console.log(err.response))
    }

    render() {
        return(
            <div>
                <SavedResults
                movies={this.state.movies}
                deleteMovie={this.deleteMovie}
                />
            </div>
        )
    }
}

export default Profile;